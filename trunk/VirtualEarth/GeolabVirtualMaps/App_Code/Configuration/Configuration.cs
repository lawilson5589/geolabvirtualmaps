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

/// <summary>
/// The web app ConnectionStrings
/// </summary>
public class ConnectionString
{
    public static String Geolab_mdt2_cape
    {
        get
        {
            return WebConfigurationManager.ConnectionStrings["geolab_mdt2_capeConnectionString"].ConnectionString;
        }
    }

    public static String CapeCod
    {
        get
        {
            return WebConfigurationManager.ConnectionStrings["CapeCodeConnectionString"].ConnectionString;
        }
    }
    public static String CapeCodLegacy
    {
        get
        {
            return WebConfigurationManager.ConnectionStrings["busgpsConnectionString"].ConnectionString;
        }
    }


}
