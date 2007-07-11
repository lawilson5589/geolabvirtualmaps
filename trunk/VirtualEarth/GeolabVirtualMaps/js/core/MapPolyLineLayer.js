/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
// IMPORTANT: 
//      The Geolab.PolyLineLayer object instance variable this.__ShapeNames will hold all Shapes
// and static member Geolab.PolyLineLayer.Layers will track all PolyLineShapeLayers in the map.
// The tho hastables allow quicly access VEMap Objects 
Geolab.PolyLineLayer = function(layerID){
    this.__webService = null;
    this.__layerID = layerID;
    this.__layer = null;
    this.__ShapeNames = new Geolab.HashTable();
};
// Static member to track all Polyline layers
Geolab.PolyLineLayer.Layers = new Geolab.HashTable();
// Prototypes
Geolab.PolyLineLayer.prototype = {
    
    // Public methods
    SetWebService : function(webService){
        this.__webService = webService;
    },
    DeleteAllShapes : function()
    {
        try
        {
           this.__layer.DeleteAllShapes();
           this.__ShapeNames.clear();
        }
        catch (e)
        {
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    __GetShape : function(name){
        return this.__layer.GetShapeByID(this.__ShapeNames.get(name))
    },
    
    ToggleShapeVisibility : function (name){
        if(this.__layer){
            var id = this.__GetShape(name);
            if(id){
                if(id.GetVisibility()){ 
                    id.Hide();
                    map.HideInfoBox();
                } 
                else {
                    id.Show();
                    id.GetPoints(); 
                    map.SetMapView(id.GetPoints());
                    map.ShowInfoBox(id);
                };
                id = null;
            }
        }
    },
    
    Invoke: function(args){
        // Store variables to use after AJAX callback
        var obj = this;
        function OnFailed(error)
        {
            // This is the callback function invoked if the Web service failed.
            // Display the error.    
            Sys.Debug.trace(error.get_message());
            error = null;
        };
        
        function OnSucceeded(results, eventArgs)
        {    
            // This the handler for the Web request completed event
            // that is used to display return data.
            try{
                var polyline = null;
                eval(results);
                if(polyline)
                {   
                    // First time ever any polyline added on map  
                    if(obj.__layer == null){
                        obj.__layer = new VEShapeLayer();
                        obj.__layer.SetTitle(obj.__layerID);
                        obj.__LayersIDIndex = obj.__layer.iid;
                        // Put key like PTown and MSVE unique id in hash
                        Geolab.PolyLineLayer.Layers.put(obj.__layer.Name,obj.__layer.iid);
                        obj.__ShapeLayerIndex = map.GetShapeLayerCount();
                        map.AddShapeLayer(obj.__layer);
                    }
                    //---------------------------------------
                    
                    obj.__layer.AddShape(polyline);
                    obj.__ShapeNames.put(obj.args, polyline.GetID());
                    map.SetMapView(polyline.GetPoints());
                    map.ShowInfoBox(polyline);
                    polyline = null; 
                }
            }catch(e){
                Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
            }
            results = null; eventArgs = null; 
        }; 
    
        //    Usage of Ajax webservices
        //    <asp:ScriptManager ID="scriptManagerMap" runat="server">
        //    <services> // Add web service
        //        <asp:ServiceReference Path="~/MapWebService/CapeCod_WebService.asmx" />
        //    </services>
        //    Javascript call:
        //    var CapeCodeRoutes = new Geolab.PolyLineLayer('CapeCode_Routes');
        //    CapeCodeRoutes.setWebService('Geolab.CapeCod_WebService.BusLine');
        //    CapeCodeRoutes.invoke('PTown'); 
        try{
            if(!this.__ShapeNames.containsKey(args)){
                this.args = args; // Hold arg value for callback
                eval( this.__webService + "('"+ args + "',OnSucceeded,OnFailed)");
            }else{
                this.ToggleShapeVisibility(args);
            }
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        
    }
};

Geolab.PolyLineLayer.registerClass('Geolab.PolyLineLayer');
