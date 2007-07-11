// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Text;
using System.Windows.Forms;
using VELibrary.Properties;
using System.Runtime.InteropServices;

namespace VELibrary.Controls
{
    [ComVisible(true)]
    public sealed partial class VEMapControl : UserControl
    {
        public VEMapControl()
        {
            InitializeComponent();
            this.webBrowser.ObjectForScripting = this;
        }


        #region CONSTANTS
        /// <summary>
        /// Max zoom level allowed for VEMap
        /// </summary>
        public const int MAX_ZOOM_LEVEL = 19;

        /// <summary>
        /// Min zoom level allowed for VEMap
        /// </summary>
        public const int MIN_ZOOM_LEVEL = 1;

        #endregion


        /// <summary>
        /// Flag indicating that page is loaded and JS function can be executed
        /// </summary>
        private bool isPageLoaded = false;

        /// <summary>
        /// The instance of the browser
        /// </summary>
        [Browsable(false)]
        public System.Windows.Forms.WebBrowser WebBrowser
        {
            get { return webBrowser; }
            set { webBrowser = value; }
        }


        /// <summary>
        /// The URL of the current document
        /// </summary>
        private Uri url = null;

        /// <summary>
        /// Gets or sets the URL of the current document
        /// </summary>
        [Description("Gets or sets the URL of the current document"), Browsable(true), Category("VEMap")]
        public Uri Url
        {
            get { return url; }
            set { url = value; this.webBrowser.Url = value; }
        }

        /// <summary>
        /// JS the  variable name which holds VEMap objects
        /// </summary>
        private String map = "map";

        /// <summary>
        /// JS the  variable name which holds VEMap objects
        /// </summary>
        [Description("JS the  variable name which holds VEMap objects"), Browsable(true), Category("VEMap")]
        public String Map
        {
            get { return map; }
            set { map = value; }
        }

        /// <summary>
        /// Specifies the latitude of a single point on the globe.
        /// </summary>
        private double latitude = 41.783896;

        /// <summary>
        /// Specifies the latitude of a single point on the globe.
        /// </summary>
        [Description("Specifies the latitude of a single point on the globe"), Browsable(true), Category("VEMap")]
        public double Latitude
        {
            get { return this.latitude; }
            set
            {
                if (value > VELatLong.MIN_LATLONG && value < VELatLong.MAX_LATLONG)
                {
                    this.latitude = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("Valid values range from -180 through 180.");
                }
            }
        }

        /// <summary>
        /// Specifies the longitude of a single point on the globe.
        /// </summary>
        private double longitude = -70.732356;

        /// <summary>
        /// Specifies the longitude of a single point on the globe.
        /// </summary>
        [Description("Specifies the longitude of a single point on the globe."), Browsable(true), Category("VEMap")]
        public double Longitude
        {
            get { return longitude; }
            set
            {
                if (value > VELatLong.MIN_LATLONG && value < VELatLong.MAX_LATLONG)
                {
                    this.longitude = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("Valid values range from -180 through 180.");
                }
            }
        }

        /// <summary>
        /// The zoom level for the map. 
        /// </summary>
        private int zoomLevel = 9;

        /// <summary>
        /// The zoom level for the map. 
        /// </summary>
        [Description("The zoom level for the map. Valid values range from 1 through 19"), Browsable(true), Category("VEMap")]
        public int ZoomLevel
        {
            get { return this.zoomLevel; }
            set
            {
                if (value >= MIN_ZOOM_LEVEL && value <= MAX_ZOOM_LEVEL)
                {
                    this.zoomLevel = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("Valid values range from 1 through 19.");
                }
            }
        }

        /// <summary>
        /// The style of the map.
        /// </summary>
        private VEMapStyle mapStyle = VEMapStyle.Road;

        /// <summary>
        /// The style of the VE map.
        /// </summary>
        [Description("The style of the VE map"), Browsable(true), Category("VEMap")]
        public VEMapStyle MapStyle
        {
            get { return mapStyle; }
            set { mapStyle = value; }
        }

        /// <summary>
        /// A VEMiniMapSize Enumeration that specifies the mini map size.
        /// </summary>
        private VEMiniMapSize miniMapSize = VEMiniMapSize.Small;

        /// <summary>
        /// A VEMiniMapSize Enumeration that specifies the mini map size
        /// </summary>
        [Description(" A VEMiniMapSize Enumeration that specifies the mini map size"), Browsable(true), Category("VEMiniMap")]
        public VEMiniMapSize MiniMapSize
        {
            get { return miniMapSize; }
            set
            {
                miniMapSize = value;
            }
        }

        /// <summary>
        /// A flag that specifies the mini map visibility
        /// </summary>
        private bool miniMapVisible = true;

        /// <summary>
        /// A flag that specifies the mini map visibility
        /// </summary>
        [Description(" A flag that specifies the mini map visibility"), Browsable(true), Category("VEMiniMap")]
        public bool MiniMapVisible
        {
            get { return miniMapVisible; }
            set
            {
                if (value)
                {
                    this.ShowMiniMap();
                }
                else
                {
                    this.HideMiniMap();
                }
                this.miniMapVisible = value;
            }
        }

