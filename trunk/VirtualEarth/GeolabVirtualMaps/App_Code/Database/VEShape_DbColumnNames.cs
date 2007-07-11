using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

namespace Geolab
{
    /// <summary>
    /// Summary description for VEShape Database ColumnNames
    /// </summary>
    public sealed class VEShape_DbColumnNames 
    {
        /// <summary>
        /// No instances allowed
        /// </summary>
        private VEShape_DbColumnNames() { }

        #region DBShape Members


        public static string Description
        {
            get { return "Description"; }
        }

        public static string MoreInfoUrl
        {
            get { return "Moreinfourl"; }
        }

        public static string PhotoUrl
        {
            get { return "Photourl"; }
        }

        public static string Title
        {
            get { return "Title"; }
        }

        public static string IconUrl
        {
            get { return "IconUrl"; }
        }

        public static string GeoRssPoint
        {
            get { return "GeoRssPoint"; }
        }

        public static string GeoRssLine
        {
            get { return "GeoRssLine"; }
        }

        public static string Color
        {
            get { return "Color"; }
        }

        public static string MapID
        {
            get { return "MapID"; }
        }

        public static string Width
        {
            get { return "Width"; }
        }

        public static string LineStyle
        {
            get { return "LineStyle"; }
        }

        #endregion
    }
}