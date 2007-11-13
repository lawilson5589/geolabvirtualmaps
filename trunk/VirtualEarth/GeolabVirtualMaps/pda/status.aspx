<%@ Page Language="C#" AutoEventWireup="true" CodeFile="status.aspx.cs" Inherits="pda_status" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>GeoGraphics Lab AVL Status Page</title>
    <link rel ="Stylesheet" href="StyleSheet.css" type="text/css" media="all" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>
            Current AVL Status</h1>
        <p>
            Bridgewater Transit System</p>
               <p style="text-align: center">
            &nbsp;</p>
          
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
                                    <EmptyDataTemplate>
                            <span style="color: #ff0000">No Data</span>
                        </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_Bridgew" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
          
        <p>
            Cape Cod Regional Transit Authority- Cell Phones</p>
        <p>
            &nbsp;</p>
                    <asp:GridView ID="GridView2" runat="server" onrowdatabound="GridView1_RowDataBound" AutoGenerateColumns="False" DataSourceID="SqlDataSource2" EnableViewState="False" HorizontalAlign="Center">
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
                                    <EmptyDataTemplate>
                            <span style="color: #ff0000">No Data</span>
                        </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_CapeCod" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
        <p>
            Cape Cod Regional Transit Authority- Legacy</p>
        <p>
            &nbsp;</p>
                   <asp:GridView ID="GridView3" runat="server" onrowdatabound="GridView1_RowDataBound" AutoGenerateColumns="False" DataSourceID="SqlDataSource3" EnableViewState="False" HorizontalAlign="Center">
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
                                    <EmptyDataTemplate>
                            <span style="color: #ff0000">No Data</span>
                        </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:busgpsConnectionString %>"
            SelectCommand="sp_SelectAVL_CapeCodePartners" SelectCommandType="StoredProcedure">
        </asp:SqlDataSource>
        <br />
        <p>
            Southeastern MA Emergency Control</p>
        <p>
            &nbsp;</p>
                   <asp:GridView ID="GridView4" onrowdatabound="GridView1_RowDataBound" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource4"
            EnableViewState="False" HorizontalAlign="Center">
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
                       <EmptyDataTemplate>
                           <span style="color: #ff0000">No Data</span>
                       </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_SouthEastern" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
        <br />
    
        <p>
            Metrowest Transit Authority</p>
        <p>
            &nbsp;</p>
                    <asp:GridView ID="GridView5" onrowdatabound="GridView1_RowDataBound"  runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource5" EnableViewState="False" HorizontalAlign="Center">
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
                        <EmptyDataTemplate>
                            <span style="color: #ff0000">No Data</span>
                        </EmptyDataTemplate>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
            SelectCommand="sp_SelectAVL_Framingham" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
        <br />
    
    
    </div>
    </form>
</body>
</html>
