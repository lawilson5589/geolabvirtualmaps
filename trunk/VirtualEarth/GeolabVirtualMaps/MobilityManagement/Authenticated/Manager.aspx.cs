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
            if (!IsPostBack)
            {
                Page.Response.Output.Write("<iframe src ='http://www.geolabvirtualmaps.com/pda/metrowest.aspx#GridView'width= '100%' height = '30%'></iframe>");
            }
        }
        else if (User.IsInRole("CapeCod"))
        {
            Label3.Text = "CCRTA MDT";
        }
        else if (User.IsInRole("BusyBeeMWRTA"))
        {
            Label3.Text = "BusyBeeMWRTA";
        }
        else if (User.IsInRole("Administrator"))
        {
            //do nothing
        }
        else
        {
            Response.Redirect("Error.aspx");
        }
        if (!IsPostBack)
        {
            DropDownList dd1 = (DropDownList)LoginView1.FindControl("DropDownList1");
            SqlDataSource sql1 = (SqlDataSource)LoginView1.FindControl("SqlDataSource2");
            sql1.SelectParameters.Clear();
            sql1.SelectParameters.Add("Carrier", Label3.Text);
            sql1.DataBind();
            dd1.DataBind();
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
        TextBox text1 = (TextBox)LoginView1.FindControl("textbox1");
        DropDownList dd1 = (DropDownList)LoginView1.FindControl("DropDownList1");
        if (gv1.SelectedRow.Cells[2].Text != "&nbsp;")
        {
            text1.Text = gv1.SelectedRow.Cells[2].Text.ToString();
        }
        else
        {
            text1.Text = "";
        }
        if (gv1.SelectedRow.Cells[4].Text != "&nbsp;")
        {
            dd1.SelectedValue = gv1.SelectedRow.Cells[4].Text.ToString();
        }
        else
        {
            dd1.SelectedValue = "Unspecified";
        }
        labl.Text = test;
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        DropDownList dd1 = (DropDownList)LoginView1.FindControl("DropDownList1");
        GridView gv1 = (GridView)LoginView1.FindControl("GridView1");
        String test = gv1.SelectedRow.Cells[1].Text.ToString();
        Label labl = (Label)LoginView1.FindControl("Label2");
        SqlDataSource sql1 = (SqlDataSource)LoginView1.FindControl("SqlDataSource1");
        TextBox text1 = null;
        if ((User.IsInRole("MetroWest")) || (User.IsInRole("BusyBeeMWRTA")))
        {
            text1 = (TextBox)LoginView1.FindControl("Textbox1");
        }
        String route = dd1.SelectedValue;
        if (dd1.SelectedValue == "Unspecified")
        {
            route = null;
        }
        sql1.UpdateParameters.Clear();
        sql1.UpdateParameters.Add("Username", User.Identity.Name);
        sql1.UpdateParameters.Add("GeolabID", labl.Text);
        sql1.UpdateParameters.Add("Routename", route);
        sql1.UpdateParameters.Add("Date", null);
        if ((User.IsInRole("MetroWest")) || (User.IsInRole("BusyBeeMWRTA")))
        {
            sql1.UpdateParameters.Add("BusID", text1.Text);
        }
        sql1.Update();
        gv1.DataBind();   
    }
}