        /// <summary>
        /// The amount to move the map horizontally, in pixels
        /// </summary>
        private byte deltaX = 5;

        /// <summary>
        /// The amount to move the map horizontally, in pixels
        /// </summary>
        [Description("The amount to move the map horizontally, in pixels"), Browsable(true), Category("VEMap")]
        public byte DeltaX
        {
            get { return deltaX; }
            set { deltaX = value; }
        }

        /// <summary>
        /// The amount to move the map vertically, in pixels
        /// </summary>
        private byte deltaY = 5;
        
        /// <summary>
        /// The amount to move the map vertically, in pixels
        /// </summary>
        [Description("The amount to move the map vertically, in pixels"), Browsable(true), Category("VEMap")]
        public byte DeltaY
        {
            get { return deltaY; }
            set { deltaY = value; }
        }

        /// <summary>
        /// Invoke JS function
        /// </summary>
        /// <param name="functionName">The JS function name</param>
        public void InvokeScript(String functionName)
        {
            if (this.isPageLoaded)
                this.webBrowser.Document.InvokeScript(functionName);
        }

        /// <summary>
        /// Execute Javascript in-build function eval(command)
        /// </summary>
        /// <param name="command">JS code</param>
        public void Eval(String command)
        {
            if (this.isPageLoaded)
                this.webBrowser.Document.InvokeScript(JSMethod.Eval, new Object[] { command });
        }

        /// <summary>
        /// The wrapper for JS setTimeout().This method of the Window object schedules a piece of 
        /// JavaScript code to be run at some specified time in the future.
        /// </summary>
        /// <param name="command"></param>
        /// <param name="millisecods"></param>
        public void SetTimeout(String command, int millisecods)
        {
            //if (this.isPageLoaded)
            this.Eval(String.Format("setTimeout(\"{0}\",{1})", command, millisecods));
        }

        /// <summary>
        /// Increase zoom level by a factor of 1
        /// </summary>
        public void ZoomIn()
        {
            if (this.zoomLevel < MAX_ZOOM_LEVEL)
            {
                this.Eval(String.Format("if({0}){0}.ZoomIn()", this.map));
            }
        }

        /// <summary>
        /// Decrease zoom level by a factor of 1
        /// </summary>
        public void ZoomOut()
        {
            if (this.zoomLevel > MIN_ZOOM_LEVEL)
            {
                this.Eval(String.Format("if({0}){0}.ZoomOut()", this.map));
            }
        }

        /// <summary>
        /// Set zoom level by a factor
        /// </summary>
        /// <param name="zoomlevel">A factor of zoom level</param>
        public void SetZoomLevel(int zoomlevel)
        {
            if (zoomlevel >= MIN_ZOOM_LEVEL && zoomlevel <= MAX_ZOOM_LEVEL)
            {
                this.Eval(String.Format("if({0}){0}.SetZoomLevel({1})", this.map, zoomlevel));
            }

        }

        /// <summary>
        /// Sets the style of the map.
        /// </summary>
        /// <param name="style">The style of map you want to display. You can specify the VEMapStyle Enumeration</param>
        public void SetMapStyle(VEMapStyle style)
        {
            this.Eval(String.Format("if({0}){0}.SetMapStyle('{1}')", this.map, (char)style));
        }

        /// <summary>
        /// Show the default user interface for controlling the map (the compass and the zoom control).
        /// </summary>
        public void ShowDashboard()
        {
            this.Eval(String.Format("if({0}){0}.ShowDashboard()", this.map));
        }

        /// <summary>
        /// Hides the default user interface for controlling the map (the compass and the zoom control).
        /// </summary>
        public void HideDashboard()
        {
            this.Eval(String.Format("if({0}){0}.HideDashboard()", this.map));
        }

        /// <summary>
        /// Centers the map to a specific latitude and longitude.
        /// </summary>
        /// <param name="latitude"></param>
        /// <param name="longitude"></param>
        public void SetCenter(double latitude, double longitude)
        {
            this.Eval(String.Format("if({0}){0}.SetCenter(new VELatLong({1},{2}));", this.map, latitude, longitude));
        }

        /// <summary>
        /// Centers the map to a specific latitude and longitude after specific time.
        /// </summary>
        /// <param name="latitude"></param>
        /// <param name="longitude"></param>
        /// <param name="millisecods"></param>
        public void SetCenterDelayed(double latitude, double longitude, int millisecods)
        {
            this.SetTimeout(String.Format("{0}.SetCenter(new VELatLong({1},{2}));", latitude, longitude), millisecods);
        }

        /// <summary>
        /// Centers the map to a specific latitude and longitude and sets the zoom level.
        /// </summary>
        /// <param name="latitude">Specifies the latitude of a single point on the globe.</param>
        /// <param name="longitude">Specifies the longitude of a single point on the globe.</param>
        /// <param name="zoom">The zoom level for the map. Valid values range from 1 through 19.</param>
        public void SetCenterAndZoom(double latitude, double longitude, int zoom)
        {
            this.Eval(String.Format("if({0}){0}.SetCenterAndZoom(new VELatLong({1},{2}),{3});", this.map, latitude, longitude, zoom));
        }

