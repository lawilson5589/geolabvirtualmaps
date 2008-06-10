<%@ Page Language="C#" AutoEventWireup="true" CodeFile="HaynnisDemo.aspx.cs" Inherits="HaynnisDemo" EnableEventValidation="false" StylesheetTheme="VE_Theme" %>
<%@ Register Src="WebControls/WebUserControl_ToolBarList.ascx" TagName="WebUserControl_ToolBarList" TagPrefix="geo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head" runat="server">
    <title>GeoGraphics Lab - Haynnis Demo </title>

     <script type="text/javascript">

        var map = null;
        var Vehicle = null;
        // Modify settings values as need
        var Settings = { 
             "Lat" : 41.655887 
            ,"Lon" : -70.288338
            ,"MapStyle" : 'r'
            ,"MapZoom" : 9
            ,"VehicleIcon" : '/images/map_vehicles/bus_024.gif'
            ,"VehicleWebServicePath" : '/AVL_webservices/LiveDataCapeCodePartners.ashx?ID=CapeCodePartners'
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
        <asp:ScriptManager ID="scriptManagerMap" runat="server">
            <Scripts>   
                <asp:ScriptReference Path="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=5" />
                <asp:ScriptReference Path="~/js/core/MapJavaScripts.ashx?release=false" />
                <asp:ScriptReference Path="~/js/lcd_demo/MapInit.js" />
                <asp:ScriptReference Path="~/js/lcd_demo/Functions.js" />
                <asp:ScriptReference Path="~/js/lcd_demo/Routes.js" />
                <%--Map Specific JS--%>
                
            </Scripts>
			<services>	
			    <%--Map Specific WebService --%>
			    
			</services>
        </asp:ScriptManager>
        
        <asp:Panel ID="geoMap" runat="server" Height="910px" Width="1776px" />
    </form>
</body>
</html>
