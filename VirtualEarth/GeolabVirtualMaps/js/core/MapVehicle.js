/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.Vehicle = function(){
    this.__path = "";
    this.__pintitle = "";
    this.__icon = null;
    this.__layer = new VEShapeLayer();
    this.__layer.SetTitle('Vehicles');
    this.__reverseGeoCoding = true;
    this.__OnlyFirstAddress = true;
    this.timeoutID = null;
    this.refreshTime = 30000; //miliseconds
    map.AddShapeLayer(this.__layer);
    this.valueLabelID = null;

    
    Geolab.Vehicle.instance = this;
};
// The reference to instance for callabacks
Geolab.Vehicle.instance = null;
Geolab.Vehicle.prototype = {
    
    // Private methods
    __DeleteAllShapes : function()
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
    __AddPushpin : function(obj){
        // Assuming the incoming object is 
        // [Date, Time, Latitude, Longitude, LatLonAccuracy, PositionSpeed, PositionHeading, Optional=>Address]
        try{
             //Add a pushpin to the new layer         
             var shape = new VEShape(VEShapeType.Pushpin, new VELatLong(obj.Latitude,obj.Longitude));  
             if(obj.CustomIcon != ""){
                shape.SetCustomIcon(obj.CustomIcon); 
             }else{
                shape.SetCustomIcon(Settings.VehicleIcon); 
             }
             
             //map.ClearInfoBoxStyles();
             var address = (obj.LocationInfo != "")? String.format(Geolab.Vehicle.AddressFormat,obj.LocationInfo) : ""; 
             if(obj.Title != ""){
                shape.SetTitle(obj.Title);
             }else {
                shape.SetTitle(this.__pintitle);  
             }
                 
             shape.SetDescription(String.format(Geolab.Vehicle.PinDescriptionFormat,
                obj.Date, 
                obj.Time, 
                obj.Latitude, 
                obj.Longitude, 
                obj.Accuracy, 
                obj.Speed, 
                obj.Heading, 
                obj.SatelliteNumber,
                obj.BatteryLevel,
                obj.SignalStrength,
                obj.GeolabID,
                address,
                obj.Froute
                )
             );   
             this.__layer.AddShape(shape); 
             shape = null; address = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    // Public methods
    setPath: function(path){
        this.__path = path;
    },
    setTitle: function(pushpinstitle){
        this.__pintitle = pushpinstitle;
    },    
    setIcon : function(icon){
        this.__icon = icon;
    },
    setGeoCoding: function(bool){
        this.__reverseGeoCoding = bool;
    },
    invoke: function(){
        var self = this;
        var __onWebRequestCompleted = function (executor, eventArgs)
            {    
                // This the handler for the Web request completed event
                // that is used to display return data.
                if(executor.get_responseAvailable())
                {
                    try{
                        var collection = new Array;

                        eval(executor.get_responseData());
                        self.__layer.DeleteAllShapes();
                        for(var i in collection){
                            //Sys.Debug.trace(collection[i]);
                            self.__AddPushpin(collection[i]);
                        }
                        collection = null;
                    }catch(e){
                        Sys.Debug.trace("__onWebRequestCompleted " + e.name + ": " + e.message + "\n" + e.stack);                
                    }
                }
                else
                {
                    if (executor.get_timedOut()){
                        Sys.Debug.trace("Timed Out");
                    }
                    else{
                        if (executor.get_aborted()){
                            Sys.Debug.trace("Aborted");
                        }
                    }
                }
            };
        
        try{
            var request = new Sys.Net.WebRequest();
            request.set_httpVerb("POST");// Set the request verb.
            //- note that the header is the magic key to the endpoint:
            request.get_headers()['Content-Type'] = 'application/json';
            request.add_completed(__onWebRequestCompleted);
            if(this.__reverseGeoCoding){
                request.set_url(String.format("{0}&GeoCoding={1}&OnlyFirstAddress={2}", this.__path,this.__reverseGeoCoding , this.__OnlyFirstAddress));
            }else{
                request.set_url(this.__path);
            }
            request.invoke();
            // Clean Up
            request = null; __onWebRequestCompleted = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    setInterval : function (milisecods){
        this.refreshTime = milisecods;
        this.timeoutID = window.setInterval('Vehicle.invoke()', milisecods);
        if(this.valueLabelID){
            var el = $get(this.valueLabelID);
            if(el)
                el.innerHTML = milisecods/1000;
        }
    },
    clearInterval : function(){
        window.clearTimeout(this.timeoutID);
    },
    Refresh : function(){
        if(this.valueLabelID){
            window.clearTimeout(this.timeoutID);
            var time;
            var el = $get(this.valueLabelID);
            if(el) time = parseInt(el.innerHTML);
            if(!isNaN(time)){
                time = time * 1000;
            }
            else{
                time = 15000;
            }
            this.setInterval(time);
            el = null;
        }
    },
    InitSlider : function (){
        if(this.valueLabelID){
            var d = document.getElementsByTagName('div');
            for (var i = 0; i < d.length; i++) {
                if(d[i].getAttribute('class') == 'ajax__slider_h_rail')
                {
                    d[i].setAttribute('id', 'ajax__slider_h');
                    d[i].setAttribute('onmouseon', "Vehicle.clearInterval()");
                    d[i].setAttribute('onmouseout', "Vehicle.Refresh()");
                }
            }
            d = null;
        }
    }
};


Geolab.Vehicle.PinDescriptionFormat =
        '<table class="vehicle" cellpadding="2" cellspacing="2">'+
        '<tr>'+
        '<td align="right"><b>Date:</b></td>'+
        '<td>{0}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Time:</b></td>'+
        '<td>{1}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Latitude:</b></td>'+
        '<td>{2}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Longitude:</b></td>'+
        '<td>{3}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>LatLonAccuracy:</b></td>'+
        '<td>{4} feet</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>PositionSpeed:</b></td>'+
        '<td>{5} miles/hr</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>PositionHeading:</b></td>'+
        '<td>{6} degrees</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>GPS Device Status:</b></td>'+
        '<td><img alt="Sattelite" src="images/map_icons/sat_{7}.gif" /><img alt="Signal" src="images/map_icons/sig_{8}.gif" /><img alt="Battery" src="images/map_icons/batt_{9}.gif" /></td>'+    
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>ID:</b></td>'+
        '<td>{10}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Bus ID:</b></td>'+
        '<td>{13}</td>'+
        '</tr>'+
        '{11}' +
        '<td align="right"><b>Route:</b></td>'+
        '<td>{12}</td>'+
        '</tr>'+
        '</table>';
        
Geolab.Vehicle.AddressFormat =
        '<tr>'+
        '<td align="center" colspan="2"><b>Nearest well-known address:</b>&nbsp;</td>'+
        '</tr>'+
        '<tr>'+
        '<td class="address" colspan="2"><ul>{0}</ul></td>'+
        '</tr>';
    
Geolab.Vehicle.registerClass('Geolab.Vehicle');

