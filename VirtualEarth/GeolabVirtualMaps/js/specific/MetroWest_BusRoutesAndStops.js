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
        MetroWestStops['LIFT4'] = new Geolab.PushPinLayer('LIFT4');
        MetroWestStops['LIFT4'].SetWebService(wbs);
        MetroWestStops['LIFT5'] = new Geolab.PushPinLayer('LIFT5');
        MetroWestStops['LIFT5'].SetWebService(wbs);
        MetroWestStops['LIFT6']= new Geolab.PushPinLayer('LIFT6');
        MetroWestStops['LIFT6'].SetWebService(wbs);
        MetroWestStops['LIFT7'] = new Geolab.PushPinLayer('LIFT7');
        MetroWestStops['LIFT7'].SetWebService(wbs);
        MetroWestStops['ROUTE9'] = new Geolab.PushPinLayer('ROUTE9');
        MetroWestStops['ROUTE9'].SetWebService(wbs);
        MetroWestStops['Route10'] = new Geolab.PushPinLayer('Route10');
        MetroWestStops['Route10'].SetWebService(wbs);
        MetroWestStops['ROUTE11'] = new Geolab.PushPinLayer('ROUTE11');
        MetroWestStops['ROUTE11'].SetWebService(wbs);
        MetroWestStops['NatickCBus'] = new Geolab.PushPinLayer('NatickCBus');
        MetroWestStops['NatickCBus'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //MetroWestRoutes.{Function} =  function(){MetroWestRoutes.Invoke('{MapID}');
        MetroWestRoutes.LIFT2 =  function(){MetroWestStops['LIFT2'].Invoke('LIFT2');MetroWestRoutes.Invoke('LIFT2'); }
        MetroWestRoutes.LIFT3 =  function(){MetroWestStops['LIFT3'].Invoke('LIFT3');MetroWestRoutes.Invoke('LIFT3');}
        MetroWestRoutes.LIFT4 =  function(){MetroWestStops['LIFT4'].Invoke('LIFT4');MetroWestRoutes.Invoke('LIFT4');}
        MetroWestRoutes.LIFT5 =  function(){MetroWestStops['LIFT5'].Invoke('LIFT5');MetroWestRoutes.Invoke('LIFT5');}
        MetroWestRoutes.LIFT6 =  function(){MetroWestStops['LIFT6'].Invoke('LIFT6');MetroWestRoutes.Invoke('LIFT6');}
        MetroWestRoutes.LIFT7 =  function(){MetroWestStops['LIFT7'].Invoke('LIFT7');MetroWestRoutes.Invoke('LIFT7');}
        MetroWestRoutes.ROUTE9 =  function(){MetroWestStops['ROUTE9'].Invoke('ROUTE9');MetroWestRoutes.Invoke('ROUTE9');}
        MetroWestRoutes.ROUTE10 = function() {MetroWestStops['Route10'].Invoke('ROUTE10');MetroWestRoutes.Invoke('ROUTE10');}
        MetroWestRoutes.ROUTE11 =  function(){MetroWestStops['ROUTE11'].Invoke('ROUTE11');MetroWestRoutes.Invoke('ROUTE11');}
        MetroWestRoutes.NatickCBus =  function(){MetroWestStops['NatickCBus'].Invoke('NatickCBus');MetroWestRoutes.Invoke('NatickCBus');}

    

        var img = "images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', MetroWestRoutes.{Function});
        // this.CreateElement('Jim', 'Jim', MetroWestRoutes.Flex, 'Jimbo', img);
        this.CreateElement('LIFT2', 'Route 2', MetroWestRoutes.LIFT2, 'Route 2', img);
        this.CreateElement('LIFT3', 'Route 3', MetroWestRoutes.LIFT3, 'Route 3', img);
        this.CreateElement('LIFT4', 'Route 4', MetroWestRoutes.LIFT4, 'Route 4', img);
        this.CreateElement('LIFT5', 'Route 5', MetroWestRoutes.LIFT5, 'Route 5', img);
        this.CreateElement('LIFT6', 'Route 6', MetroWestRoutes.LIFT6, 'Route 6', img);
        this.CreateElement('LIFT7', 'Route 7', MetroWestRoutes.LIFT7, 'Route 7', img);
        this.CreateElement('ROUTE9', 'Route 9', MetroWestRoutes.ROUTE9, 'Route 9', img);
        this.CreateElement('ROUTE10', 'Route 10', MetroWestRoutes.ROUTE10, 'Route 10', img);
        this.CreateElement('ROUTE11', 'Route 11', MetroWestRoutes.ROUTE11, 'Route 11', img);
        this.CreateElement('NatickCBus', 'NatickCBus', MetroWestRoutes.NatickCBus, 'NatickCBus', img);

        img = null;
    }
}