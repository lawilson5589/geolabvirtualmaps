using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Web.Configuration;
using System.Diagnostics;
using System.Data.SqlClient;

namespace GeoLabLibrary
{
    /// <summary>
    /// Summary description for Log
    /// </summary>
    public class Log
    {
        [Conditional("TRACE"), Conditional("DEBUG")]
        public static void Error(String error)
        {

            String connectionString = WebConfigurationManager.ConnectionStrings["geolab_mdt2_capeConnectionString"].ConnectionString;
            System.Diagnostics.Debug.WriteLine(error);
            System.Diagnostics.Trace.WriteLine(error);
            SqlConnection conn = null;
            try
            {
                conn = new SqlConnection(connectionString);
                SqlCommand cmd = new SqlCommand("sp_InsertErrorToTable", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.Add(new SqlParameter("@Message", SqlDbType.Text));
                cmd.Parameters["@Message"].Value = HttpUtility.HtmlEncode(error);

                conn.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.ToString());
                System.Diagnostics.Trace.WriteLine(ex.ToString());
            }
            finally
            {
                if (conn != null)
                    conn.Close();

            }

        }
        [Conditional("TRACE"), Conditional("DEBUG")]
        public static void Error(Exception exception)
        {
            System.Diagnostics.Debug.WriteLine(exception.ToString());
            System.Diagnostics.Trace.WriteLine(exception.ToString());

            String connectionString = WebConfigurationManager.ConnectionStrings["geolab_mdt2_capeConnectionString"].ConnectionString;

            SqlConnection conn = null;
            try
            {
                conn = new SqlConnection(connectionString);
                SqlCommand cmd = new SqlCommand("sp_InsertErrorToTable", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.Add(new SqlParameter("@Message", SqlDbType.Text));
                cmd.Parameters["@Message"].Value = HttpUtility.HtmlEncode(exception.ToString());

                conn.Open();
                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.ToString());
                System.Diagnostics.Trace.WriteLine(ex.ToString());
            }
            finally
            {
                if (conn != null)
                    conn.Close();

            }

        }
    }
}