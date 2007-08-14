using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Text;
using Microsoft.Security.Application;
using net.mappoint.staging;

namespace Geolab
{

    public class VEVehicleInfoFlags
    {
        private String customIcon;

        public String CustomIcon
        {
            get { return customIcon; }
            set { customIcon = value; }
        }

        private String title;
        public String Title
        {
            get { return title; }
            set { title = value; }
        }

        private bool geoCoding = true;
        public bool GeoCoding
        {
            get { return geoCoding; }
            set { geoCoding = value; }
        }

        private bool onlyFirstAddress;

        public bool OnlyFirstAddress
        {
            get { return onlyFirstAddress; }
            set { onlyFirstAddress = value; }
        }
    }


    /// <summary>
    /// Summary description for VEVehicle
    /// </summary>
    public class VEVehicle : VEVehicleInfoFlags
    {
        private static MapPointCredentials global = new MapPointCredentials();


        public VEVehicle(VEVehicleInfoFlags flags)
        {
            base.Title = flags.Title;
            base.CustomIcon = flags.CustomIcon;
            base.GeoCoding = flags.GeoCoding;
            base.OnlyFirstAddress = flags.OnlyFirstAddress;

        }
        private String geolabID;

        public String GeolabID
        {
            get { return geolabID; }
            set { geolabID = value; }
        }

        private String date;

        public String Date
        {
            get { return date; }
            set { date = value; }
        }
        private String time;

        public String Time
        {
            get { return time; }
            set { time = value; }
        }
        private Double latitude;

        public Double Latitude
        {
            get { return latitude; }
            set {latitude = value ; }
        }
        private Double longitude;

        public Double Longitude
        {
            get { return longitude; }
            set { longitude = value; }
        }
        private String accuracy;

        public String Accuracy
        {
            get { return accuracy; }
            set { accuracy = value; }
        }
        private String speed;

        public String Speed
        {
            get { return speed; }
            set { speed = value; }
        }
        private String heading;

        public String Heading
        {
            get { return heading; }
            set { heading = value; }
        }
        private byte satelliteNumber;

        public byte SatelliteNumber
        {
            get { return satelliteNumber; }
            set { satelliteNumber = value; }
        }
        private String batteryLevel;

        public String BatteryLevel
        {
            get { return batteryLevel; }
            set { batteryLevel = value; }
        }
        private String signalStrength;

        public String SignalStrength
        {
            get { return signalStrength; }
            set { signalStrength = value; }
        }

        private String locationInfo;

        public String LocationInfo
        {
            get { return locationInfo; }
            set { locationInfo = value; }
        }
        public String Froute
        {
            get { return froute; }
            set {froute = value;} 
        }


        public string ToJson()
        {
            System.Web.Script.Serialization.JavaScriptSerializer jss = new System.Web.Script.Serialization.JavaScriptSerializer();
            return jss.Serialize(this);
        }



        /// <summary>
        /// Conver sattelite number to number for string format img alt="Sattelite" src="images/map_icons/sat_{0}.gif"
        /// The valid number is 0 to 4.
        /// </summary>
        /// <param name="satellite_number">Sattelite number in string format</param>
        /// <returns></returns>
        public static byte GetSatteliteBars(String satellite_number)
        {
            byte number = Convert.ToByte(satellite_number);
            switch (number)
            {
                case 12:
                case 11:
                case 10:
                case 9:
                case 8:
                case 7:
                case 6:
                    number = 3;
                    break;
                case 5:
                case 4:
                    number = 2;
                    break;
                case 3:
                case 2:
                case 1:
                    number = 1;
                    break;
                default:
                    number = 0;
                    break;
            }
            return number;
        }

        /// <summary>
        /// Get location info
        /// </summary>
        /// <returns></returns>
        public  String GetLocationInfo()
        {
            StringBuilder sb = new StringBuilder();
            try
            {
                //find using GetLocationInfo
                LatLong latlong = new LatLong();
                latlong.Latitude = this.latitude;
                latlong.Longitude = this.longitude;

                //Define get info options object
                GetInfoOptions options = new GetInfoOptions();
                //I'm looking only for cities
                options.IncludeAllEntityTypes = false;
                options.EntityTypesToReturn = new string[] { "PopulatedPlace" };


                //Define a field to hold returned locations
                Location[] returnedLocations;
                //Call GetLocationInfo with "MapPoint.NA" data source

                returnedLocations = global.FindService.GetLocationInfo(latlong, "MapPoint.NA", options);

                if (this.OnlyFirstAddress)
                {
                    //Get entity information
                    sb.Append("<li>");
                    sb.Append(returnedLocations[0].Entity.DisplayName);
                    sb.Append("</li>");
                }
                else
                {
                    //Get entity information
                    for (int i = 0; i < returnedLocations.Length; i++)
                    {
                        sb.Append("<li>");
                        sb.Append(returnedLocations[i].Entity.DisplayName);
                        sb.Append("</li>");
                    }
                }

            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.Write(ex.Message);
            }
            return sb.ToString();
        }

    }
}