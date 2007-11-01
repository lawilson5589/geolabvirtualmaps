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
    public sealed class Avl_WebService : AGPS_DbColumnNames, IHttpHandler
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
                    switch (value)
                    {
                        // Valid names
                        case "CapeCod": 
                            this.info.CustomIcon = "/images/map_vehicles/bus_024.gif";
                            this.info.Title = "Cape Cod Transportation";
                            // Here sp_SelectAVL_ is prefix for every AVL stored procedure
                            this.storedProcedureName = "sp_SelectAVL_CapeCod";
                            break;
                        case "Bridgew":
                            this.info.CustomIcon = "/images/map_vehicles/bus_024.gif";
                            this.info.Title = "Bridgewater Transit";
                            this.storedProcedureName = "sp_SelectAVL_Bridgew";
                            break;
                        case "GeoLab":
                            this.info.CustomIcon = "/images/map_vehicles/bus_024.gif";
                            this.info.Title = "GeoGraphics Lab";
                            this.storedProcedureName = "sp_SelectAVL_GeoLab";
                            break;
                        case "SouthEastern":
                            this.info.CustomIcon = "/images/map_vehicles/ambulance_024.gif";
                            this.info.Title = "Southeastern MA Emergency";
                            this.storedProcedureName = "sp_SelectAVL_SouthEastern";
                            break;
                        case "Framingham":
                            this.info.CustomIcon = "/images/map_vehicles/bus_024.gif";
                            this.info.Title = "MWRTA Transportation";
                            this.storedProcedureName = "sp_SelectAVL_Framingham";
                            break;
                        case "Ferries":
                            this.info.CustomIcon = "/images/map_vehicles/bus_024.gif";
                            this.info.Title = "Framingham Transportation";
                            this.storedProcedureName = "sp_SelectAVL_Framingham";
                            break;
                        case "BusyBeeMWRTA":
                            this.info.CustomIcon = "/images/map_vehicles/Bus_20_Blue.png";
                            this.info.Title = "MWRTA Paratransit Transportation";
                            this.storedProcedureName = "sp_SelectAVL_BusyBeeMWRTA";
                            break;
                        default:
                            break;
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
            SqlConnection sqlconnection = null;
            SqlCommand sqlcommand = null;
            SqlCommand sqlcommand2 = null;


            try
            {
                this.StoredProcedureName = AntiXss.UrlEncode(context.Request.QueryString["ID"]);

                if (!this.storedProcedureName.Equals(String.Empty))
                {
                    sqlconnection = new SqlConnection(connectionString);
                    sqlcommand = new SqlCommand(this.storedProcedureName, sqlconnection);
                    sqlcommand.CommandType = CommandType.StoredProcedure;
                    sqlconnection.Open();
                    StringBuilder sb = new StringBuilder("collection=new Array();");
                    SqlDataReader sqldatareader = sqlcommand.ExecuteReader();
                    
                    String url = context.Request.RawUrl;
                    this.info.GeoCoding = url.Contains("GeoCoding=true");
                    this.info.OnlyFirstAddress = url.Contains("OnlyFirstAddress=true");
                    SqlVECollectionReader.RetrieveVehicleData(ref sqldatareader, ref sb, this.info);
                    sqlconnection.Close();

                    if (this.StoredProcedureName.Equals("sp_SelectAVL_Framingham"))
                    {
                        this.StoredProcedureName = "BusyBeeMWRTA";
                        sqlcommand2 = new SqlCommand(this.StoredProcedureName, sqlconnection);
                        sqlcommand2.CommandType = CommandType.StoredProcedure;
                        sqlconnection.Open();
                        SqlDataReader sqldatareader2 = sqlcommand2.ExecuteReader();
                        SqlVECollectionReader.RetrieveVehicleData(ref sqldatareader2, ref sb, this.info);
                        this.StoredProcedureName = String.Empty;
                    }
                    context.Response.Write(sb.ToString());
                }
                else
                {
                    context.Response.Write("/* The query name is invalid */");
                }
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

            finally
            {
                if (sqlconnection != null) sqlconnection.Close();
            }


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