        /// <summary>
        /// Deletes all shapes in all layers, leaving empty layers behind.
        /// </summary>
        public void DeleteAllShapes()
        {
            this.Eval(String.Format("if({0}){0}.DeleteAllShapes();", this.map));
        }

        /// <summary>
        /// Deletes all shape layers, along with any shapes within the layers. 
        /// </summary>
        public void DeleteAllShapeLayers()
        {
            this.Eval(String.Format("if({0}){0}.DeleteAllShapeLayers()", this.map));
        }

        /// <summary>
        /// Hides all pushpins, pushpin layers, and search results on the map. Also removes the route from the map, if one is displayed.
        /// </summary>
        public void Clear()
        {
            this.Eval(String.Format("if({0}){0}.Clear()", this.map));
        }

        /// <summary>
        /// Displays the mini map at the specified offset from the top left corner of the screen.
        /// </summary>
        public void ShowMiniMap()
        {
            this.Eval(String.Format("if({0}){0}.SetMapMode(VEMapMode.Mode2D); {0}.ShowMiniMap();", this.map));
        }

        /// <summary>
        /// Displays the mini map at the specified offset from the top left corner of the screen.
        /// </summary>
        /// <param name="xoffset">The x coordinate offset as a number of pixels from the top left corner of the screen</param>
        /// <param name="yoffset">The y coordinate offset as a number of pixels from the top left corner of the screen</param>
        public void ShowMiniMap(int xoffset, int yoffset)
        {
            this.Eval(String.Format("if({0}){0}.SetMapMode(VEMapMode.Mode2D); {0}.ShowMiniMap({1}, {2});", this.map, xoffset, yoffset));
        }

        /// <summary>
        /// Displays the mini map at the specified offset from the top left corner of the screen.
        /// </summary>
        /// <param name="xoffset">The x coordinate offset as a number of pixels from the top left corner of the screen</param>
        /// <param name="yoffset">The y coordinate offset as a number of pixels from the top left corner of the screen</param>
        /// <param name="minimapsize">A VEMiniMapSize Enumeration that specifies the mini map size. Possible values are VEMiniMapSize.Small and VEMiniMapSize.Large. Optional. Default value is VEMiniMapSize.Small.</param>
        public void ShowMiniMap(int xoffset, int yoffset, VEMiniMapSize minimapsize)
        {
            this.Eval(String.Format("if({0}){0}.SetMapMode(VEMapMode.Mode2D); {0}.ShowMiniMap({1}, {2}, {3});", this.map, xoffset, yoffset));
        }

        /// <summary>
        /// Hides the mini map from view
        /// </summary>
        public void HideMiniMap()
        {
            this.Eval(String.Format("if({0}){0}.HideMiniMap()", this.map));
        }

        /// <summary>
        /// Sets the distance unit (kilometers or miles) for the map scale
        /// </summary>
        /// <param name="unit">A VEDistanceUnit Enumeration value that specifies either miles or kilometers</param>
        public void SetScaleBarDistanceUnit(VEDistanceUnit unit)
        {
            this.Eval(String.Format("if({0}){0}.SetScaleBarDistanceUnit()", this.map));
        }

        /// <summary>
        /// Move the map up vertically
        /// </summary>
        public void MoveMapUp()
        {
            this.Eval(String.Format("if({0}){0}.Pan(0,{1});", this.map, -this.deltaY));
        }

        /// <summary>
        /// Move the map up vertically
        /// </summary>
        public void MoveMapDown()
        {
            this.Eval(String.Format("if({0}){0}.Pan(0,{1});", this.map, this.deltaY));
        }

        /// <summary>
        /// Move the map left horizontally
        /// </summary>
        public void MoveMapRight()
        {
            this.Eval(String.Format("if({0}){0}.Pan({1},0);", this.map, this.deltaX));
        }
        /// <summary>
        /// Move the map left horizontally
        /// </summary>
        public void MoveMapLeft()
        {
            this.Eval(String.Format("if({0}){0}.Pan({1},0);", this.map, -this.deltaX));
        }

        /// <summary>
        /// Occurs when the WebBrowser control finishes loading a document.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void webBrowser_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            this.isPageLoaded = true;
        }

        /// <summary>
        /// Final initialization step: when the VE script executed above finishes loading.  Put any
        /// stuff here that needs to be done after the map is initialized (e.g. adding new pushpins).
        /// </summary>
        public void scriptLoadCompleted()
        {
            //map.vemapcontrol.GetCenterLatitude()
        }

        /// <summary>
        /// VE Map callback telling us we have a new scroll position
        /// </summary>
        /// <param name="lat"></param>
        /// <param name="lon"></param>
        /// <param name="zoom"></param>
        public void mapPositionChange(double lat, double lon, int zoom)
        {
            this.Latitude = lat;
            this.Longitude = lon;
            this.ZoomLevel = zoom;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="vemapcontrol"></param>
        /// <param name="args"></param>
        public delegate void WebBrowserStateHandler(VEMapControl vemapcontrol, EventArgs args);
    }
}
