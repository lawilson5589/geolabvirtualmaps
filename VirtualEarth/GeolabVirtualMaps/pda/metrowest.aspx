<%@ Page Language="C#" AutoEventWireup="true" CodeFile="metrowest.aspx.cs" Inherits="pda_ccrta" %>

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
        </h2>
        <h3>
        </h3>
        <h2>
            Information Retrieved at:
            <asp:Label ID="InfoRetrieved" runat="server" Text="Label"></asp:Label></h2>
        <p>
            <asp:Button ID="Refresher" runat="server" OnClick="Refresher_Click" Text="Refresh" />&nbsp;</p>
        <p>
            &nbsp;</p>
        <p>  <a name ="GridView">Metrowest Fixed Route Vehicles</a></p>
        <br />
        <br />
      
        <asp:GridView ID="GridView1" onrowdatabound="GridView1_RowDataBound"  runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EnableViewState="False">
            <Columns>
                <asp:BoundField DataField="Froutename" HeaderText="Route" />
                <asp:BoundField DataField="BusID" HeaderText="Bus ID" SortExpression="BusID" />
                <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:T}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField HeaderText="Location" />
                <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText ="Bearing"/>
                <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                <asp:BoundField />
                <asp:BoundField DataField="PositionHeading"  />
            </Columns>
            <EmptyDataTemplate>
                No Data Available
            </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_Framingham" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
        <br />
        <p>
            Metrowest Paratransit Vehicles</p>
        <p>
            &nbsp;</p>
        <asp:GridView ID="GridView2" onrowdatabound="GridView1_RowDataBound"  runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource2" EnableViewState="False">
            <Columns>
                <asp:BoundField DataField="Froutename" HeaderText="Route" />
                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:T}" />
                <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                <asp:BoundField HeaderText="Location" />
                <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText ="Bearing"/>
                <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                <asp:BoundField />
                <asp:BoundField DataField="PositionHeading"  />
            </Columns>
            <EmptyDataTemplate>
                No Data Available
            </EmptyDataTemplate>
        </asp:GridView>
        &nbsp;<asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_BusyBeeMWRTA" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
        <br />
        <p>
            <span style="color: gray">Commuter Rail</span></p>
        <p>
            &nbsp;</p>
        <p>
        </p>
    
    <h4>
            <asp:GridView ID="GridView3" onrowdatabound="GridView1_RowDataBound"  runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource3" EnableViewState="False" Font-Bold="False">
                <Columns>
                    <asp:BoundField DataField="Froutename" HeaderText="Route" />
                    <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                    <asp:BoundField DataField="Datetime" HtmlEncode="False" HeaderText="Time" SortExpression="Datetime" DataFormatString="{0:T}" />
                    <asp:BoundField DataField="PositionSpeed" HeaderText="Speed" SortExpression="PositionSpeed" />
                    <asp:BoundField HeaderText="Location" />
                    <asp:BoundField DataField="Latitude" SortExpression="Latitude" HeaderText ="Bearing"/>
                    <asp:BoundField DataField="Longitude" SortExpression="Longitude" />
                    <asp:BoundField />
                    <asp:BoundField DataField="PositionHeading"  />
                </Columns>
                <EmptyDataTemplate>
                    No Data Available
                </EmptyDataTemplate>
            </asp:GridView>
                &nbsp;<asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_RailsMWRTA" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
         </h4>
    
    </div>
    </form>
</body>
</html>
