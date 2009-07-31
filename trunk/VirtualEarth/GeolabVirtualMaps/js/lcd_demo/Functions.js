//Main Animation Sequence File- AVL Display
//Authored by J.Baltikauskas, D.Fitch 2007
//GeoGraphics Lab
//Bridgewater State College

var shape;
var haynnislatlon = new VELatLong(41.65588797740388,-70.28833866119386);
function Start()
{
    setTimeout("step1()", 1000);
}
function AddPin(lat, longitude, title, description)
{
    //Vehicle.invoke();
    var pinlatlong = new VELatLong(lat, longitude);
    shape = new VEShape(VEShapeType.Pushpin, pinlatlong);  
    shape.SetCustomIcon('images/bus_stop_icon.png');
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
    Vehicle.invoke();
    setTimeout("map.SetMapStyle('a')", 5000);
    setTimeout("map.SetMapStyle('h')", 10000);
    setTimeout("map.SetMapStyle('r')", 15000);
    setTimeout("map.ShowInfoBox(shape)",16000);
    setTimeout("map.HideInfoBox(shape);map.DeleteShape(shape);",21000);
    setTimeout("Vehicle.deleteShapes();",22950);
    setTimeout("step2()",23000);
}
function step2(){
    Vehicle.invoke();
    map.PanToLatLong(new VELatLong(42.05842543936369,-70.19500602493133));
    setTimeout("Vehicle.deleteShapes();",3000);
    setTimeout("map.ZoomIn()",3000);
    setTimeout("Vehicle.invoke();",3050);
    setTimeout("Vehicle.deleteShapes();",4500);   
    setTimeout("map.ZoomIn()",4500);
    setTimeout("Vehicle.invoke();",4550);
    setTimeout("Vehicle.deleteShapes();",6000);
    setTimeout("map.ZoomIn()",6000);
    setTimeout("Vehicle.invoke();",6050);
    setTimeout("Vehicle.deleteShapes();",7500);
    setTimeout("map.ZoomIn()",7500);
    setTimeout("Vehicle.invoke();",7550);
    // Pin for orange 42.051775,-70.18581
    setTimeout("map.AddShape(polyline['Orange']);map.SetMapView(polyline['Orange'].GetPoints());",11000);
    setTimeout("map.ShowInfoBox(polyline['Orange']);",13000);
    setTimeout("map.HideInfoBox(polyline['Orange']);map.DeleteShape(polyline['Orange']);",16000);
    setTimeout("map.AddShape(polyline['PTown']);map.SetMapView(polyline['PTown'].GetPoints());",17000);
    setTimeout("map.ShowInfoBox(polyline['PTown']);",21000);
    setTimeout("map.HideInfoBox(polyline['PTown']);map.DeleteShape(polyline['PTown']);",24000);
    setTimeout("step3()",25000);
    
}
function step3(){

    //Flex Route Procedure
    Vehicle.deleteShapes();
    map.ZoomOut();
    setTimeout("Vehicle.invoke();",50);
    setTimeout("Vehicle.deleteShapes();",3000);
    setTimeout("map.ZoomOut();map.PanToLatLong(new VELatLong(41.867337,-70.078368));",3000);
    setTimeout("Vehicle.invoke();",3050);
    setTimeout("Vehicle.deleteShapes();",6000);
    setTimeout("map.ZoomOut();", 6000);
    setTimeout("Vehicle.invoke();",6050);
    setTimeout("map.AddShape(polyline['Flex']);map.SetMapView(polyline['Flex'].GetPoints());",7500);
    setTimeout("map.ShowInfoBox(polyline['Flex']);",9500);
    setTimeout("map.HideInfoBox(polyline['Flex']);map.DeleteShape(polyline['Flex']);",13500);
    

    setTimeout("Vehicle.deleteShapes();",14500);
    
    //H20 Route Procedure
    //setTimeout("map.ZoomIn();map.PanToLatLong(new VELatLong(41.722110,-70.118581));",14500);
    setTimeout("map.ZoomIn();map.PanToLatLong(new VELatLong(41.722110,-70.15));",14500);
    setTimeout("Vehicle.invoke();",14550);
    setTimeout("map.AddShape(polyline['H20']);map.SetMapView(polyline['H20'].GetPoints());",15500);
    setTimeout("map.ShowInfoBox(polyline['H20']);",19000);
    setTimeout("map.HideInfoBox(polyline['H20']);map.DeleteShape(polyline['H20']);",23000);
    setTimeout("step4()",24000);
      
}
function step4(){

    //Yarmouth Procedure (Summer)
    Vehicle.deleteShapes();
    map.ZoomIn();
    setTimeout("map.PanToLatLong(new VELatLong(41.651322,-70.233572));",3000);
    setTimeout("Vehicle.invoke();",3050);
    setTimeout("Vehicle.deleteShapes();",4000);
    setTimeout("map.ZoomIn();",4000);
    setTimeout("Vehicle.invoke();",4050);
    setTimeout("map.AddShape(polyline['Yarmouth']);map.SetMapView(polyline['Yarmouth'].GetPoints());",6000);
    setTimeout("map.ShowInfoBox(polyline['Yarmouth']);",7000);
    setTimeout("map.HideInfoBox(polyline['Yarmouth']);map.DeleteShape(polyline['Yarmouth']);",12000);
 
    
    //Woosh Procedure (Summer)
    setTimeout("Vehicle.deleteShapes();",12500);
    setTimeout("map.ZoomOut();",12500);
    setTimeout("Vehicle.invoke();",12550);
    setTimeout("Vehicle.deleteShapes();",13000);
    setTimeout("map.PanToLatLong(new VELatLong(41.639052070137204,-70.52295684814453));",13000);
    setTimeout("Vehicle.invoke();",13050);
    setTimeout("Vehicle.deleteShapes();",13500);
    setTimeout("map.PanToLatLong(new VELatLong(41.541994,-70.636582));",13500);
    setTimeout("Vehicle.invoke();",13550);
    setTimeout("map.AddShape(polyline['Whoosh']);map.SetMapView(polyline['Whoosh'].GetPoints());",16500);
    setTimeout("map.ShowInfoBox(polyline['Whoosh']);",17500);
    setTimeout("map.HideInfoBox(polyline['Whoosh']);map.DeleteShape(polyline['Whoosh']);",22500);
    setTimeout("step5()",23500);
    //setTimeout("step5()",500);
}
function step5(){

    //Sealine Procedure
    Vehicle.deleteShapes();
    map.ZoomOut();
    setTimeout("Vehicle.invoke();",50);
    setTimeout("Vehicle.deleteShapes();",3000);
    setTimeout("map.PanToLatLong(new VELatLong(41.613246,-70.439368));",3000);
    setTimeout("Vehicle.invoke();",3050);
    setTimeout("map.AddShape(polyline['Sealine']);map.SetMapView(polyline['Sealine'].GetPoints());",5000);
    setTimeout("map.ShowInfoBox(polyline['Sealine']);",7000);
    setTimeout("map.HideInfoBox(polyline['Sealine']);map.DeleteShape(polyline['Sealine']);",11000);
    
    setTimeout("Vehicle.deleteShapes();",12000);
    
    //Barnstable Procedure
    setTimeout("map.PanToLatLong(new VELatLong(41.680348,-70.311813));",12000);
    setTimeout("Vehicle.invoke();",12050);
    setTimeout("map.AddShape(polyline['Barnstable']);map.SetMapView(polyline['Barnstable'].GetPoints());",14000);
    setTimeout("map.ShowInfoBox(polyline['Barnstable']);",16000);
    setTimeout("map.HideInfoBox(polyline['Barnstable']);map.DeleteShape(polyline['Barnstable']);",20000);
    setTimeout("step6()",21000);
    
}
function step6(){

    //Villager Procedure
    //map.ZoomIn();
    //setTimeout("map.PanToLatLong(new VELatLong(41.654149,-70.300720));",3000);
    //setTimeout("map.ZoomIn();", 4000);
    //setTimeout("map.AddShape(polyline['Villager']);map.SetMapView(polyline['Villager'].GetPoints());",6000);
    //setTimeout("map.ShowInfoBox(polyline['Villager']);",8000);
    //setTimeout("map.HideInfoBox(polyline['Villager']);map.DeleteShape(polyline['Villager']);",12000);
    
    //Hyannis 
    setTimeout("Vehicle.deleteShapes();",3000);
    setTimeout("map.PanToLatLong(new VELatLong(41.647006,-70.284777));",3000);
    setTimeout("Vehicle.invoke();",3050);
    setTimeout("map.AddShape(polyline['Hyannis']);map.SetMapView(polyline['Hyannis'].GetPoints());",6000);
    setTimeout("map.ShowInfoBox(polyline['Hyannis']);",7000);
    setTimeout("map.HideInfoBox(polyline['Hyannis']);map.DeleteShape(polyline['Hyannis']);",12000);
    setTimeout("step7()", 23000);
    
}
function step7(){

    Vehicle.deleteShapes();
    map.PanToLatLong(new VELatLong(41.656238678687714,-70.27971804141998));
    setTimeout("Vehicle.invoke();",50);
    setTimeout("Vehicle.deleteShapes();",1500);
    setTimeout("map.ZoomIn();",1500);
    setTimeout("Vehicle.invoke();",1550);
    setTimeout("map.SetMapStyle('h');",3000);
    setTimeout("Vehicle.deleteShapes();",6000);
    setTimeout("map.PanToLatLong(new VELatLong(41.656238678687714,-70.27971804141998));",6000);
    setTimeout("Vehicle.invoke();",6050);
    setTimeout("Vehicle.deleteShapes();",7000);
    setTimeout("map.ZoomIn();",7000);
    setTimeout("Vehicle.invoke();",7050);
    setTimeout("Vehicle.deleteShapes();",10000);
    setTimeout("map.ZoomIn();",10000);
    setTimeout("Vehicle.invoke();",10050);
    setTimeout("AddPin( 41.65602625413811,-70.2798843383789, 'Hyannis', 'Hyannis Transportation Center');",11000);
    setTimeout("map.SetCenterAndZoom(new VELatLong(41.65602625413811,-70.2798843383789), 18);",12000);
    setTimeout("map.ShowInfoBox(shape)",14000);
    setTimeout("map.SetMapStyle('o');",18000);
    setTimeout("map.HideInfoBox(shape);map.DeleteShape(shape);map.SetMapStyle('h');",27000);
    setTimeout("Vehicle.deleteShapes();",29000);
    setTimeout("map.ZoomOut();",29000);
    setTimeout("Vehicle.invoke();",29050);
    setTimeout("Vehicle.deleteShapes();",31000);
    setTimeout("map.ZoomOut();",31000);
    setTimeout("Vehicle.invoke();",31050);
    setTimeout("Vehicle.deleteShapes();",34000);
    setTimeout("map.ZoomOut();",34000);
    setTimeout("Vehicle.invoke();",34050);
    setTimeout("step8()",34500);
    
}
function step8(){

     // **Cleanup and Looping Procedure**
    setTimeout("map.Clear();map.DeleteAllShapes();",500);
    setTimeout("setRoutes()",1000);
    setTimeout("Vehicle.deleteShapes();",1950);
    setTimeout("step1()",2000);
    
}