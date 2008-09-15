/* Author: JBaltikauskas */

var BusyBeeMWRTARoutes = new Geolab.PolyLineLayer('BusyBeeMWRTA_Routes');
BusyBeeMWRTARoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var BusyBeeMWRTAStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        //BusyBeeMWRTAStops['LIFT2'] = new Geolab.PushPinLayer('LIFT2');
        //BusyBeeMWRTAStops['LIFT2'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //BusyBeeMWRTARoutes.{Function} =  function(){BusyBeeMWRTARoutes.Invoke('{MapID}');
        //BusyBeeMWRTARoutes.LIFT2 =  function(){BusyBeeMWRTAStops['LIFT2'].Invoke('LIFT2');BusyBeeMWRTARoutes.Invoke('LIFT2'); }

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', BusyBeeMWRTARoutes.{Function});
        // this.CreateElement('Jim', 'Jim', BusyBeeMWRTARoutes.Flex, 'Jimbo', img);
        //this.CreateElement('LIFT2', 'Route 2', BusyBeeMWRTARoutes.LIFT2, 'Route 2', img);

        img = null;
    }
}