var haynnispin;
var haynnislatlon = new VELatLong(41.65588797740388,-70.28833866119386);
function AddPin(lat, long, title, description)
{
    var pinlatlong = new VELatLong(lat, long);
    //haynnispin = map.AddPushpin(haynnislatlon) ; 
    //haynnispin.SetTitle('Haynnis'); 
    //haynnispin.SetDescription('Haynnis Transportation center');
    haynnispin = map.AddPushpin(pinlatlong) ; 
    haynnispin.SetTitle(title); 
    haynnispin.SetDescription(description);
}
function step1(){
    var t = 5000; // loading time
    map.SetMapStyle("r");
    AddPin( 41.65588797740388, -70.28833866119386, "Haynnis", "Big Test");
    map.SetCenterAndZoom(haynnislatlon, 9);
    setTimeout("map.SetMapStyle('a')", 5000);
    setTimeout("map.SetMapStyle('h')", 10000);
    setTimeout("map.SetMapStyle('r')", 15000);
    setTimeout("map.ShowInfoBox(haynnispin)",16000);
    setTimeout("map.HideInfoBox(haynnispin)",21000);
    setTimeout("step2()",23000);
    
}
function step2(){
    map.PanToLatLong(new VELatLong(42.05842543936369,-70.19500602493133));
    setTimeout("map.ZoomIn()",3000);
    setTimeout("map.ZoomIn()",4500);
    setTimeout("map.ZoomIn()",6000);
    setTimeout("map.ZoomIn()",7500);

    setTimeout("map.AddShape(polyline['Orange']);map.SetMapView(polyline['Orange'].GetPoints());map.ShowInfoBox(polyline['Orange'])",11000);
    setTimeout("map.AddShape(polyline['PTown']);map.SetMapView(polyline['PTown'].GetPoints());",17000);
    setTimeout("map.DeleteShape(polyline['Orange'])",16000);
    setTimeout("map.HideInfoBox(polyline['Orange']);map.DeleteShape(polyline['PTown'])",23000);
}

