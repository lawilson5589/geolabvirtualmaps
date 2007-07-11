// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel;
using System.Reflection;

namespace VELibrary
{
    /// <summary>
    /// The implemetation of VELatLong list class
    /// </summary>
    [TypeConverter(typeof(JsonConverter))]
    public sealed class VECollection : List<VELatLong>, IJson
    {
        /// <summary>
        /// The string representation of the list collection.
        /// </summary>
        /// <example>
        /// "/*VECollection*/ vecollection=new Array();Array.add(vecollection, new VELatLong(41.123456,-70.123456));Array.add(vecollection, new VELatLong(42.123456,-71.123456));Array.add(vecollection, new VELatLong(43.123456,-72.123456));"
        /// </example>
        /// <returns></returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder("/*VECollection*/ vecollection=new Array();");
            foreach (VELatLong latlong in this)
            {
                sb.AppendFormat("Array.add(vecollection, new VELatLong({0},{1}));", latlong.Latitude, latlong.Longitude);
            }
            return sb.ToString();
        }

        #region IJson Members

        /// <summary>
        /// An ordered list of values
        /// </summary>
        /// <example>
        /// "[new VELatLong(41.123456,-70.123456),new VELatLong(42.123456,-71.123456),new VELatLong(43.123456,-72.123456)]"
        /// </example>
        /// <returns>A collection of VELatLong objects</returns>
        public string ToJson()
        {
            StringBuilder sb = new StringBuilder("[");
            foreach (VELatLong latlong in this)
            {
                sb.Append(latlong.ToJson()).Append(',');
            }
            // Change last element from this  
            //      [ ... new VELatLong(25.26,69.39), new VELatLong(45.266,4.59863),
            // to 
            //      [ ... new VELatLong(25.26,69.39), new VELatLong(45.266,4.59863)]
            sb.Remove(sb.Length - 1, 1);
            sb.Append("]");
            return sb.ToString();
        }

        /// <summary>
        /// A collection of name/value pairs
        /// </summary>
        /// <example>
        /// "[{\"Latitude\":41.123456,\"Longitude\":-70.123456},{\"Latitude\":42.123456,\"Longitude\":-71.123456},{\"Latitude\":43.123456,\"Longitude\":-72.123456}]"
        /// </example>
        /// <returns>A collection of name/value pairs in Javascript format</returns>
        public string Serialize()
        {
            System.Web.Script.Serialization.JavaScriptSerializer jss = new System.Web.Script.Serialization.JavaScriptSerializer();
            return jss.Serialize(this);
        }

        #endregion
    }
}
