#region Header
// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx
using System;
using System.Collections.Generic;
using System.Text;
#endregion

namespace VELibrary
{
    /// <summary>
    /// Represents a VEShape object that is a polyline.
    /// </summary>
    public class VEPolyline : AShape
    {
        /// <summary>
        /// The Polyline style
        /// </summary>
        private String lineStyle = null;

        /// <summary>
        /// Valid polyline's style types Solid, ShortDash, ShortDot, ShortDashDot, 
        /// ShortDashDotDot, Dot, Dash, LongDash, DashDot, LongDashDot, LongDashDotDot
        /// </summary>
        public String LineStyle
        {
            get
            {
                return (this.lineStyle != null) ? this.lineStyle : "Solid";
            }
            set
            {
                switch (value)
                {
                    case "Solid":
                    case "ShortDash":
                    case "ShortDot":
                    case "ShortDashDot":
                    case "ShortDashDotDot":
                    case "Dot":
                    case "Dash":
                    case "LongDash":
                    case "DashDot":
                    case "LongDashDot":
                    case "LongDashDotDot":
                        this.lineStyle = value;
                        break;
                    default:
                        throw new ArgumentException("Illegal Line Style value");
                }

            }
        }


        /// <summary>
        /// The list of VE Latitude and Longitude poins
        /// </summary>
        protected VECollection pointList;

        /// <summary>
        /// The PolyLine Color
        /// </summary>
        protected VEColor color;

        /// <summary>
        /// The PolyLine width
        /// </summary>
        protected byte width = 2 ;

        /// <summary>
        /// Set / Get the PolyLine points 
        /// </summary>
        public VECollection PointList
        {
            get { return pointList; }
            set
            {
                if (value != null)
                {
                    pointList = value;
                }
                else
                {
                    throw new ArgumentNullException("The VECollection List can't be equal null!");
                }
            }
        }


        /// <summary>
        /// The line color or transparency for a polyline or polygon.
        /// </summary>
        public VEColor Color
        {
            get { return color; }
            set { color = value; }
        }

        /// <summary>
        /// The line width for a polyline or polygon.
        /// </summary>
        public byte Width
        {
            get { return width; }
            set { width = value; }
        }

        /// <summary>
        /// Required by Visual Studio
        /// </summary>
        protected VEPolyline() { }

        /// <summary>
        /// Initializes a new instance of the VEPolyline class.
        /// </summary>
        /// <param name="polyLine">A GeoRss PolyLine string. The latitude longitude values separeted by space</param>
        /// <param name="color">The color of the polyline</param>
        /// <param name="width">The width of the polyline</param>
        public VEPolyline(String polyLine, VEColor color, byte width)
        {
            this.PointList = Parser.ParsePolyLine(polyLine);
            // Make sure that the georss polyline string was well-formed
            if (this.pointList == null)
            {
                throw new ArgumentException("The GeoRss PolyLine string wasn't well-formed!");
            }
            this.color = color;
            this.width = width;
        }

        /// <summary>
        /// Initializes a new instance of the VEPolyline class.
        /// </summary>
        /// <param name="polyLine">A GeoRss PolyLine string. The latitude longitude values separeted by space</param>
        /// <param name="title">The string to display in the title field of the enhanced preview.</param>
        /// <param name="color">The color of the polyline</param>
        /// <param name="width">The width of the polyline</param> 
        public VEPolyline(String polyLine,String title, VEColor color, byte width)
        {
            this.PointList = Parser.ParsePolyLine(polyLine);
            // Make sure that the georss polyline string was well-formed
            if (this.pointList == null)
            {
                throw new ArgumentException("The GeoRss PolyLine string wasn't well-formed!");
            }
            this.Title = title;
            this.color = color;
            this.width = width;
        }



        /// <summary>
        /// 
        /// </summary>
        /// <param name="location"></param>
        public void AddPoint(VELatLong location)
        {
            this.pointList.Add(location);
        }


        /// <summary>
        /// 
        /// </summary>
        /// <example>
        /// var polyline=new VEShape(VEShapeType.Polyline,[new VELatLong(41.667885,-70.074621),new VELatLong(41.668411,-70.074743), ..... ]);
        /// polyline.SetLineColor(new VEColor(255, 0, 0, 0.7));
        /// polyline.SetLineWidth(7);
        /// polyline.SetCustomIcon('');
        /// polyline.SetTitle('Flex');
        /// polyline.SetDescription('');
        /// </example>
        /// <returns></returns>
        public override string ToJson()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendFormat("var polyline=new VEShape(VEShapeType.Polyline,{0});", this.pointList.ToJson());
            sb.AppendFormat("polyline.SetLineColor({0});polyline.SetLineWidth({1});", this.Color.ToJson(), this.width);
            sb.AppendFormat("polyline.SetCustomIcon('{0}');polyline.SetTitle('{1}');polyline.SetDescription('{2}');", this.CustomIcon,this.Title,this.Description);
            return sb.ToString();
        }


        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {
            return "";
        }


        /// <summary>
        /// Validate required shape's properties
        /// </summary>
        /// <returns></returns>
        public bool IsVEShapeValid()
        {
            return (this.pointList.Count >= 2);
        }
    }
}
