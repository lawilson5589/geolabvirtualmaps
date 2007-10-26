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

public partial class MobilityMangement_Authenticated_Manager : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (User.IsInRole("MetroWest"))
        {
            Label3.Text = "MWRTA";
        }
        else if (User.IsInRole("CapeCod"))
        {
            Label3.Text = "CCRTA MDT";
        }
        else
        {
            Response.Redirect("Error.aspx");
        }


    }
    protected void SqlUpdate(object sender,SqlDataSourceCommandEventArgs e)
    {
       
     
    }


    protected void IndexChange(object sender, EventArgs e)
    {
        GridView gv1 = (GridView)LoginView1.FindControl("GridView1");
        String test = gv1.SelectedRow.Cells[1].Text.ToString();
        Label labl = (Label)LoginView1.FindControl("Label2");
        labl.Text = test;
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        DropDownList dd1 = (DropDownList)LoginView1.FindControl("DropDownList1");
        GridView gv1 = (GridView)LoginView1.FindControl("GridView1");
        String test = gv1.SelectedRow.Cells[1].Text.ToString();
        Label labl = (Label)LoginView1.FindControl("Label2");
        SqlDataSource sql1 = (SqlDataSource)LoginView1.FindControl("SqlDataSource1");

        sql1.UpdateParameters.Clear();
        sql1.UpdateParameters.Add("Username", User.Identity.Name);
        sql1.UpdateParameters.Add("GeolabID", labl.Text);
        sql1.UpdateParameters.Add("Routename", dd1.SelectedValue);
        sql1.UpdateParameters.Add("Date", null);
        sql1.Update();
        gv1.DataBind();
       
    }
}
