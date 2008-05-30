using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

namespace Geolab
{
    /// <summary>
    /// Summary description for AGPS Database ColumnNames
    /// </summary>
    public abstract class AGPS_DbColumnNames
    {
        public static String ID
        {
            get
            {
                return "ID";
            }
        }

       
        public static String Datetime
        {
            get
            {
                return "Datetime";
            }
        }

        public static String GpsResponseCode
        {
            get
            {
                return "GpsResponseCode";
            }
        }

        public static String HasLatLon
        {
            get
            {
                return "HasLatLon";
            }
        }

        public static String Latitude
        {
            get
            {
                return "Latitude";
            }
        }

        public static String Longitude
        {
            get
            {
                return "Longitude";
            }
        }

        public static String HasSpeedUncertainty
        {
            get
            {
                return "HasSpeedUncertainty";
            }
        }

        public static String LatLonAccuracy
        {
            get
            {
                return "LatLonAccuracy";
            }
        }

        public static String HasLatLonAccuracy
        {
            get
            {
                return "HasLatLonAccuracy";
            }
        }

        public static String PositionSpeed
        {
            get
            {
                return "PositionSpeed";
            }
        }

        public static String SpeedUncertainty
        {
            get
            {
                return "SpeedUncertainty";
            }
        }

        public static String HasTravelDirection
        {
            get
            {
                return "HasTravelDirection";
            }
        }

        public static String PositionHeading
        {
            get
            {
                return "PositionHeading";
            }
        }

        public static String HasServingCellLatLon
        {
            get
            {
                return "HasServingCellLatLon";
            }
        }

        public static String ServingCellLatitude
        {
            get
            {
                return "ServingCellLatitude";
            }
        }

        public static String ServingCellLongitude
        {
            get
            {
                return "ServingCellLongitude";
            }
        }

        public static String HasNumberOfSatellites
        {
            get
            {
                return "HasNumberOfSatellites";
            }
        }

        public static String SatelliteNumber
        {
            get
            {
                return "SatelliteNumber";
            }
        }

        public static String BatteryLevel
        {
            get
            {
                return "BatteryLevel";
            }
        }


        public static String SignalStrength
        {
            get
            {
                return "SignalStrength";
            }
        }
        public static String Froutename
        {
            get
            
                {
                    return "Froutename";
                }
            
        }
        public static String Busid
        {
            get
            {
                return "BusID";
            }

        }
    }
}