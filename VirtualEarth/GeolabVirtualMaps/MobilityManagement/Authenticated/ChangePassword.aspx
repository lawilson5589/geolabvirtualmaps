<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ChangePassword.aspx.cs" Inherits="MobilityManagement_Authenticated_ChangePassword" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:LoginView ID="LoginView1" runat="server">
            <LoggedInTemplate>
                <asp:ChangePassword ID="ChangePassword1" runat="server" Font-Names="Arial" CancelDestinationPageUrl="~/MobilityManagement/Authenticated/Manager.aspx" ContinueDestinationPageUrl="~/MobilityManagement/Authenticated/Manager.aspx">
                </asp:ChangePassword>
                &nbsp;<br />
                <br />
            </LoggedInTemplate>
        </asp:LoginView>
    
    </div>
    </form>
</body>
</html>
