/* Author: JBaltikauskas */

var CapeCodeRoutes = new Geolab.PolyLineLayer('CapeCode_Routes');
CapeCodeRoutes.SetWebService('Geolab.CapeCod_WebService.BusLine');
var CapeCodStops = new Array;

if(Dashboard){
    Dashboard.Init = function(){


        var wbs = 'Geolab.CapeCod_WebService.BusStops';
        // Stops and Routes begin
        CapeCodStops['Barnstable'] = new Geolab.PushPinLayer('Barnstable');
        CapeCodStops['Barnstable'].SetWebService(wbs);
        CapeCodStops['Flex'] = new Geolab.PushPinLayer('Flex');
        CapeCodStops['Flex'].SetWebService(wbs);
        CapeCodStops['H2O'] = new Geolab.PushPinLayer('H2O');
        CapeCodStops['H2O'].SetWebService(wbs);
        CapeCodStops['Hyannis'] = new Geolab.PushPinLayer('Hyannis');
        CapeCodStops['Hyannis'].SetWebService(wbs);
        CapeCodStops['PTown'] = new Geolab.PushPinLayer('PTown');
        CapeCodStops['PTown'].SetWebService(wbs);
        CapeCodStops['Orange']= new Geolab.PushPinLayer('Orange');
        CapeCodStops['Orange'].SetWebService(wbs);
        CapeCodStops['Sealine'] = new Geolab.PushPinLayer('Sealine');
        CapeCodStops['Sealine'].SetWebService(wbs);
        CapeCodStops['Villager'] = new Geolab.PushPinLayer('Villager');
        CapeCodStops['Villager'].SetWebService(wbs);
        CapeCodStops['Whoosh'] = new Geolab.PushPinLayer('Whoosh');
        CapeCodStops['Whoosh'].SetWebService(wbs);
        CapeCodStops['Yarmouth'] = new Geolab.PushPinLayer('Yarmouth');
        CapeCodStops['Yarmouth'].SetWebService(wbs);
        this.CreateElement('Routes', 'Routes');
         
        // END
        // Clean up 
        wbs = null;
        
        //CapeCodeRoutes.{Function} =  function(){CapeCodeRoutes.Invoke('{MapID}');
        CapeCodeRoutes.Barnstable =  function(){CapeCodStops['Barnstable'].Invoke('Barnstable');CapeCodeRoutes.Invoke('Barnstable'); }
        CapeCodeRoutes.Flex =  function(){CapeCodStops['Flex'].Invoke('Flex');CapeCodeRoutes.Invoke('Flex');}
        CapeCodeRoutes.H20 =  function(){CapeCodStops['H2O'].Invoke('H2O');CapeCodeRoutes.Invoke('H20');}
        CapeCodeRoutes.Hyannis =  function(){CapeCodStops['Hyannis'].Invoke('Hyannis');CapeCodeRoutes.Invoke('Hyannis');}
        CapeCodeRoutes.PTown =  function(){CapeCodStops['PTown'].Invoke('PTown');CapeCodeRoutes.Invoke('PTown');}
        CapeCodeRoutes.Orange =  function(){CapeCodStops['Orange'].Invoke('Orange');CapeCodeRoutes.Invoke('Orange');}
        CapeCodeRoutes.Sealine =  function(){CapeCodStops['Sealine'].Invoke('Sealine');CapeCodeRoutes.Invoke('Sealine');}
        CapeCodeRoutes.Villager =  function(){CapeCodStops['Villager'].Invoke('Villager');CapeCodeRoutes.Invoke('Villager'); }
        CapeCodeRoutes.Woosh =  function(){CapeCodStops['Whoosh'].Invoke('Whoosh');CapeCodeRoutes.Invoke('Whoosh');}
        CapeCodeRoutes.Yarmouth =  function(){CapeCodStops['Yarmouth'].Invoke('Yarmouth');CapeCodeRoutes.Invoke('Yarmouth');}

        var img = "/images/map_vehicles/bus_024.gif";
        // Dashboard.CreateElement('{ID}', '{Title}', CapeCodeRoutes.{Function});
        this.CreateElement('Barnstable', 'Barnstable', CapeCodeRoutes.Barnstable, 'Barnstable route', img);
        this.CreateElement('Flex', 'Flex', CapeCodeRoutes.Flex, 'Flex route', img);
        this.CreateElement('H2O', 'H2O', CapeCodeRoutes.H20, 'H2O route', img);
        this.CreateElement('Hyannis', 'Hyannis', CapeCodeRoutes.Hyannis, 'Hyannis route', img);
        this.CreateElement('PTown', 'PtnNTruro', CapeCodeRoutes.PTown, 'PTown NTruro route', img);
        this.CreateElement('Orange', 'Ptn Beaches', CapeCodeRoutes.Orange, 'PTown Beaches route', img);
        this.CreateElement('Sealine', 'Sealine', CapeCodeRoutes.Sealine, 'Sealine route', img);
        this.CreateElement('Villager', 'Villager', CapeCodeRoutes.Villager, 'Villager route', img);
        this.CreateElement('Whoosh', 'Whoosh', CapeCodeRoutes.Woosh, 'Whoosh route', img);
        this.CreateElement('Yarmouth', 'Yarmouth', CapeCodeRoutes.Yarmouth), 'Yarmouth route', img;
        img = null;
    }
}