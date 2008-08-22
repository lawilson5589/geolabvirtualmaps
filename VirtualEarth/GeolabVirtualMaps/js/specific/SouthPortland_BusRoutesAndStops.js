/* Author: JBaltikauskas */

var SouthPortlandRoutes = new Geolab.PolyLineLayer('SouthPortland_Routes');
SouthPortlandRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var SouthPortlandStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        SouthPortlandStops['SPRoute1'] = new Geolab.PushPinLayer('SPRoute1');
        SouthPortlandStops['SPRoute1'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //SouthPortlandRoutes.{Function} =  function(){SouthPortlandRoutes.Invoke('{MapID}');
        SouthPortlandRoutes.SPRoute1 =  function(){SouthPortlandStops['SPRoute1'].Invoke('SPRoute1');SouthPortlandRoutes.Invoke('SPRoute1'); }

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', SouthPortlandRoutes.{Function});
        // this.CreateElement('Jim', 'Jim', SouthPortlandRoutes.Flex, 'Jimbo', img);
        this.CreateElement('SPRoute1', 'Willard Square', SouthPortlandRoutes.SPRoute1, 'Willard Square', img);

        img = null;
    }
}