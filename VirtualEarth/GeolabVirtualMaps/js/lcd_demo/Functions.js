//Main Animation Sequence File- AVL Display
//Authored by J.Baltikauskas, D.Fitch 2007
//GeoGraphics Lab
//Bridgewater State College

var shape;
var haynnislatlon = new VELatLong(41.65588797740388,-70.28833866119386);
function AddPin(lat, long, title, description)
{
    var pinlatlong = new VELatLong(lat, long);
    shape = new VEShape(VEShapeType.Pushpin, pinlatlong);  
    shape.SetCustomIcon('/images/bus_stop_icon.png');
    shape.SetTitle(title);         
    shape.SetDescription(description); 
    map.AddShape(shape);
    //haynnispin = map.AddPushpin(haynnislatlon) ; 
    //haynnispin.SetTitle('Haynnis'); 
    //haynnispin.SetDescription('Haynnis Transportation center');
    //haynnispin = map.AddPushpin(pinlatlong) ; 
    //haynnispin.SetTitle(title); 
    //haynnispin.SetDescription(description);
}
function step1(){
    var t = 5000; // loading time
    map.SetMapStyle("r");
    AddPin( 41.65588797740388, -70.28833866119386, "Hyannis", "Hyannis Transportation Center");
    map.SetCenterAndZoom(haynnislatlon, 9);
    setTimeout("map.SetMapStyle('a')", 5000);
    setTimeout("map.SetMapStyle('h')", 10000);
    setTimeout("map.SetMapStyle('r')", 15000);
    setTimeout("map.ShowInfoBox(shape)",16000);
    setTimeout("map.HideInfoBox(shape);map.DeleteShape(shape);",21000);
    setTimeout("step2()",23000);
}
function step2(){
    map.PanToLatLong(new VELatLong(42.05842543936369,-70.19500602493133));
    setTimeout("map.ZoomIn()",3000);
    setTimeout("map.ZoomIn()",4500);
    setTimeout("map.ZoomIn()",6000);
    setTimeout("map.ZoomIn()",7500);
    // Pin for orange 42.051775,-70.18581
    setTimeout("map.AddShape(polyline['Orange']);map.SetMapView(polyline['Orange'].GetPoints());",11000);
    setTimeout("map.ShowInfoBox(polyline['Orange']);",12000);
    setTimeout("map.HideInfoBox(polyline['Orange']);map.DeleteShape(polyline['Orange']);",16000);
    setTimeout("map.AddShape(polyline['PTown']);map.SetMapView(polyline['PTown'].GetPoints());",17000);
    setTimeout("map.ShowInfoBox(polyline['PTown']);",18000);
    setTimeout("map.HideInfoBox(polyline['PTown']);map.DeleteShape(polyline['PTown']);",23000);
    setTimeout("step3()",24000);
    
}
function step3(){

    //Flex Route Procedure
    map.ZoomOut();
    setTimeout("map.ZoomOut();map.PanToLatLong(new VELatLong(41.867337,-70.078368));",3000);
    setTimeout("map.ZoomOut();", 6000);
    setTimeout("map.AddShape(polyline['Flex']);map.SetMapView(polyline['Flex'].GetPoints());",7500);
    setTimeout("map.ShowInfoBox(polyline['Flex']);",8500);
    setTimeout("map.HideInfoBox(polyline['Flex']);map.DeleteShape(polyline['Flex']);",13500);
    
    //H20 Route Procedure
    //setTimeout("map.ZoomIn();map.PanToLatLong(new VELatLong(41.722110,-70.118581));",14500);
    setTimeout("map.ZoomIn();map.PanToLatLong(new VELatLong(41.722110,-70.15));",14500);
    setTimeout("map.AddShape(polyline['H20']);map.SetMapView(polyline['H20'].GetPoints());",15500);
    setTimeout("map.ShowInfoBox(polyline['H20']);",18000);
    setTimeout("map.HideInfoBox(polyline['H20']);map.DeleteShape(polyline['H20']);",23000);
    setTimeout("step4()",24000);
      
}
function step4(){

    //Yarmouth Procedure
    map.ZoomIn();
    setTimeout("map.PanToLatLong(new VELatLong(41.651322,-70.233572));",3000);
    setTimeout("map.ZoomIn();",4000);
    setTimeout("map.AddShape(polyline['Yarmouth']);map.SetMapView(polyline['Yarmouth'].GetPoints());",6000);
    setTimeout("map.ShowInfoBox(polyline['Yarmouth']);",7000);
    setTimeout("map.HideInfoBox(polyline['Yarmouth']);map.DeleteShape(polyline['Yarmouth']);",12000);
    
    //Woosh Procedure
    setTimeout("map.ZoomOut();",12500);
    setTimeout("map.PanToLatLong(new VELatLong(41.639052070137204,-70.52295684814453));",13000);
    setTimeout("map.PanToLatLong(new VELatLong(41.541994,-70.636582));",13500);
    setTimeout("map.AddShape(polyline['Whoosh']);map.SetMapView(polyline['Whoosh'].GetPoints());",16500);
    setTimeout("map.ShowInfoBox(polyline['Whoosh']);",17500);
    setTimeout("map.HideInfoBox(polyline['Whoosh']);map.DeleteShape(polyline['Whoosh']);",22500);
    setTimeout("step5()",23500);
    
}
function step5(){

    //Sealine Procedure
    map.ZoomOut();
    setTimeout("map.PanToLatLong(new VELatLong(41.613246,-70.439368));",3000);
    setTimeout("map.AddShape(polyline['Sealine']);map.SetMapView(polyline['Sealine'].GetPoints());",5000);
    setTimeout("map.ShowInfoBox(polyline['Sealine']);",6000);
    setTimeout("map.HideInfoBox(polyline['Sealine']);map.DeleteShape(polyline['Sealine']);",11000);
    
    //Barnstable Procedure
    setTimeout("map.PanToLatLong(new VELatLong(41.680348,-70.311813));",12000);
    setTimeout("map.AddShape(polyline['Barnstable']);map.SetMapView(polyline['Barnstable'].GetPoints());",14000);
    setTimeout("map.ShowInfoBox(polyline['Barnstable']);",15000);
    setTimeout("map.HideInfoBox(polyline['Barnstable']);map.DeleteShape(polyline['Barnstable']);",20000);
    setTimeout("step6()",21000);
    
}
function step6(){

    //Villager Procedure
    map.ZoomIn();
    setTimeout("map.PanToLatLong(new VELatLong(41.654149,-70.300720));",3000);
    setTimeout("map.ZoomIn();", 4000);
    setTimeout("map.AddShape(polyline['Villager']);map.SetMapView(polyline['Villager'].GetPoints());",6000);
    setTimeout("map.ShowInfoBox(polyline['Villager']);",7000);
    setTimeout("map.HideInfoBox(polyline['Villager']);map.DeleteShape(polyline['Villager']);",12000);
    
    //Hyannis Procedure
    setTimeout("map.PanToLatLong(new VELatLong(41.647006,-70.284777));",13000);
    setTimeout("map.AddShape(polyline['Hyannis']);map.SetMapView(polyline['Hyannis'].GetPoints());",16000);
    setTimeout("map.ShowInfoBox(polyline['Hyannis']);",17000);
    setTimeout("map.HideInfoBox(polyline['Hyannis']);map.DeleteShape(polyline['Hyannis']);",22000);
    setTimeout("step7()", 23000);
    
}
function step7(){

    map.ZoomIn();
    setTimeout("map.SetMapStyle('h');",3000);
    setTimeout("map.PanToLatLong(new VELatLong(41.656730, -70.278693));",6000);
    setTimeout("map.ZoomIn();",7000);
    setTimeout("map.ZoomIn();",10000);
    setTimeout("AddPin( 41.65602625413811,-70.2798843383789, 'Hyannis', 'Hyannis Transportation Center');",11000);
    setTimeout("map.SetCenterAndZoom(new VELatLong(41.65602625413811,-70.2798843383789), 18);",12000);
    setTimeout("map.ShowInfoBox(shape)",13000);
    setTimeout("map.SetMapStyle('o');",18000);
    setTimeout("map.HideInfoBox(shape);map.DeleteShape(shape);map.SetMapStyle('h');",27000);
    setTimeout("map.ZoomOut();",29000);
    setTimeout("map.ZoomOut();",31000);
    setTimeout("map.ZoomOut();",34000);
    setTimeout("step8()",34500);
    
}
function step8(){

     // **Cleanup and Looping Procedure**
    setTimeout("map.Clear();map.DeleteAllShapes();",500);
    setTimeout("setRoutes()",1000);
    setTimeout("step1()",2000);
    
}