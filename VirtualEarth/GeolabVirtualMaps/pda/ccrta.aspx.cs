using System;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Text;

public partial class pda_ccrta : System.Web.UI.Page
{
    private static Geolab.MapPointCredentials global = new Geolab.MapPointCredentials();
    protected void Page_Load(object sender, EventArgs e)
    {
        InfoRetrieved.Text = System.DateTime.Now.ToString();
        Geolab.PDAData p1 = new Geolab.PDAData();
        p1.RetreivePDATable("CapeCod", ref Table1);
        Table1.Visible = true;
        Geolab.PDAData p2 = new Geolab.PDAData();
        p2.RetreivePDATable("CapeCodMDT", ref Table2);
        Table2.Visible = true;
    }
    protected void Refresher_Click(object sender, EventArgs e)
    {
        Response.Redirect(Page.Request.Url.ToString());
    }
}
