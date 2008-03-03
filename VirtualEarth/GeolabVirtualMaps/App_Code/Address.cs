using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Net;
using System.Globalization;
using System.IO;
using System.Web.Script.Serialization;
using System.Text;

/// <summary>
/// Summary description for Address
/// </summary>
namespace ReverseGeo
{
    public class GeoNamesAddress
    {
        private readonly static string FindNearbyAddressUrl =
            "http://ws.geonames.org/findNearestAddressJSON?lat={0}&lng={1}";

        public static SingleReverseGeoCode GetAddress(double lat, double lng)
        {
            string formatteduri = String.Format(CultureInfo.InvariantCulture, FindNearbyAddressUrl, lat, lng);
            
            HttpWebRequest webRequest = GetWebRequest(formatteduri);
            HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse();
            string jsonResponse = string.Empty;
            using (StreamReader sr = new StreamReader(response.GetResponseStream()))
            {
                jsonResponse = sr.ReadToEnd();
            }

            JavaScriptSerializer ser = new JavaScriptSerializer();
            SingleReverseGeoCode geocode = ser.Deserialize<SingleReverseGeoCode>(jsonResponse);

            return geocode;
            
        }

        private static HttpWebRequest GetWebRequest(string formatteduri)
        {
            Uri serviceUri = new Uri(formatteduri, UriKind.Absolute);
            return (HttpWebRequest)System.Net.WebRequest.Create(serviceUri);
        }

    }

    public class SingleReverseGeoCode
    {
        private Address _address;
        public Address address
        {
            get
            {
                return _address;
            }
            set
            {
                _address = value;
            }
        }
    }

    public class Address
    {
        private string _adminName2;
        private string _postalcode;
        private string _adminCode1;
        private string _distance;
        private string _street;
        private string _countryCode;
        private string _lng;
        private string _streetNumber;
        private string _placename;
        private string _lat;
        private string _adminName1;
        public string adminName2
        {
            get
            {
                return _adminName2;
            }
            set
            {
                _adminName2 = value;
            }
        }

        public string postalcode
        {
            get
            {
                return _postalcode;
            }
            set
            {
                if (value == "00")
                    value = "";
                _postalcode = value;
            }
        }
        public string adminCode1
        {
            get
            {
                return _adminCode1;
            }
            set
            {
                _adminCode1 = value;
            }
        }
        public string distance
        {
            get
            {
                return _distance;
            }
            set
            {
                _distance = value;
            }
        }
        public string street
        {
            get
            {
                return _street;
            }
            set
            {
                _street = value;
            }
        }
        public string countryCode
        {
            get
            {
                return _countryCode;
            }
            set
            {
                _countryCode = value;
            }
        }
        public string lng
        {
            get
            {
                return _lng;
            }
            set
            {
                _lng = value;
            }
        }
        public string streetNumber
        {
            get
            {
                return _streetNumber;
            }
            set
            {
                _streetNumber = value;
            }
        }
        public string placename
        {
            get
            {
                return _placename;
            }
            set
            {
                if (value == "Bridgewater (census name for Bridgewater Center)")
                    value = "Bridgewater";
                _placename = value;
            }
        }
        public string lat
        {
            get
            {
                return _lat;
            }
            set
            {
                _lat = value;
            }
        }
        public string adminName1
        {
            get
            {
                return _adminName1;
            }
            set
            {
                _adminName1 = value;
            }
        }

    }
}
