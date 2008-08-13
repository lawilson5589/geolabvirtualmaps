using System;
using System.Web;
using System.Text;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.IO;
using Microsoft.Security.Application;
using net.mappoint.staging;


namespace Geolab
{
    /// <summary>
    /// Summary description for AWebService
    /// </summary>
    public sealed class HistoricDataService : AGPS_DbColumnNames, IHttpHandler
    {
        private static String connectionString = ConnectionString.Geolab_mdt2_cape;
        private VEVehicleInfoFlags info = new VEVehicleInfoFlags(); 
        private String storedProcedureName = String.Empty;
        public String StoredProcedureName
        {
            get { return this.storedProcedureName; }
            set
            {

                if (value != String.Empty)
                {
                    String val = value.ToString();
                    // Valid names
                    if (val.PadRight(4) == "GEO-")
                    {
                        this.info.CustomIcon = "images/map_vehicles/bus_024.gif";
                        this.info.Title = "Cape Cod Transportation";
                        // Here sp_SelectAVL_ is prefix for every AVL stored procedure
                        this.storedProcedureName = "sp_SelectAVL_CapeCod";
                    }   
                }
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public void ProcessRequest(HttpContext context)
        {
            context.Response.CacheControl = "no-cache";
            context.Response.AddHeader("Pragma", "no-cache");
            context.Response.Expires = -1;
            context.Response.ContentType = "text/ja";
            SqlConnection sqlcon = null;
            String busid = AntiXss.UrlEncode(context.Request.QueryString["ID"]);
            String geolabid = AntiXss.UrlEncode(context.Request.QueryString["GeolabID"]);
            String startdate = AntiXss.UrlEncode(context.Request.QueryString["StartDate"]);
            startdate = fixstring(startdate);
            String enddate = AntiXss.UrlEncode(context.Request.QueryString["EndDate"]);
            enddate = fixstring(enddate);
            String sqlquery;
            try
            {
                DateTime validstartdate = DateTime.Parse(startdate);
                DateTime validenddate = DateTime.Parse(enddate);
                if ((busid.Length == 10) && (geolabid.Length == 7))
                {
                    sqlquery = String.Format("Select [GeolabID] AS [GeolabID],[Datetime],[Latitude],[Longitude],[LatLonAccuracy],[PositionSpeed],[PositionHeading],[SatelliteNumber],[SignalStrength],[BatteryLevel], '' AS [FrouteName], [RouteName],[BusID], [ModifiedLast], [DateModified], [TimetoGrey], [CustomIcon] FROM dbo.tbl_SN_{0} JOIN PhoneRoutes AS P ON P.GeolabID = '{1}' WHERE [Datetime] BETWEEN '{2}' AND '{3}' ORDER BY Datetime ASC", busid, geolabid, startdate, enddate);
                    sqlcon = new SqlConnection(connectionString);
                    sqlcon.Open();
                    SqlDataReader sqlreader;
                    SqlCommand sqlcomd1 = new SqlCommand(sqlquery, sqlcon);
                    sqlreader = sqlcomd1.ExecuteReader(CommandBehavior.CloseConnection);
                    this.StoredProcedureName = AntiXss.UrlEncode(context.Request.QueryString["ID"]);
                    StringBuilder sb = new StringBuilder("collection=new Array();");
                    SqlVECollectionReader.RetrieveVehicleData(ref sqlreader, ref sb, this.info);

                    context.Response.Write(sb.ToString());
                }
                else
                {
                    context.Response.Write("/* The query name is invalid */");
                }


                //else
                //{
                //    context.Response.Write("/* The query name is invalid */");
                //}
                context.Response.Flush();
            }

            catch (SqlException sqlex)
            {
                System.Diagnostics.Trace.WriteLine(sqlex.Message);

            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.WriteLine(ex.Message);
            }
            catch
            {
                context.Response.Write("/* The query name is invalid */");
                context.Response.Flush();
            }

            finally
            {
                if (sqlcon != null) sqlcon.Close();
            }


        }

        private string fixstring(string unformattedstring)
        {
            unformattedstring = unformattedstring.Replace("%2f", "/");
            unformattedstring = unformattedstring.Replace("%20", " ");
            unformattedstring = unformattedstring.Replace("%3a", ":");
            return (unformattedstring);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }

    }
}