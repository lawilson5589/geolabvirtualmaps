<%@ Control Language="C#" AutoEventWireup="true" CodeFile="WebUserControl_ToolBarList.ascx.cs" Inherits="WebUserControl_ToolBarList" %>
<!-- BEGIN OF TOOLBAR -->
<div id="ToolBar">
    <ul class="ToolBarList">
        <li class="ToolBarListIntend" style="width: 240px;"></li>
        <li class="Icon" onclick="mapNav.onMapLegendOff()"><img alt="Map Legend Off" src="/images/map_icons/mapleft_panel_off.gif" title="Map Panel Off" /> </li>
        <li class="Icon" onclick="mapNav.onMapLegendOn()"><img alt="Map Legend On" src="/images/map_icons/mapleft_pane.gif" title="Map Panel On" /></li>
        <li class="Icon" onclick="mapNav.onZoomIn()"><img alt="Zoom In" src="/images/map_icons/zoom_in.png" title="Zoom In" /></li>
        <li class="Icon" onclick="mapNav.onZoomOut()"><img alt="Zoom Out" src="/images/map_icons/zoom_out.png" title="Zoom Out" /></li>
        <li class="Icon" onclick="mapNav.onMoveLeft()"><img alt="Move Left" src="/images/map_icons/map_left.gif" title="Move Left" /></li>
        <li class="Icon" onclick="mapNav.onMoveUp()"><img alt="Move Up" src="/images/map_icons/map_up.gif" title="Move Up" /></li>
        <li class="Icon" onclick="mapNav.onMoveDown()"><img alt="Move Down" src="/images/map_icons/map_down.gif" title="Move Down " /></li>
        <li class="Icon" onclick="mapNav.onMoveRight()"><img alt="Move Right" src="/images/map_icons/map_right.gif" title="Move Right" /></li>
        <li class="Icon" onclick=""><asp:ImageButton ImageUrl="~/images/map_icons/help_index.png" ID="btnMapHelp" runat="server" OnClientClick="return false;"/></li>
        <li class="Icon" onclick=""><img alt="Map Print" src="/images/map_icons/map_printer.png" title="Map Print" /></li>
        <li class="Icon" onclick=""><img alt="Send Email" src="/images/map_icons/map_sendmail.gif" title="Send Email" /></li>
        <li><div id="ajax__slider_h_text" style="position:relative;float:left"><span>Refresh Rate: </span><asp:Label ID="ajax__slider_hLabel" runat="server" Text="Label"></asp:Label></div><asp:TextBox ID="TextBoxRate" MaxLength="3" Width="0" runat="server"></asp:TextBox>
</li>
<%--        <li class="Icon" onclick=""><asp:ImageButton ImageUrl="~/images/map_icons/help_index.png" ID="ImageButton1" runat="server" OnClientClick="return false;"/></li>
--%>
    </ul>
</div>
<!-- "Wire frame" div used to transition from the button to the info panel -->
<div id="flyout">
</div>
<!-- Info panel to be displayed as a flyout when the button is clicked -->
<div id="MapHelp" style="background: url(/images/map_icons/bg_image.png) repeat-y;">
    <table cellpadding="0" cellspacing="0" >
        <tr>
            <th class="MapInfoHeader" colspan="2" style="	background: url(/images/map_icons/maptoolbar_bg.gif) #D9F1F9 center repeat-x;">
                <b style="margin-left:60px;margin-right:60px">Toolbar Help</b>
                <asp:LinkButton ID="btnClose" runat="server" OnClientClick="return false;" ToolTip="Close">
                <img alt="" style="margin: 0px 0px 0px 0px" src="/images/map_icons/glyph_close.gif" />
                </asp:LinkButton>
		   </th>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/zoom_in.png" /></td>
            <td>Zoom In</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/zoom_out.png" /></td>
            <td>Zoom Out&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/mapleft_pane.gif" /></td>
            <td>Turn On Map Legend&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/mapleft_panel_off.gif" /></td>
            <td>Turn Off Map Legend&nbsp;&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/map_left.gif" /><img
                alt="" src="/images/map_icons/map_up.gif" /><img alt="" src="/images/map_icons/map_down.gif" /><img
                    alt="" src="/images/map_icons/map_right.gif" /></td>
            <td>Move Map Direction&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/icon_pan_northwest.gif"
                style="width: 17px; height: 17px" /><img alt="" src="/images/map_icons/icon_pan_north.gif"
                    style="width: 25px; height: 17px" /><img alt="" src="/images/map_icons/icon_pan_northeast.gif"
                        style="width: 17px; height: 17px" /></td>
            <td>Pan&nbsp;Map</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/map_printer.png" /></td>
            <td>Print Map&nbsp;</td>
        </tr>
        <tr>
            <td class="MapInfoIcon">&nbsp;<img alt="" src="/images/map_icons/map_sendmail.gif" /></td>
            <td>Send Feedback / Bug&nbsp;</td>
        </tr>
    </table>
</div>
<!-- END OF TOOLBAR -->

<ajaxToolkit:SliderExtender ID="SliderExtenderRefresh" runat="server" TargetControlID="TextBoxRate" Minimum="5" Maximum="60" Steps="5" BoundControlID="ajax__slider_hLabel">
</ajaxToolkit:SliderExtender>        
<ajaxToolkit:AnimationExtender ID="OpenAnimation" runat="server" TargetControlID="btnMapHelp">
    <Animations>
    <OnClick>
        <Sequence>
            <%-- Disable the button so it can't be clicked again --%><EnableAction Enabled="false" /><%-- Position the wire frame on top of the button and show it --%><ScriptAction  Script="Cover($get('WebUserControl_ToolBarList_btnMapHelp'), $get('flyout'), true);" /><StyleAction AnimationTarget="flyout" Attribute="display" Value="block"/><%-- Move the wire frame from the button's bounds to the info panel's bounds --%><Parallel AnimationTarget="flyout" Duration="0.15" Fps="15">
                <Move Horizontal="0" Vertical="20" />
                <Resize Width="240" Height="230" />
            </Parallel>
            <%-- Move the info panel on top of the wire frame, fade it in, and hide the frame --%><ScriptAction Script="Cover($get('flyout'), $get('MapHelp'));" /><StyleAction AnimationTarget="flyout" Attribute="display" Value="none"/><StyleAction AnimationTarget="MapHelp" Attribute="display" Value="block"/><ScriptAction Script="NorthMapArrowShow(false)" /></Sequence>
    </OnClick>
    </Animations>
</ajaxToolkit:AnimationExtender>
<ajaxToolkit:AnimationExtender ID="CloseAnimation" runat="server" TargetControlID="btnClose">
    <Animations>
    <OnClick>
        <Sequence AnimationTarget="MapHelp">
            <%--  Shrink the info panel out of view --%><StyleAction Attribute="overflow" Value="hidden"/><Parallel Duration=".3" Fps="15">
                <Scale ScaleFactor="0.05" Center="true" ScaleFont="true" FontUnit="px" />
            </Parallel>
            <%--  Reset the  so it can be played again --%><StyleAction Attribute="display" Value="none"/><StyleAction Attribute="width" Value="240px"/><StyleAction Attribute="height" Value=""/><StyleAction Attribute="fontSize" Value="10pt"/><%--  Enable the button so it can be played again --%><EnableAction AnimationTarget="WebUserControl_ToolBarList_btnMapHelp" Enabled="true" /><ScriptAction Script="NorthMapArrowShow(true)" /></Sequence>
    </OnClick>
    </Animations>
</ajaxToolkit:AnimationExtender>
<!-- BEGIN LEFT MENU -->

<!-- END LEFT MENU -->
