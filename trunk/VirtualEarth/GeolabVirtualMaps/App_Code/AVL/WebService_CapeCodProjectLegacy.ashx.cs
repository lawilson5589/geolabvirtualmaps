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
    public sealed class Avl_CapeCodProjectLegacy : AGPS_DbColumnNames, IHttpHandler
    {
        private String storedProcedureName = String.Empty;
        private String connectionString = String.Empty;

        private VEVehicleInfoFlags info = new VEVehicleInfoFlags();

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
                        case "CapeCodPartners":
                            // Here sp_SelectAVL_ is prefix for every AVL stored procedure
                            this.storedProcedureName = "sp_SelectAVL_CapeCodePartners";
                            this.info.CustomIcon = "images/map_vehicles/bus_024.gif";
                            this.info.Title = "Cape Cod Transportation";
                            break;
                        case "CapeCodFerries":
                            this.info.CustomIcon = "images/map_vehicles/intercity_bus.gif";
                            this.info.Title = "Cape Cod Transportation";
                            // Here sp_SelectAVL_ is prefix for every AVL stored procedure
                            this.storedProcedureName = "sp_SelectAVL_CapeCodFerries";
                            break;
                        case "CapeCod":
                            this.info.CustomIcon = "images/map_vehicles/bus_024.gif";
                            this.info.Title = "Cape Cod Transportation";
                            this.storedProcedureName = "sp_SelectAVL_CapeCod";
                            break;
                        default:
                            break;
                    }

                }
            }
        }


        public void ProcessRequest(HttpContext context)
        {
            context.Response.CacheControl = "no-cache";
            context.Response.AddHeader("Pragma", "no-cache");
            context.Response.Expires = -1;
            context.Response.ContentType = "text/javascipt";
            String url = context.Request.RawUrl;
            this.info.GeoCoding = url.Contains("GeoCoding=true");
            this.info.OnlyFirstAddress = url.Contains("OnlyFirstAddress=true");

            SqlConnection sqlconnection = null;
            SqlCommand sqlcommand = null;

            StringBuilder sb = new StringBuilder("collection=new Array();");
            try
            {

                this.StoredProcedureName = "CapeCodPartners";
                this.connectionString = ConnectionString.CapeCodLegacy;
                this.RetrieveData(ref sb);
                this.StoredProcedureName = String.Empty;

                this.StoredProcedureName = "CapeCod";
                this.connectionString = ConnectionString.Geolab_mdt2_cape;
                this.RetrieveData(ref sb);
                this.StoredProcedureName = String.Empty;


                this.StoredProcedureName = "CapeCodFerries";
                this.connectionString = ConnectionString.Geolab_mdt2_cape;
                this.RetrieveData(ref sb);

                context.Response.Write(sb.ToString());
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

        private bool RetrieveData(ref StringBuilder sb)
        {
            SqlConnection sqlconnection = null;
            SqlCommand sqlcommand = null;
            try
            {
                sqlconnection = new SqlConnection(connectionString);
                sqlcommand = new SqlCommand(this.storedProcedureName, sqlconnection);
                sqlcommand.CommandType = CommandType.StoredProcedure;
                sqlconnection.Open();

                SqlDataReader sqldatareader = sqlcommand.ExecuteReader();
                SqlVECollectionReader.RetrieveVehicleData(ref sqldatareader, ref sb, this.info);
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
            return true;
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