/* Author: JBaltikauskas */

var NorthernTierRoutes = new Geolab.PolyLineLayer('NorthernTier_Routes');
NorthernTierRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var NorthernTierStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        NorthernTierStops['GLinkRoute1'] = new Geolab.PushPinLayer('GLinkRoute1');
        NorthernTierStops['GLinkRoute1'].SetWebService(wbs);
        NorthernTierStops['GLinkRoute2'] = new Geolab.PushPinLayer('GLinkRoute2');
        NorthernTierStops['GLinkRoute2'].SetWebService(wbs);
        NorthernTierStops['GLinkRoute3'] = new Geolab.PushPinLayer('GLinkRoute3');
        NorthernTierStops['GLinkRoute3'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //NorthernTierRoutes.{Function} =  function(){NorthernTierRoutes.Invoke('{MapID}');
        NorthernTierRoutes.GLinkRoute1 =  function(){NorthernTierStops['GLinkRoute1'].Invoke('GLinkRoute1');NorthernTierRoutes.Invoke('GLinkRoute1'); }
        NorthernTierRoutes.GLinkRoute2 =  function(){NorthernTierStops['GLinkRoute2'].Invoke('GLinkRoute2');NorthernTierRoutes.Invoke('GLinkRoute2');}
        NorthernTierRoutes.GLinkRoute3 =  function(){NorthernTierStops['GLinkRoute3'].Invoke('GLinkRoute3');NorthernTierRoutes.Invoke('GLinkRoute3');}

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', NorthernTierRoutes.{Function});
       // this.CreateElement('Jim', 'Jim', NorthernTierRoutes.Flex, 'Jimbo', img);
        this.CreateElement('GLinkRoute1', 'Route 1', NorthernTierRoutes.GLinkRoute1, 'Route 1', img);
        this.CreateElement('GLinkRoute2', 'Route 2', NorthernTierRoutes.GLinkRoute2, 'Route 2', img);
        this.CreateElement('GLinkRoute3', 'Route 3', NorthernTierRoutes.GLinkRoute3, 'Route 3', img);

        img = null;
    }
}