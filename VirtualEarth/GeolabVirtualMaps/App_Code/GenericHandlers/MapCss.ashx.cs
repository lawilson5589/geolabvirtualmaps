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
    /// The MapCss combains all Map Css files to one to speed the loading time.
    /// </summary>
    public class MapCss : AFileReader, IHttpHandler
    {
        private readonly String[] CssFiles = { 
            "~/App_Themes/VE_Theme/MapContainers.css", 
            "~/App_Themes/VE_Theme/MapAccordionMenu.css", 
            "~/App_Themes/VE_Theme/MapDialogWindow.css", 
            "~/App_Themes/VE_Theme/MapLegend.css", 
            "~/App_Themes/VE_Theme/MapShapes.css", 
            "~/App_Themes/VE_Theme/MapAccordionMenu.css", 
            "~/App_Themes/VE_Theme/MapToolbar.css"
        };

        public  void ProcessRequest(HttpContext context)
        {

            context.Response.ContentType = "text/css";
            context.Response.BufferOutput = true;
            this.ProcessCssFiles(ref context, CssFiles);     
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