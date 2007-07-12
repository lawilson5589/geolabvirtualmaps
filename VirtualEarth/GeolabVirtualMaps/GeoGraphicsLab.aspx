<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GeoGraphicsLab.aspx.cs" Inherits="GeoGraphicsLab"  StylesheetTheme="VE_Theme" %>
<%@ Register Src="WebControls/WebUserControl_ToolBarList.ascx" TagName="WebUserControl_ToolBarList" TagPrefix="geo" %>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>GeoGraphics Lab - </title>
     <script type="text/javascript">
         var map = null;
         var MapNav = null;
         var Vehicle = null;
         // Modify settings values as need
         var Settings = { 
             "Lat" : 41.99 
            ,"Lon" : -70.96
            ,"MapStyle" : 'r'
            ,"MapZoom" : 10
            ,"VehicleIcon" : '/images/map_icons/default.gif'
            ,"VehicleWebServicePath" : '/AVL_webservices/LiveData.ashx?ID=GeoLab'
            ,"VehiclePinTitles" : 'GeoGraphics Lab'
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
                <asp:ScriptReference Path="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=5" />
                <asp:ScriptReference Path="~/js/core/MapJavaScripts.ashx?release=false" />
                <asp:ScriptReference Path="~/js/specific/MapInit.js" />

            </Scripts>
			<services>
			    
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

