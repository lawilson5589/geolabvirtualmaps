<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ccrta.aspx.cs" Inherits="pda_ccrta" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
<link rel ="Stylesheet" href="StyleSheet.css" type="text/css" media="all" />
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div style="text-align: center">
        <asp:GridView ID="GridView1" runat="server" onrowdatabound="GridView1_RowDataBound" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EnableViewState="False" HorizontalAlign="Center">
      <Columns>
                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:T}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField HeaderText="Location" />
                <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText ="Bearing"/>
                <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                <asp:BoundField />
                <asp:BoundField DataField="PositionHeading"  />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_CapeCod" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
        <p>
            Legacy Devices</p>
        <asp:GridView ID="GridView2" runat="server" onrowdatabound="GridView1_RowDataBound" AutoGenerateColumns="False" DataSourceID="SqlDataSource2" EnableViewState="False" HorizontalAlign="Center">
            <Columns>
                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:T}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField HeaderText="Location" />
                <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText="Bearing"/>
                <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                <asp:BoundField />
                <asp:BoundField DataField="PositionHeading" />
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:busgpsConnectionString %>"
            SelectCommand="sp_SelectAVL_CapeCodePartners" SelectCommandType="StoredProcedure">
        </asp:SqlDataSource>
    
    </div>
    </form>
</body>
</html>