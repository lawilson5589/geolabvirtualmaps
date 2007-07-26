<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ccrta.aspx.cs" Inherits="pda_ccrta" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<link rel ="Stylesheet" href="StyleSheet.css" type="text/css" media="all" />
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
            <Columns>
                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                <asp:BoundField DataField="Datetime" HeaderText="Datetime" SortExpression="Datetime" DataFormatString="{0:d}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField DataField="Latitude" HeaderText="Latitude" SortExpression="Latitude" />
                <asp:BoundField DataField="Longitude" HeaderText="Longitude" SortExpression="Longitude" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_Framingham" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    
    </div>
    </form>
</body>
</html>
