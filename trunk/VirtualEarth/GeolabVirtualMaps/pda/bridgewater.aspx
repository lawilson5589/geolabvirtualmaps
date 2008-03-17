<%@ Page Language="C#" AutoEventWireup="true" CodeFile="bridgewater.aspx.cs" Inherits="pda_ccrta" %>

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
        <asp:GridView ID="GridView1" runat="server" onrowdatabound="GridView1_RowDataBound" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EnableViewState="False" HorizontalAlign="Center" OnSelectedIndexChanged="GridView1_SelectedIndexChanged">
            <Columns>
                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:g}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField HeaderText="Location" />
                <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText ="Bearing"/>
                <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                <asp:BoundField />
                <asp:BoundField DataField="PositionHeading"  />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_Bridgew" SelectCommandType="StoredProcedure" ></asp:SqlDataSource>
    
    </div>
    </form>
</body>
</html>
