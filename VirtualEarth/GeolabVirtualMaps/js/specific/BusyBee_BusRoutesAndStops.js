/* Author: JBaltikauskas */

var BusyBeeRoutes = new Geolab.PolyLineLayer('BusyBee_Routes');
BusyBeeRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var BusyBeeStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        //BusyBeeStops['LIFT2'] = new Geolab.PushPinLayer('LIFT2');
        //BusyBeeStops['LIFT2'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //BusyBeeRoutes.{Function} =  function(){BusyBeeRoutes.Invoke('{MapID}');
        //BusyBeeRoutes.LIFT2 =  function(){BusyBeeStops['LIFT2'].Invoke('LIFT2');BusyBeeRoutes.Invoke('LIFT2'); }

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', BusyBeeRoutes.{Function});
        // this.CreateElement('Jim', 'Jim', BusyBeeRoutes.Flex, 'Jimbo', img);
        //this.CreateElement('LIFT2', 'Route 2', BusyBeeRoutes.LIFT2, 'Route 2', img);

        img = null;
    }
}