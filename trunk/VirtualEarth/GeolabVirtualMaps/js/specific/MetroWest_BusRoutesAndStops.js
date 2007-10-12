/* Author: JBaltikauskas */

var MetroWestRoutes = new Geolab.PolyLineLayer('MetroWest_Routes');
MetroWestRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var MetroWestStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        MetroWestStops['LIFT2'] = new Geolab.PushPinLayer('LIFT2');
        MetroWestStops['LIFT2'].SetWebService(wbs);
        MetroWestStops['LIFT3'] = new Geolab.PushPinLayer('LIFT3');
        MetroWestStops['LIFT3'].SetWebService(wbs);
        MetroWestStops['LIFT5'] = new Geolab.PushPinLayer('LIFT5');
        MetroWestStops['LIFT5'].SetWebService(wbs);
        MetroWestStops['LIFT6']= new Geolab.PushPinLayer('LIFT6');
        MetroWestStops['LIFT6'].SetWebService(wbs);
        MetroWestStops['LIFT7'] = new Geolab.PushPinLayer('LIFT7');
        MetroWestStops['LIFT7'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //MetroWestRoutes.{Function} =  function(){MetroWestRoutes.Invoke('{MapID}');
        MetroWestRoutes.LIFT2 =  function(){MetroWestStops['LIFT2'].Invoke('LIFT2');MetroWestRoutes.Invoke('LIFT2'); }
        MetroWestRoutes.LIFT3 =  function(){MetroWestStops['LIFT3'].Invoke('LIFT3');MetroWestRoutes.Invoke('LIFT3');}
        MetroWestRoutes.LIFT5 =  function(){MetroWestStops['LIFT5'].Invoke('LIFT5');MetroWestRoutes.Invoke('LIFT5');}
        MetroWestRoutes.LIFT6 =  function(){MetroWestStops['LIFT6'].Invoke('LIFT6');MetroWestRoutes.Invoke('LIFT6');}
        MetroWestRoutes.LIFT7 =  function(){MetroWestStops['LIFT7'].Invoke('LIFT7');MetroWestRoutes.Invoke('LIFT7');}
    

        var img = "/images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', MetroWestRoutes.{Function});
       // this.CreateElement('Jim', 'Jim', MetroWestRoutes.Flex, 'Jimbo', img);
        this.CreateElement('LIFT2', 'LIFT2', MetroWestRoutes.LIFT2, 'LIFT2 route', img);
        this.CreateElement('LIFT3', 'LIFT3', MetroWestRoutes.LIFT3, 'LIFT3 route', img);
        this.CreateElement('LIFT5', 'LIFT5', MetroWestRoutes.LIFT5, 'LIFT5 route', img);
        this.CreateElement('LIFT6', 'LIFT6', MetroWestRoutes.LIFT6, 'LIFT6 route', img);
        this.CreateElement('LIFT7', 'LIFT7', MetroWestRoutes.LIFT7, 'LIFT7 route', img);
        img = null;
    }
}