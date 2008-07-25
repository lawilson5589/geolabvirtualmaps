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
    /// The AFileReader combains all Javascript files to one to speed the loading time.
    /// </summary>
    public abstract class AFileReader
    {

        public void ProcessJavaScriptFiles(ref HttpContext context, String[] jsfiles)
        {

             // Instead of many files
            //<asp:ScriptReference Path="~/js/core/MapHashtable.js" />
            //<asp:ScriptReference Path="~/js/core/MapElements.js" />
            //<asp:ScriptReference Path="~/js/core/MapColors.js" />
            //<asp:ScriptReference Path="~/js/core/MapDialogBox.js" />
            //<asp:ScriptReference Path="~/js/core/MapHelp.js" />
            //<asp:ScriptReference Path="~/js/core/MapNavigation.js" />               
            //<asp:ScriptReference Path="~/js/core/MapGeoRss.js" />
            //<asp:ScriptReference Path="~/js/core/MapPushpins.js" />
            //<asp:ScriptReference Path="~/js/core/MapPolyLines.js" />
            //<asp:ScriptReference Path="~/js/core/MapVehicle.js" />
            
            StringBuilder sb = new StringBuilder(60000);

            foreach (String path in jsfiles)
            {
                StreamReader reader = null;
                try
                {
                    reader = new StreamReader(context.Server.MapPath(path));
                    while (!reader.EndOfStream)
                    {
                        sb.AppendLine(reader.ReadLine());
                    }
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Trace.WriteLine(ex.ToString());
                }
                finally
                {
                    if (reader is StreamReader) reader.Close();
                }
            }

            //context.Response.AppendHeader("Content-Length", sb.Length.ToString());
            String release = context.Request.QueryString["release"];
            if (release != null && release.Equals("true"))
            {
                //context.Response.TransmitFile(context.Server.MapPath("/~js/core/cache/MapRelease.js"));
            }
            else
            {
            }
            context.Response.Write(sb.ToString());
            context.Response.Write(";if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();");
            sb = null;

        }

        /// <summary>
        /// Combain css files to one bigger file to improve browser perfomance
        /// </summary>
        /// <param name="context">reference to handler's http context </param>
        /// <param name="cssfiles">File server paths</param>
        public void ProcessCssFiles(ref HttpContext context, String[] cssfiles)
        {

            context.Response.ContentType = "text/javascript";
            context.Response.BufferOutput = true;

            String release = context.Request.QueryString["release"];
            StringBuilder sb = new StringBuilder(60000);

            foreach (String path in cssfiles)
            {
                StreamReader reader = null;
                try
                {
                    new StreamReader(context.Server.MapPath(path));
                    while (!reader.EndOfStream)
                    {
                        sb.AppendLine(reader.ReadLine());
                    }
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Trace.WriteLine(ex.ToString());
                }
                finally
                {
                    if (reader is StreamReader) reader.Close();
                }
            }

            context.Response.AppendHeader("Content-Length", sb.Length.ToString());
            if (release.Equals("true"))
            {
                //context.Response.TransmitFile(context.Server.MapPath("~/App_Themes/VE_Theme/CssRelease.css"));
            }
            else
            {
            }
            context.Response.Write(sb.ToString());
           
        }
    }
}