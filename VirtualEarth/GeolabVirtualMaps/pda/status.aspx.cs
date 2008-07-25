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

public partial class pda_status : System.Web.UI.Page
{
    private static Geolab.MapPointCredentials global = new Geolab.MapPointCredentials();
    protected void Page_Load(object sender, EventArgs e)
    {
        InfoRetrieved.Text = System.DateTime.Now.ToString();
        Geolab.PDAData p1 = new Geolab.PDAData();
        Geolab.PDAData p2 = new Geolab.PDAData();
        Geolab.PDAData p3 = new Geolab.PDAData();
        Geolab.PDAData p4 = new Geolab.PDAData();
        Geolab.PDAData p5 = new Geolab.PDAData();
        Geolab.PDAData p6 = new Geolab.PDAData();
        Geolab.PDAData p7 = new Geolab.PDAData();
        Geolab.PDAData p8 = new Geolab.PDAData();
        Geolab.PDAData p9 = new Geolab.PDAData();
        Geolab.PDAData p10 = new Geolab.PDAData();
        Geolab.PDAData p11 = new Geolab.PDAData();
        Geolab.PDAData p12 = new Geolab.PDAData();

        p1.RetreivePDATable("MWRTA", ref Table1);
        p2.RetreivePDATable("BusyBeeMWRTA", ref Table2);
        p3.RetreivePDATable("Bridgew", ref Table3);
        p4.RetreivePDATable("Brockton", ref Table4);
        p5.RetreivePDATable("CapeCod", ref Table5);
        p6.RetreivePDATable("CapeCodMDT", ref Table6);
        p7.RetreivePDATable("Emergency", ref Table7);
        p8.RetreivePDATable("GeoLab", ref Table8);
        p9.RetreivePDATable("GeoLabParatransit", ref Table9);
        p10.RetreivePDATable("NorthernTier", ref Table10);
        p11.RetreivePDATable("RailsMWRTA", ref Table11);
        p12.RetreivePDATable("SouthPortland", ref Table12);

        Table1.Visible = true;
        Table2.Visible = true;
        Table3.Visible = true;
        Table4.Visible = true;
        Table5.Visible = true;
        Table6.Visible = true;
        Table7.Visible = true;
        Table8.Visible = true;
        Table9.Visible = true;
        Table10.Visible = true;
        Table11.Visible = true;
    }
    protected void Refresher_Click(object sender, EventArgs e)
    {
        Response.Redirect(Page.Request.Url.ToString());
    }
}
