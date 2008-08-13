<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Playback.aspx.cs" Inherits="HaynnisDemo" EnableEventValidation="false" StylesheetTheme="VE_Theme" %>
<%@ Register Src="WebControls/WebUserControl_ToolBarList.ascx" TagName="WebUserControl_ToolBarList" TagPrefix="geo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head" runat="server">
    <title>GeoGraphics Lab - Haynnis Demo </title>

     <script type="text/javascript">
        this.__reverseGeoCoding = true;
        var map = null;
        var Vehicle = null;
        // Modify settings values as need
        var Settings = { 
             "Lat" : 41.655887 
            ,"Lon" : -70.288338
            ,"MapStyle" : 'r'
            ,"MapZoom" : 9
            ,"VehicleIcon" : 'images/map_vehicles/bus_024.gif'
            ,"VehicleWebServicePath" : 'AVL_webservices/LiveDataCapeCodePartners.ashx?ID=CapeCodePartners'
            ,"VehiclePinTitles" : 'Hyannis Transportation'
            ,"DataRefreshRate" : 10000
            ,"GeoCoding" : false
        };
        var Screen = {
             'offsetX' : 10
            ,'offsetY' : 10
            ,'ToolBarHeight' : 30
            ,'mapoffsetX' : 4
            ,'mapoffsetY' : 6
            ,'DivIDContainer' : 'Parent'
            ,'DivIDToolbar' : 'ToolBar'
            ,'DivIDMap' : 'geoMap'
            ,'DivIDLeftMenu' : 'LeftMenu'
        };
     </script> 
</head>
<body>

    <form id="formMain" runat="server">
    <table width="100%" >
    <tr><td align="center">
        <asp:Label ID="Label1" runat="server" 
            Text="Phone:" Font-Names="Arial" Font-Size="10pt"></asp:Label>
        &nbsp;<asp:DropDownList ID="DropDownList1" runat="server" 
            DataSourceID="SqlDataSource1" DataTextField="GeolabID" 
            DataValueField="Device_Serial_Number">
        </asp:DropDownList>
        &nbsp;
        <asp:Label ID="Label4" runat="server" Font-Names="Arial" Font-Size="10pt" 
            Text="Start Time: "></asp:Label>
        <asp:DropDownList ID="DropDownList2" runat="server" >
            <asp:ListItem Selected="True">0</asp:ListItem>
            <asp:ListItem>1</asp:ListItem>
            <asp:ListItem>2</asp:ListItem>
            <asp:ListItem>3</asp:ListItem>
            <asp:ListItem>4</asp:ListItem>
            <asp:ListItem>5</asp:ListItem>
            <asp:ListItem>6</asp:ListItem>
            <asp:ListItem>7</asp:ListItem>
            <asp:ListItem>8</asp:ListItem>
            <asp:ListItem>9</asp:ListItem>
            <asp:ListItem>10</asp:ListItem>
            <asp:ListItem>11</asp:ListItem>
            <asp:ListItem>12</asp:ListItem>
            <asp:ListItem>13</asp:ListItem>
            <asp:ListItem>14</asp:ListItem>
            <asp:ListItem>15</asp:ListItem>
            <asp:ListItem>16</asp:ListItem>
            <asp:ListItem>17</asp:ListItem>
            <asp:ListItem>18</asp:ListItem>
            <asp:ListItem>19</asp:ListItem>
            <asp:ListItem>20</asp:ListItem>
            <asp:ListItem>21</asp:ListItem>
            <asp:ListItem>22</asp:ListItem>
            <asp:ListItem>23</asp:ListItem>
        </asp:DropDownList>
        <asp:Label ID="Label3" runat="server" Text=":"></asp:Label>
        <asp:DropDownList ID="DropDownList3" runat="server">
            <asp:ListItem Selected="True">00</asp:ListItem>
            <asp:ListItem>15</asp:ListItem>
            <asp:ListItem>30</asp:ListItem>
            <asp:ListItem>45</asp:ListItem>
        </asp:DropDownList>
&nbsp;<asp:Label ID="Label2" runat="server" Font-Names="Arial" Font-Size="10pt" 
            Text="Duration:"></asp:Label>
&nbsp;<asp:DropDownList ID="DropDownList4" runat="server">
            <asp:ListItem Selected="True" Value="15">15 min</asp:ListItem>
            <asp:ListItem Value="30">30 min</asp:ListItem>
            <asp:ListItem Value="60">1 hr</asp:ListItem>
            <asp:ListItem Value="120">2 hr</asp:ListItem>
            <asp:ListItem Value="180">3 hr</asp:ListItem>
        </asp:DropDownList>
        &nbsp;&nbsp;<asp:Label ID="Label5" runat="server" Font-Names="Arial" Font-Size="10pt" 
                Text="Date (mmddyyyy only):"></asp:Label>
        <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        &nbsp;<asp:Label ID="Label6" Font-Names="Arial" Font-Size="10pt" runat="server" Text="Playback Speed:"></asp:Label>
        <asp:DropDownList ID="PlaybackSpeedDropDown" runat="server">
            <asp:ListItem Value="250">Slow</asp:ListItem>
            <asp:ListItem Value="75">Fast</asp:ListItem>
        </asp:DropDownList>
        &nbsp;
        <input id="StartButton" type="button" value="Start" onclick="GetData()"/>&nbsp;
        <input id="ResetButton" type="button" value="Reset" onclick="CancelRequest()" 
            disabled="disabled"/></td></tr></table>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>" 
            
            SelectCommand="SELECT DISTINCT [GeolabID], [Device Serial Number] AS Device_Serial_Number FROM [tbl_DeviceSerialNumber]">
        </asp:SqlDataSource>
        <br />
        <asp:ScriptManager ID="scriptManagerMap" runat="server">
            <Scripts>   
                <asp:ScriptReference Path="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6.1" />
                <asp:ScriptReference Path="~/js/specific/MapInitPlayback.js" />
                <asp:ScriptReference Path="~/js/core/MapJavaScripts6Playback.ashx?release=false" />

                <asp:ScriptReference Path="~/js/playback/Functions.js" />
                <%--Map Specific JS--%>
                
            </Scripts>
			<services>	
			    <%--Map Specific WebService --%>
			    
			</services>
        </asp:ScriptManager>
        
           <asp:UpdatePanel ID="Parent" runat="server" ChildrenAsTriggers="False" UpdateMode="Conditional" >
    	<contenttemplate>
                <geo:WebUserControl_ToolBarList ID="WebUserControl_ToolBarList" runat="server" />
				<asp:Panel ID="geoMap" runat="server" Height="550px" Width="955px" />
		</contenttemplate>
    </asp:UpdatePanel>
    </form>
</body>
</html>
