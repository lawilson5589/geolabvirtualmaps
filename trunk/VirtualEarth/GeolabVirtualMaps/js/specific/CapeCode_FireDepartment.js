/* Author: JBaltikauskas */
var FireStation = new Geolab.PushPinLayer('Fire_Cape', false);
FireStation.SetWebService('Geolab.CapeCod_FireDeptartment.FireStation');
FireStation.SetBestView(true);
FireStation.PushPinCustomFormat = '';

Dashboard.Init = function(){

    this.CreateElement('Landmarks', 'Landmarks');
    //PushPinObject.{Function} =  function(){PushPinObject.Invoke('{MapID}');
    FireStation.Stations =  function(){FireStation.Invoke('FireDepartments_Cape');}
    
    
    // Dashboard.CreateElement('{ID}', '{Title}', FireStation.{Function}, tooltip, tooltipimage);
    this.CreateElement('Stations', 'Fire Stations', FireStation.Stations, 'Fire Station Offices', '/images/map_icons/FireStationIcon.gif' );
    
}