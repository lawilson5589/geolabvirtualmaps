/* Author: JBaltikauskas */
var GeolabMap = {
    GetMap : function()
    {
        map = new VEMap("geoMap");
        map.onLoadMap = function()
        {
            map.HideDashboard();
            Vehicle = new Geolab.Vehicle();
            Vehicle.setIcon(Settings.VehicleIcon);
            Vehicle.setPath(Settings.VehicleWebServicePath);
            Vehicle.setTitle(Settings.VehiclePinTitles);
            Vehicle.setGeoCoding(Settings.GeoCoding);
            Vehicle.setInterval(Settings.DataRefreshRate); 

        };
        map.LoadMap(new VELatLong(Settings.Lat, Settings.Lon), Settings.MapZoom, Settings.MapStyle , false);
        map.SetCenter(new VELatLong(Settings.Lat, Settings.Lon));
        setRoutes();
        map.ShowMiniMap();
        //setTimeout("step1()", 1000);
    }
};


window.onload = function()
{
    GeolabMap.GetMap();
}
window.onresize = function()
{

}
window.onunload = function()
{
    if(map) map.Dispose();
} 