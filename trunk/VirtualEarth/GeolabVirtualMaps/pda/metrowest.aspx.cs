using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using net.mappoint.staging;
using System.Text;

    
public partial class pda_ccrta : System.Web.UI.Page
{
    private static Geolab.MapPointCredentials global = new Geolab.MapPointCredentials();
    protected void Page_Load(object sender, EventArgs e)
    {
        InfoRetrieved.Text = System.DateTime.Now.ToString();
        Geolab.PDAData p1 = new Geolab.PDAData();
        Geolab.PDAData p2 = new Geolab.PDAData();
        Geolab.PDAData p3 = new Geolab.PDAData();

        p1.RetreivePDATable("MWRTA", ref Table1);
        p2.RetreivePDATable("BusyBeeMWRTA", ref Table2);
        p3.RetreivePDATable("RailsMWRTA", ref Table3);

        Table1.Visible = true;
        Table2.Visible = true;
        Table3.Visible = true;

    }
    protected void Refresher_Click(object sender, EventArgs e)
    {
        Response.Redirect(Page.Request.Url.ToString());
    }
}
