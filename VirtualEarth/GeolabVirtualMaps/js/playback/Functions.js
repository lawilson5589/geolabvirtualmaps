//Main Playback Functions- Playback.aspx
//Authored by D. Fitch 2008
//GeoGraphics Lab
//Bridgewater State College

function GetData()
{
    var dd1 = document.formMain.DropDownList1.selectedIndex;
    var dd2 = document.formMain.DropDownList2.selectedIndex;
    var dd3 = document.formMain.DropDownList3.selectedIndex;
    var dd4 = document.formMain.DropDownList4.selectedIndex;
    day = new Object;
    day.timeofday = "AM";
    day.enddate = "PM";
    document.getElementById("Label1").innerText = document.formMain.DropDownList1[dd1].value;
    var starttimehours = parseInt(document.formMain.DropDownList2[dd2].value);
    var starttimeminutes = parseInt(document.formMain.DropDownList3[dd3].value);
    var duration = parseInt(document.formMain.DropDownList4[dd4].value);
    var date = document.formMain.TextBox1.value;
    var addday = false;
    var timeofdaystart = "AM";
    if (date.length == 8)
    {
        CalculateTiming(starttimehours, starttimeminutes, duration, date, day);
        if (starttimeminutes == 0)
            starttimeminutes = "00";
        if (starttimehours > 12)
        {
            starttimehours = starttimehours - 12;
            timeofdaystart = "PM"
        }
        var startdate = date.substring(0,2) + "/" + date.substring(2,4) + "/" + date.substring(4,9) + " " + starttimehours + ":" + starttimeminutes + ":00 " + timeofdaystart;

        if (addday == false)
        {
            document.formMain.StartButton.disabled = true;
            document.formMain.ResetButton.disabled = false;
            MakeRequest(startdate, day.enddate);
        }
        else
        {
            alert("This program does not handle cross day requests. Please choose a duration less than that which would cause the query to span to another day.");
        }
    }
    else
    {
        alert("DATE NOT IN VALID FORMAT- Please correct and try again.");
    }

}

function AddPin(lat, longitude, title, description)
{
    var pinlatlong = new VELatLong(lat, longitude);
    shape = new VEShape(VEShapeType.Pushpin, pinlatlong);  
    shape.SetCustomIcon('images/bus_stop_icon.png');
    shape.SetTitle(title);         
    shape.SetDescription(description); 
    map.DeleteAllShapes();
    map.AddShape(shape);
}

function CalculateTiming(starttimehours, starttimeminutes, duration, date, day)
{
   var minutediff = starttimeminutes + duration;
   var endtimeminutes = minutediff % 60;
   var endtimehours = Math.floor( minutediff / 60);
   day.timeofday = "AM";
   endtimehours = endtimehours + starttimehours;
   if ((endtimehours > 12) && (endtimehours < 24))
   {
       endtimehours = endtimehours - 12; 
       day.timeofday = "PM";
   }
   if (endtimehours >= 24)
   {
       endtimehours = endtimehours - 24;
       this.addday = true;
   }
   if (endtimeminutes == 0)
   {
       endtimeminutes = "00";
   }
   day.enddate = date.substring(0,2) + "/" + date.substring(2,4) + "/" + date.substring(4,9) + " " + endtimehours + ":" + endtimeminutes + ":00 " + day.timeofday;

}



function MakeRequest(startdate, enddate)
{
var time = 250;
var self = this;
        var __onWebRequestCompleted = function (executor, eventArgs)
            {    
                // This the handler for the Web request completed event
                // that is used to display return data.
                if(executor.get_responseAvailable())
                {
                    try{
                    
                        var collection = new Array;

                        eval(executor.get_responseData());
                        //self.__layer.DeleteAllShapes();
                        var i = 0;
                        if (collection.length > 0)
                        {
                            setTimeout(String.format("AddPin({0},{1},'Test', \"Date:{2} Time: {3}\");map.ShowInfoBox(shape, map.PixelToLatLong(new VEPixel(map.GetLeft() + 25, map.GetTop() + 50 )));", collection[i].Latitude, collection[i].Longitude, collection[i].Date, collection[i].Time),time)
                            time = time + 250;
                            i++;
                        }
                        else 
                        {
                            var center = map.GetCenter();
                            AddPin(center.Latitude, center.Longitude, "No Results Found!");
                            map.ShowInfoBox(shape);
                        }
                        if (collection.length > 1)
                        {
                            window.t = new Array();
                            var playbackspeedindex = document.formMain.PlaybackSpeedDropDown.selectedIndex;
                            var playbackdelayduration = parseInt(document.formMain.PlaybackSpeedDropDown[playbackspeedindex].value);
                            for(i in collection)
                            {
                                var javascriptcommand = String.format("map.DeleteShape(shape);AddPin({0},{1},'Test', \"Date:{2} Time: {3} <br />GPS Info: <img alt='Sattelite' src='images/map_icons/sat_{4}.gif'></img> <img alt='Signal' src='images/map_icons/sig_{5}.gif'> </img><img alt='Battery' src='images/map_icons/batt_{6}.gif'></img><br /><br />Speed: {7} MPH   Heading: {8} &deg\");map.ShowInfoBox(shape, map.PixelToLatLong(new VEPixel(map.GetLeft() + 25, map.GetTop() + 70 )));", collection[i].Latitude, collection[i].Longitude, collection[i].Date, collection[i].Time, collection[i].SatelliteNumber, collection[i].SignalStrength, collection[i].BatteryLevel, collection[i].Speed, collection[i].Heading);
                                window.t[i] = setTimeout(javascriptcommand,time);
                                time = time + playbackdelayduration;
                            }
                        }
                        collection = null;
                    }catch(e){
                        Sys.Debug.trace("__onWebRequestCompleted " + e.name + ": " + e.message + "\n" + e.stack);                
                    }
                }
                else
                {
                    if (executor.get_timedOut()){
                        Sys.Debug.trace("Timed Out");
                    }
                    else{
                        if (executor.get_aborted()){
                            Sys.Debug.trace("Aborted");
                        }
                    }
                }
            };
        
        try{
            var request = new Sys.Net.WebRequest();
            request.set_httpVerb("POST");// Set the request verb.
            //- note that the header is the magic key to the endpoint:
            request.get_headers()['Content-Type'] = 'application/json';
            request.add_completed(__onWebRequestCompleted);
            var dd1 = document.formMain.DropDownList1.selectedIndex;
            request.set_url(String.format("AVL_webservices/HistoricData.ashx?ID={0}&GeolabID={1}&StartDate={2}&EndDate={3}",document.formMain.DropDownList1[dd1].value, document.formMain.DropDownList1[dd1].text, startdate, enddate));
            request.invoke();
            // Clean Up
            request = null; __onWebRequestCompleted = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
}

function CancelRequest()
{
    for(a = 0; a <= window.t.length; a = a + 1)
    {
        clearTimeout(window.t[a]);
        map.DeleteAllShapes();
        document.formMain.StartButton.disabled = false;
        document.formMain.ResetButton.disabled = true;
    }
}