<%@ Page Language="C#" AutoEventWireup="true" CodeFile="northerntier.aspx.cs" Inherits="pda_ccrta" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<link rel ="Stylesheet" href="StyleSheet.css" type="text/css" media="all" />
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h2>
            Information Retrieved at:
            <asp:Label ID="InfoRetrieved" runat="server" Text="Label"></asp:Label></h2>
        <asp:Button ID="Refresher" runat="server" OnClick="Refresher_Click" Text="Refresh" /><br />
        <br />
        <asp:Table ID="Table1" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
        </asp:Table>
    
    </div>
    </form>
</body>
</html>
