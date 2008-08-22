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
        SouthPortlandStops['SPRoute3'] = new Geolab.PushPinLayer('SPRoute3');
        SouthPortlandStops['SPRoute3'].SetWebService(wbs);
        SouthPortlandStops['SPRoute4'] = new Geolab.PushPinLayer('SPRoute4');
        SouthPortlandStops['SPRoute4'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //SouthPortlandRoutes.{Function} =  function(){SouthPortlandRoutes.Invoke('{MapID}');
        SouthPortlandRoutes.SPRoute1 =  function(){SouthPortlandStops['SPRoute1'].Invoke('SPRoute1');SouthPortlandRoutes.Invoke('SPRoute1'); }
        SouthPortlandRoutes.SPRoute3 =  function(){SouthPortlandStops['SPRoute3'].Invoke('SPRoute3');SouthPortlandRoutes.Invoke('SPRoute3'); }
        SouthPortlandRoutes.SPRoute4 =  function(){SouthPortlandStops['SPRoute4'].Invoke('SPRoute4');SouthPortlandRoutes.Invoke('SPRoute4'); }

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', SouthPortlandRoutes.{Function});
        // this.CreateElement('Jim', 'Jim', SouthPortlandRoutes.Flex, 'Jimbo', img);
        this.CreateElement('SPRoute1', 'Willard Square', SouthPortlandRoutes.SPRoute1, 'Willard Square', img);
        this.CreateElement('SPRoute3', 'Crosstown', SouthPortlandRoutes.SPRoute3, 'Crosstown', img);
        this.CreateElement('SPRoute4', 'Maine Mall', SouthPortlandRoutes.SPRoute4, 'Maine Mall', img);

        img = null;
    }
}