using System;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Web.Script.Services;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using System.Web.Configuration;
using Geolab;
using Microsoft.Security.Application;
using System.Web.UI.WebControls;
using VELibrary;


namespace Geolab
{

    /// <summary>
    /// Summary description for CapeCod_FireDeptartment
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.None)]
    [System.Web.Script.Services.ScriptService]
    public class CapeCod_FireDeptartment : System.Web.Services.WebService
    {
  
        public CapeCod_FireDeptartment()
        {
            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public string FireStation(String mapID)
        {
            StringBuilder sb = new StringBuilder();
            switch (mapID)
            {
                case "FireDepartments_Cape":
                    
                    SqlConnection sqlconnection = null;
                    SqlCommand sqlcommand = null;
                    String connectionString = ConnectionString.CapeCod;
                    try
                    {
                        sqlconnection = new SqlConnection(ConnectionString.CapeCod);
                        sqlcommand = new SqlCommand("sp_SelectVEPushPins_Brewster", sqlconnection);

                        sqlcommand.CommandType = CommandType.StoredProcedure;
                        sqlcommand.Parameters.Add(new SqlParameter("@MapID", SqlDbType.VarChar));
                        sqlcommand.Parameters["@MapID"].Value = mapID;
                        sqlconnection.Open();
                        SqlDataReader sqldatareader = sqlcommand.ExecuteReader();
                        if (sqldatareader.HasRows)
                        {
                            sb.AppendFormat("/*{0}*/", mapID); // BEGIN
                            sb.Append("collection=new Array();");
                            while (sqldatareader.Read()) // Add elements to array
                            {
                                VEPushpin pin = new VEPushpin(
                                    new VELatLong(sqldatareader[VEShape_DbColumnNames.GeoRssPoint].ToString()),
                                    sqldatareader[VEShape_DbColumnNames.Title].ToString(),
                                    sqldatareader[VEShape_DbColumnNames.Description].ToString(),
                                    sqldatareader[VEShape_DbColumnNames.IconUrl].ToString()
                                );
                                if (pin is VEPushpin) sb.AppendFormat("Array.add(collection, {0});", pin.ToJson());
                            }
                        }
                        else
                        {
                            sb.Append("/* Empty */");
                        }
                    }
                    catch (SqlException sqlex)
                    {
                        sb = new StringBuilder();
                        sb.AppendFormat("/* Sql error : {0} */", sqlex.Message);
                        System.Diagnostics.Debug.WriteLine(sqlex.Message);
                    }
                    catch (Exception ex)
                    {
                        sb = new StringBuilder();
                        sb.AppendFormat("/* Error : {0} */", ex.ToString());
                        System.Diagnostics.Debug.WriteLine(ex.Message);
                    }
                    finally
                    {
                        if (sqlconnection != null) sqlconnection.Close();
                    }
                    break;
                default:
                    sb.Append("/*Error. Unknown route.*/");
                    break;
            }
            return sb.ToString();
        }

    }

}