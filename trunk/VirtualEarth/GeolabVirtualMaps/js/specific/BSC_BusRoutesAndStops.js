/* Author: JBaltikauskas */

var BSCRoutes = new Geolab.PolyLineLayer('BSC_Routes');
BSCRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var BSCStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        BSCStops['BSCRoute1'] = new Geolab.PushPinLayer('BSCRoute1');
        BSCStops['BSCRoute1'].SetWebService(wbs);
        BSCStops['BSCRoute2'] = new Geolab.PushPinLayer('BSCRoute2');
        BSCStops['BSCRoute2'].SetWebService(wbs);
        BSCStops['BSCRoute28'] = new Geolab.PushPinLayer('BSCRoute28');
        BSCStops['BSCRoute28'].SetWebService(wbs);
   
         
        // END
        // Clean up 
        wbs = null;
        
        //BSCRoutes.{Function} =  function(){BSCRoutes.Invoke('{MapID}');
        BSCRoutes.BSCRoute1 =  function(){
        BSCStops['BSCRoute1'].Invoke('BSCRoute1');
        BSCRoutes.Invoke('BSCRoute1'); 
        }
        
        BSCRoutes.BSCRoute2 =  function(){
        BSCStops['BSCRoute2'].Invoke('BSCRoute2');
        BSCRoutes.Invoke('BSCRoute2'); 
        }
        
        BSCRoutes.BSCRoute28 =  function(){
        BSCStops['BSCRoute28'].Invoke('BSCRoute28');
        BSCRoutes.Invoke('BSCRoute28'); 
        }

        // Dashboard.CreateElement('{ID}', '{Title}', BSCRoutes.{Function});
        this.CreateElement('BSC', 'Routes'); 
        var img = "images/map_vehicles/bus_024.gif";
        this.CreateElement('Route1', 'Route 1', BSCRoutes.BSCRoute1, 'BSC Route 1', img);
        this.CreateElement('Route2', 'Route 2', BSCRoutes.BSCRoute2, 'BSC Route 2', img);
        this.CreateElement('Route28', 'Route 28', BSCRoutes.BSCRoute28, 'BSC Route 28', img);

        img = null;
    }
}