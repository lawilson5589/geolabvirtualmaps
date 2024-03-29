﻿/* Author: JBaltikauskas */
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
    __GetShape : function(name){
        //return this.__layer.GetShapeByID(this.__ShapeNames.get(name))
        return this.__layerID
    },
    GetShapeByID : function(name){
        return this.__layer.GetShapeByID(name);
    },
    ToggleVisibility : function (layer){
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
       
//        if(layer){
//                layer.SetVisibility(false);
//                //visible = this.__layer.GetVisibility();
//                //if(visible){ this.__layer.Hide()} 
//                //else { 
//                //    this.InitBestView();
//                //    this.__layer.Show(); 
//                //};
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
        var obj = this;
        function OnFailed(error)
        {
            // This is the callback function invoked if the Web service failed.
            // Display the error.    
            debug:
            Sys.Debug.trace(error.get_message());
            error = null;
        };
        
        function OnSucceeded(results, eventArgs)
        {    
            // This the handler for the Web request completed event
            // that is used to display return data.
            try{
                var collection = null;

                //debugger
                eval(results);
                if(collection)
                {   
                    // First time ever any PushPinLayer added on map  
                    if(obj.__layer == null){
                        obj.__layer = new VEShapeLayer();
                        obj.__layer.SetTitle(obj.__layerID);
                        obj.__LayersIDIndex = obj.__layer.iid;
                        // Put key like PTown and MSVE unique id in hash
                        Geolab.PushPinLayer.Layers.put(obj.__layer.Name,obj.__layer.iid);
                        obj.__ShapeLayerIndex = map.GetShapeLayerCount();
                        map.AddShapeLayer(obj.__layer);
                    }
                    //---------------------------------------

                    // {'Type':'VEShapeType.Pushpin','LatLong':new VELatLong(41.5519999,-70.6115),'Title':'Fire Department','Icon':'','Description':'Falmouth Town Fire Department<br />399 Main St <br />Falmouth, MA 02540 <br />(508) 548 2325<br />','PhotoURL':''}
                    for(var i in collection){
                        //self.AddPushpin(collection[i], ++i);           
                        obj.__layer.AddShape(collection[i]);               
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
//        try{
////            if(this.__layer != null){
////            //if( this.__ShapeNames.containsKey(args)){
////                this.ToggleVisibility();
////            }
//            if(obj.__layer == null){
//            //if( !this.__ShapeNames.containsKey(args)){
//                obj.args = args; // Hold arg value for callback
//                if(!obj.shapesPoints) obj.shapesPoints = new Array();
//                eval( obj.__webService + "('"+ args + "',OnSucceeded,OnFailed)");
//                this.__layer = 1;
//            }
//            else{
//                this.ToggleVisibility(this.__layer);
//                //obj.__layer.SetVisibility(false);
//            }
//                

//        }
//        catch(e){
//            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
//        }
        
    }
};
Geolab.PushPinLayer.registerClass('Geolab.PushPinLayer');

