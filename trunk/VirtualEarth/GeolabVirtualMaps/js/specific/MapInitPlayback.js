/* Author: JBaltikauskas */
var GeolabMap = {
    GetMap : function()
    {
    
        DialogBox.Show(false, 5000);
        map = new VEMap("geoMap");
        map.onLoadMap = function()
        {
//            Vehicle = new Geolab.Vehicle();
//            Vehicle.setIcon(Settings.VehicleIcon);
//            Vehicle.setPath(Settings.VehicleWebServicePath);
//            Vehicle.setTitle(Settings.VehiclePinTitles);
//            Vehicle.setGeoCoding(Settings.GeoCoding);
//            Vehicle.setInterval(Settings.DataRefreshRate); 
//            Vehicle.valueLabelID = 'WebUserControl_ToolBarList_ajax__slider_hLabel';
//            window.setTimeout('Vehicle.InitSlider()', 5000); 
               
      
            var el = $get('MSVE_navAction_header');
            if(el){
                el.innerHTML = '<b style="font-size:7pt;">GeoGraphics Lab, Bridgewater, MA</b>';
            }
            el = null;
            mapNav = new Geolab.MapNav();
            el = $ID(Screen.DivIDContainer);
            el.style.visibility = "visible";
            el = null;
            window.setTimeout('map.AttachEvent("onkeydown", mapNav.KeyboardHandler)', 5000);
        };
        var birdseyeoptions = new VEMapOptions();
        birdseyeoptions.EnableBirdseye = false;
        map.LoadMap(new VELatLong(Settings.Lat, Settings.Lon), Settings.MapZoom, Settings.MapStyle , false, VEMapMode.Mode2D, true, 0, birdseyeoptions);
        map.SetCenter(new VELatLong(Settings.Lat, Settings.Lon));
        MapNav = new Geolab.MapNav('MapNav');
        window.setTimeout("MapNav.SetNavControl()", 4000);
        if(typeof(Dashboard.Init) == 'function') Dashboard.Init();
        Dashboard.InitializeTooltip();

    }
};


window.onload = function()
{
    VEMap.SetMapSize();
    GeolabMap.GetMap();
}
window.onresize = function()
{
    VEMap.SetMapSize();
    if(MapNav) MapNav.onResize();
}
window.onunload = function()
{
    if(map) map.Dispose();
} 