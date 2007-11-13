/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
// IMPORTANT: 
//      The Geolab.PushPinLayer object self variable this.__ShapeNames will hold all Shapes
// and static member Geolab.PushPinLayer.Layers will track all PushPinShapeLayers in the map.
// The tho hastables allow quicly access VEMap Objects 
Geolab.PushPinLayer = function(layerID, isPinsNumeric){
    this.__webService = null;
    this.__layerID = layerID;
    this.__layer = null;
    this.PushPinCustomFormat = '<div class="pinStyle" style="background: url({0}) no-repeat 0 0;"><div class="text">{1}</div></div>';
    if(isPinsNumeric){  this.PushPinIsNumeric = isPinsNumeric;} else{ this.PushPinIsNumeric=true};
    this.ShapeDescriptionFormat = "<br /><p>{0}</p>";
    this.bestView = false;    // Flag which sets "Best View" after shapes are add in the map
    this.PushPinMouseOut = null; // Will be set at runtime
    this.shapesPoints = null;
};

// Static member to track all PushPin layers
Geolab.PushPinLayer.Layers = new Geolab.HashTable();

// Prototypes
Geolab.PushPinLayer.prototype = {
    
    // Public methods
    SetWebService : function(webService){
        this.__webService = webService;
    },
    SetBestView : function (flag){
        this.bestView = flag;
    },
    InitBestView : function(){
        if(this.bestView && this.shapesPoints) 
            map.SetMapView(this.shapesPoints);
    },
    DeleteAllShapes : function()
    {
        try
        {
           this.__layer.DeleteAllShapes();
        }
        catch (e)
        {
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    GetShapeByID : function(name){
        return this.__layer.GetShapeByID(name);
    },
    ToggleVisibility : function (){
        if(this.__layer){
                if(this.__layer.GetVisibility()){ this.__layer.Hide()} 
                else { 
                    this.InitBestView();
                    this.__layer.Show(); 
                };
        }
    },
    ToggleShapeVisibility : function (name){
        if(this.__layer){
            var id = this.GetShape(name);
            if(id){
                if(id.GetVisibility()){ id.Hide()} else { id.Show() };
                id = null;
            }
        }
    },
    
    AddPushpin : function(obj, id){
        // Assuming the incoming object is 
        // {'Type':'VEShapeType.Pushpin','Latitude':41.5519999,'Longitude':-70.6115,'Title':'Fire Department','Icon':'','PhotoURL':'','Description':'Falmouth Town Fire Department<br />399 Main St <br />Falmouth, MA 02540 <br />(508) 548 2325<br />'}
        try{
             //Add a pushpin to the new layer      
             var loc = new VELatLong(obj.Latitude,obj.Longitude);  
             var shape = new VEShape(VEShapeType.Pushpin, loc);  
             if(obj.Icon != '') {
                if(this.PushPinCustomFormat != '') { 
                    if(this.PushPinIsNumeric){
                        shape.SetCustomIcon(String.format(this.PushPinCustomFormat, obj.Icon, id));
                       }else{
                        shape.SetCustomIcon(String.format(this.PushPinCustomFormat, obj.Icon));
                       }
                }else{
                    shape.SetCustomIcon(obj.Icon);
                }
             }
             shape.SetTitle(obj.Title);         
             shape.SetDescription(String.format(this.ShapeDescriptionFormat,obj.Description ));   
             //shape.SetDescription(obj.Description); 
             this.__layer.AddShape(shape); 
             Array.add(this.shapesPoints, loc);
             shape = null; loc = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        obj = null;
    },
    Invoke: function(args){
        // Store variables to use after AJAX callback
        var self = this;
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
                var collection = null;
                debugger
                eval(results);
                if(collection)
                {   
                    // First time ever any PushPinLayer added on map  
                    if(self.__layer == null){
                        self.__layer = new VEShapeLayer();
                        self.__layer.SetTitle(self.__layerID);
                        self.__LayersIDIndex = self.__layer.iid;
                        // Put key like PTown and MSVE unique id in hash
                        Geolab.PushPinLayer.Layers.put(self.__layer.Name,self.__layer.iid);
                        self.__ShapeLayerIndex = map.GetShapeLayerCount();
                        map.AddShapeLayer(self.__layer);
                    }
                    //---------------------------------------

                    // {'Type':'VEShapeType.Pushpin','LatLong':new VELatLong(41.5519999,-70.6115),'Title':'Fire Department','Icon':'','Description':'Falmouth Town Fire Department<br />399 Main St <br />Falmouth, MA 02540 <br />(508) 548 2325<br />','PhotoURL':''}
                    for(var i in collection){
                        self.AddPushpin(collection[i], ++i);                          
                    }
                    self.InitBestView();
                    collection = null; 
                }
            }catch(e){
                Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
            }
            results = null; eventArgs = null; 
        }; 
    
        //    Usage of Ajax webservices
        //    <asp:ScriptManager ID="scriptManagerMap" runat="server">
        //    <services> // Add web service
        //        <asp:ServiceReference Path="~/MapWebService/ .... .asmx" />
        //    </services>
        //    Javascript call:
        //    var pin = new Geolab.PushPinLayer('CapeCode_Routes');
        //    pin.SetWebService('Geolab.CapeCod_FireDeptartment.FireStation');
        //    pin.Invoke('Fire_Cape');
        try{
            if(this.__layer == null){
                this.args = args; // Hold arg value for callback
                if(!this.shapesPoints) this.shapesPoints = new Array();
                eval( this.__webService + "('"+ args + "',OnSucceeded,OnFailed)");
            }else{
                this.ToggleVisibility();
            }
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        
    }
};
Geolab.PushPinLayer.registerClass('Geolab.PushPinLayer');

