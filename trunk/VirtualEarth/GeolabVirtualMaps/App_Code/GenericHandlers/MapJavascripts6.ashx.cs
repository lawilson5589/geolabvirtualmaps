using System;
using System.Web;
using System.Text;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.IO;
using Microsoft.Security.Application;



namespace Geolab
{

    /// <summary>
    /// The MapJavascripts combains all Javascript files to one to speed the loading time.
    /// </summary>
    public class MapJavaScripts6 : AFileReader, IHttpHandler
    {
        private readonly String[] JsFiles = { 
            "~/js/core/MapHashtable.js", 
            "~/js/core/MapElements.js", 
            "~/js/core/MapColors.js", 
            "~/js/core/MapDialogBox.js", 
            "~/js/core/MapHelp.js", 
            "~/js/core/MapNavigation6.js", 
            "~/js/core/MapGeoRss.js", 
            "~/js/core/MapPushpinLayer.js", 
            "~/js/core/MapPolyLineLayer.js",
            "~/js/core/MapVehicle.js"
        };

        public  void ProcessRequest(HttpContext context)
        {
            
            context.Response.ContentType = "text/javascript";
            context.Response.BufferOutput = true;
            this.ProcessJavaScriptFiles(ref context, JsFiles);     
        }

        public bool IsReusable
        {
            get
            {
                return true;
            }
        }

    }
}