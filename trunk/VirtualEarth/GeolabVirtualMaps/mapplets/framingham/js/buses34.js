
//this object tracks all the bus locations/details and downloads new locations
//it takes the url of the bus xml data, a reference to the main map, and a reference to the mini map
function BusTracker(new_xmL_bus_data_url, new_main_map, new_mini_map) //constructor
{


  //ammend a random number so that ie/firefox does not cache the xml(or rather so it replaces the cached xml)
  //this.xml_bus_data_url = new_xmL_bus_data_url+"?expiration_date=" + expiration_date + "&pleasedon'tcache="+(Math.random());
  this.xml_bus_data_url = new_xmL_bus_data_url;
  

  this.buses = new Array; //any associative array of BusObjects to hold all the bus objects



  
  
  //save references to the main map and the mini map so that they can be accessed in BusTracker.update
  this.main_map = new_main_map;
  this.mini_map = new_mini_map;

	
  
}
BusTracker.prototype.update = function()
{

  //downloads the xml for the buses, and then calls this.parse as a method of this
  _IG_FetchXmlContent(this.xml_bus_data_url, _IG_Callback(callParseBusXmlAndDisplay, this), { refreshInterval: 0 });


}


function callParseBusXmlAndDisplay(data, referenceToThis){
referenceToThis.parseBusXmlAndDisplay(data);
}

//this method parse all the data into objects and vars, then maps the data
BusTracker.prototype.parseBusXmlAndDisplay = function(data)
{

	//create a Gxml object to parse the data. That is send the data to a the
	//Gxml constructor, to create an xml aware object through which we access 
	//the downloaded data.
  //var xml_bus_data = GXml.parse(data);
	var xml_bus_data = data;
	
	//parse the bus data by marker(break it into buschunks). That is
	//save each of the <marker> tags as an element in the array curr_bus
  var new_bus_data = xml_bus_data.getElementsByTagName("marker");

	// assign all the buses a value of false
	for(var bus in this.buses)
		this.buses[bus].updated = false;
  
  
	for(var i = 0; i< new_bus_data.length; i++)
	{
		var bus_datum = new_bus_data[i];

		// get the unit id of the bus to update
		
		var unit_id = bus_datum.getAttribute("unit_id");
		
		// check to see if that bus exists
		if(this.buses[unit_id] == null)
		{
			// if it does not exist than create the bus
			this.buses[unit_id] = new BusObject(bus_datum);
			
			// add the bus to the main map
			this.main_map.addOverlay(this.buses[unit_id].createBus())
		}
		// if it does exist
		else
		{
			// check if the bus data (route, icon, etc) needs to be updated
			
			// update the buses position
			var lat = bus_datum.getAttribute("lat");
			var lng = bus_datum.getAttribute("lng");
			var new_position = new GLatLng(lat, lng);
			this.buses[unit_id].setPoint(new_position);
			
		}
		
		// all buses which are not updated are marked as false
		// all not updated buses are deleted from the array
		this.buses[unit_id].updated = true;
	}
  
  // prune all buses which have not been updated by the new data
  for(bus in this.buses)
		if(this.buses[bus].updated  == false)
			{
				this.main_map.removeOverlay(this.buses[bus].bus_marker);
				delete this.buses[bus];
			}


} 

//this method removes all the buses from the main map
BusTracker.prototype.clearBuses = function(map)
{

  //if no buses exist then your done, only remove if you have something to remove
  if(this.buses != null)
  {
    for(var i = 0; i < this.buses.length; i++)
    {
      map.removeOverlay(this.buses[i].bus_marker);  //remove bus from map

      delete this.buses[i].bus_marker;
      delete this.buses[i]; //destroy this object, prevents memory leaks 
    }
  
  //reset the array to zero
  delete this.buses;  //destroy this object, prevents memory leaks
  this.buses = [];
  }

}



//this holdsall the data for one bus
function BusObject(new_xml_data) //constructor
{

  this.xml_data = new_xml_data;

  //parse the xml for data
  this.route_name = this.xml_data.getAttribute("route_name"); //get the route name
  var lat = this.xml_data.getAttribute("lat");
  var lng = this.xml_data.getAttribute("lng");
  this.busGLatLng = new GLatLng(lat, lng);
  
  this.speed = this.xml_data.getAttribute("speed");
  this.direction = this.xml_data.getAttribute("direction");
  this.unit_id = this.xml_data.getAttribute("unit_id");
  


  //create new icon from icon classes
  this.icon = new GIcon(bus_icon);
  this.icon.image = this.xml_data.getAttribute("icon");

}
BusObject.prototype.createBus = function()
{


  
  //create marker object
  this.bus_marker = new GMarker(this.busGLatLng, this.icon);

  //add a listener
  //this.bus_marker = this.addClickListener(this.bus_marker, this.route_name);


  return this.bus_marker;

}
//moves the bus to a new location
BusObject.prototype.setPoint = function(new_GLatLng)
{
	//save the position
	this.busGLatLng = new_GLatLng;
	
	this.bus_marker.setPoint(this.busGLatLng);
}

BusObject.prototype.addClickListener= function(Marker, html)
{
 GEvent.addListener(Marker, "click", function() 
  {
    Marker.openInfoWindowHtml(html);
  });
return Marker;
}








