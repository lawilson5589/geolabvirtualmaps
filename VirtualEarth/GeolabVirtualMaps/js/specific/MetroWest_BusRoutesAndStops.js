/* Author: JBaltikauskas */

var MetroWestRoutes = new Geolab.PolyLineLayer('MetroWest_Routes');
MetroWestRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var MetroWestStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        MetroWestStops['Barnstable'] = new Geolab.PushPinLayer('Barnstable');
        MetroWestStops['Barnstable'].SetWebService(wbs);
        MetroWestStops['Flex'] = new Geolab.PushPinLayer('Flex');
        MetroWestStops['Flex'].SetWebService(wbs);
        MetroWestStops['H2O'] = new Geolab.PushPinLayer('H2O');
        MetroWestStops['H2O'].SetWebService(wbs);
        MetroWestStops['Hyannis'] = new Geolab.PushPinLayer('Hyannis');
        MetroWestStops['PTown'] = new Geolab.PushPinLayer('PTown');
        MetroWestStops['Hyannis'].SetWebService(wbs);
        MetroWestStops['PTown'].SetWebService(wbs);
        MetroWestStops['Orange']= new Geolab.PushPinLayer('Orange');
        MetroWestStops['Orange'].SetWebService(wbs);
        MetroWestStops['Sealine'] = new Geolab.PushPinLayer('Sealine');
        MetroWestStops['Sealine'].SetWebService(wbs);
        MetroWestStops['Villager'] = new Geolab.PushPinLayer('Villager');
        MetroWestStops['Villager'].SetWebService(wbs);
        MetroWestStops['Whoosh'] = new Geolab.PushPinLayer('Whoosh');
        MetroWestStops['Whoosh'].SetWebService(wbs);
        MetroWestStops['Yarmouth'] = new Geolab.PushPinLayer('Yarmouth');
        MetroWestStops['Yarmouth'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //MetroWestRoutes.{Function} =  function(){MetroWestRoutes.Invoke('{MapID}');
        MetroWestRoutes.Barnstable =  function(){MetroWestStops['Barnstable'].Invoke('Barnstable');MetroWestRoutes.Invoke('Barnstable'); }
        MetroWestRoutes.Flex =  function(){MetroWestStops['Flex'].Invoke('Flex');MetroWestRoutes.Invoke('Flex');}
        MetroWestRoutes.H20 =  function(){MetroWestStops['H2O'].Invoke('H2O');MetroWestRoutes.Invoke('H20');}
        //MetroWestRoutes.Hyannis =  function(){MetroWestStops['Hyannis'].Invoke('Hyannis');MetroWestRoutes.Invoke('Hyannis');}
        MetroWestRoutes.PTown =  function(){MetroWestStops['PTown'].Invoke('PTown');MetroWestRoutes.Invoke('PTown');}
        MetroWestRoutes.Orange =  function(){MetroWestStops['Orange'].Invoke('Orange');MetroWestRoutes.Invoke('Orange');}
        MetroWestRoutes.Sealine =  function(){MetroWestStops['Sealine'].Invoke('Sealine');MetroWestRoutes.Invoke('Sealine');}
        MetroWestRoutes.Villager =  function(){MetroWestStops['Villager'].Invoke('Villager');MetroWestRoutes.Invoke('Villager'); }
        MetroWestRoutes.Woosh =  function(){MetroWestStops['Whoosh'].Invoke('Whoosh');MetroWestRoutes.Invoke('Whoosh');}
        MetroWestRoutes.Yarmouth =  function(){MetroWestStops['Yarmouth'].Invoke('Yarmouth');MetroWestRoutes.Invoke('Yarmouth');}

        var img = "/images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', MetroWestRoutes.{Function});
       // this.CreateElement('Jim', 'Jim', MetroWestRoutes.Flex, 'Jimbo', img);
        this.CreateElement('Barnstable', 'Barnstable', MetroWestRoutes.Barnstable, 'Barnstable route', img);
        this.CreateElement('Flex', 'Flex', MetroWestRoutes.Flex, 'Flex route', img);
        this.CreateElement('H2O', 'H2O', MetroWestRoutes.H20, 'H2O route', img);
        //this.CreateElement('Hyannis', 'Hyannis', MetroWestRoutes.Hyannis, 'Hyannis route', img);
        this.CreateElement('PTown', 'PTown', MetroWestRoutes.PTown, 'PTown route', img);
        this.CreateElement('Orange', 'Orange', MetroWestRoutes.Orange, 'Orange route', img);
        this.CreateElement('Sealine', 'Sealine', MetroWestRoutes.Sealine, 'Sealine route', img);
        this.CreateElement('Villager', 'Villager', MetroWestRoutes.Villager, 'Villager route', img);
        this.CreateElement('Whoosh', 'Whoosh', MetroWestRoutes.Woosh, 'Whoosh route', img);
        this.CreateElement('Yarmouth', 'Yarmouth', MetroWestRoutes.Yarmouth), 'Yarmouth route', img;
        img = null;
    }
}