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

public partial class WebUserControl_ToolBarList : System.Web.UI.UserControl
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected override void OnPreRender(EventArgs e)
    {
        //base.OnPreRender(e);
        //string script = "<script type=\"text/javascript\"> alert('jimbo');</script>";
        //Page.ClientScript.RegisterClientScriptBlock(this.GetType(), "InitScript", script);
    }
  
}
