<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Brockton.aspx.cs" Inherits="Template" EnableEventValidation="false" StylesheetTheme="VE_Theme" %>
<%@ Register Src="WebControls/WebUserControl_ToolBarList.ascx" TagName="WebUserControl_ToolBarList" TagPrefix="geo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head" runat="server">
    <title>GeoGraphics Lab - </title>

     <script type="text/javascript">

        var map = null;
        var MapNav = null;
        var Vehicle = null;
        // Modify settings values as need
        var Settings = { 
             "Lat" : 42.101843
            ,"Lon" : -71.023950
            ,"MapStyle" : 'r'
            ,"MapZoom" : 11
            ,"VehicleIcon" : 'images/map_vehicles/Bus_20_Blue.png'
            ,"VehicleWebServicePath" : 'AVL_webservices/LiveData.ashx?ID=Brockton'
            ,"VehiclePinTitles" : 'Brockton'
            ,"DataRefreshRate" : 5000
            ,"GeoCoding" : true
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
                <asp:ScriptReference Path="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6.1" />
                <asp:ScriptReference Path="~/js/core/MapJavaScripts6.ashx?release=false" />
                <asp:ScriptReference Path="~/js/specific/MapInit.js" />
                <%--Map Specific JS--%>
             <%--   <asp:ScriptReference Path="~/js/specific/CapeCode_BusRoutesAndStops.js" />--%>
            </Scripts>
			<services>	
			    <%--Map Specific WebService --%>
			    <%--<asp:ServiceReference Path="~/MapWebService/CapeCod_WebService.asmx" />--%>
			</services>
        </asp:ScriptManager>
        
    <asp:UpdatePanel ID="Parent" runat="server" ChildrenAsTriggers="False" UpdateMode="Conditional" >
    	<contenttemplate>
                <geo:WebUserControl_ToolBarList ID="WebUserControl_ToolBarList" runat="server" />
				<asp:Panel ID="geoMap" runat="server" Height="550px" Width="955px" />
		</contenttemplate>
    </asp:UpdatePanel>
    </form>
<%--     <div id="Tooltip" style="display: none;">
        <div id="TooltipIcon"></div><div id="TooltipText"></div> 
    </div>--%>
</body>
</html>
