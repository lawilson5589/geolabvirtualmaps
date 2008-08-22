<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Manager.aspx.cs" Inherits="MobilityMangement_Authenticated_Manager" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
    <style type="text/css">
        .style1
        {
            font-family: Arial;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <span style="font-family: Arial">
        Welcome, </span>
        
        <asp:LoginName ID="LoginName1" runat="server" Font-Names="Arial" />
        <span style="font-family: Arial">
        (</span><asp:Label ID="Label3" runat="server" Text="Label" Font-Names="Arial"></asp:Label><span style="font-family: Arial">)<asp:LoginStatus
            ID="LoginStatus1" runat="server" LogoutAction="Redirect" LogoutPageUrl="http://www.geolabvirtualmaps.com" />
        <br />
        <br />
        <br />
        </span><asp:LoginView ID="LoginView1" runat="server">
            <RoleGroups>
                <asp:RoleGroup Roles="MetroWest">
                    <ContentTemplate>
                        &nbsp;
                        <br />
                        <span style="width: 100%; font-family: Arial">Available phones for Metrowest Transportation:
                            <br />
                            <br />
                            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" DataKeyNames="GeolabID" OnSelectedIndexChanged ="IndexChange"
                                >
                                <Columns>
                                    <asp:CommandField ShowSelectButton="True" />
                                    <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                                    <asp:BoundField DataField="BusID" HeaderText="Bus ID" SortExpression="BusID" />
                                    <asp:BoundField DataField="Device Serial Number" HeaderText="Device Serial Number"
                                        SortExpression="Device Serial Number" />
                                    <asp:BoundField DataField="RouteName" HeaderText="RouteName" SortExpression="RouteName" />
                                    <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" SortExpression="ModifiedLast" />
                                    <asp:BoundField DataField="DateModified" HeaderText="DateModified" SortExpression="DateModified" />
                                </Columns>
                            </asp:GridView>
                            &nbsp;<br />
                            <br />
                            <br />
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                                <UpdateParameters>
                                    <asp:Parameter Direction="ReturnValue" Name="RETURN_VALUE" Type="Int32" />
                                    <asp:Parameter Name="GeolabID" Type="String" />
                                    <asp:Parameter Name="Routename" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Date" Type="DateTime" />
                                    <asp:Parameter Name="BusID" Type="String" />
                                </UpdateParameters>
                                <SelectParameters>
                                    <asp:Parameter DefaultValue="MWRTA" Name="Carrier" Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                            <br />
                            Phone:
                            <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label><br />
                            <br />
                            Bus ID:
                            <asp:TextBox ID="TextBox1" runat="server" MaxLength="7"></asp:TextBox><br />
                            <br />
                            Route:<asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource2"
                                DataTextField="Route" DataValueField="Route">
                            </asp:DropDownList><asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                                <SelectParameters>
                                    <asp:Parameter DefaultValue="Metrowest" Name="Carrier" Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" ValidationGroup="Group1" /><br />
                            &nbsp;<br />
                            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx">Change Password</asp:HyperLink><br />
                            &nbsp;</span>&nbsp;
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="CapeCod">
                    <ContentTemplate>
                        &nbsp;
                        <br />
                        <span style="width: 100%; font-family: Arial">Available phones for CapeCod Transportation:
                            <br />
                            <br />

                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                                <UpdateParameters>
                                    <asp:Parameter Name="GeolabID" Type="String" />
                                    <asp:Parameter Name="Routename" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Date" Type="DateTime" />
                                </UpdateParameters>
                                <SelectParameters>
                                    <asp:ControlParameter ControlID="Label3" DefaultValue="" Name="Carrier" PropertyName="Text"
                                        Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                            <br />
                            Phone:
                            <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label><br />
                            <br />
                            Route:<asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource2"
                                DataTextField="Route" DataValueField="Route">
                            </asp:DropDownList><asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                                <SelectParameters>
                                    <asp:Parameter DefaultValue="Metrowest" Name="Carrier" Type="String" />
                                </SelectParameters>
                            </asp:SqlDataSource>
                            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" /><br />
                            <br />
                            <br />
                            <br />
                            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx">Change Password</asp:HyperLink></span>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="Administrator">
                    <ContentTemplate>
                        <asp:CreateUserWizard ID="CreateUserWizard1" runat="server" Font-Names="Arial">
                            <WizardSteps>
                                <asp:CreateUserWizardStep runat="server">
                                </asp:CreateUserWizardStep>
                                <asp:CompleteWizardStep runat="server">
                                </asp:CompleteWizardStep>
                            </WizardSteps>
                            <StepNavigationTemplate>
                                <asp:Button ID="StepPreviousButton" runat="server" CausesValidation="False" CommandName="MovePrevious"
                                    Text="Previous" />
                                <asp:Button ID="StepNextButton" runat="server" CommandName="MoveNext" Text="Next" />
                            </StepNavigationTemplate>
                        </asp:CreateUserWizard>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="BusyBeeMWRTA">
                    <ContentTemplate>
                        <span style="font-family: Arial">Available phones for Busy Bee MWRTA Transportation:
                            <br />
                            <br />
                        </span>
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" DataKeyNames="GeolabID" OnSelectedIndexChanged ="IndexChange" style="font-family: Arial"
                                >
                            <Columns>
                                <asp:CommandField ShowSelectButton="True" />
                                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                                <asp:BoundField DataField="BusID" HeaderText="Bus ID" />
                                <asp:BoundField DataField="Device Serial Number" HeaderText="Device Serial Number"
                                        SortExpression="Device Serial Number" />
                                <asp:BoundField DataField="RouteName" HeaderText="RouteName" SortExpression="RouteName" />
                                <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" SortExpression="ModifiedLast" />
                                <asp:BoundField DataField="DateModified" HeaderText="DateModified" SortExpression="DateModified" />
                            </Columns>
                        </asp:GridView>
                        <span style="font-family: Arial">
                        <span></span></span>
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                            <UpdateParameters>
                                <asp:Parameter Direction="ReturnValue" Name="RETURN_VALUE" Type="Int32" />
                            </UpdateParameters>
                            <SelectParameters>
                                <asp:Parameter DefaultValue="BusyBeeMWRTA" Name="Carrier" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <span style="font-family: Arial"></span>
                        <span>
                            <br />
                            <span style="font-family: Arial"> </span></span>
                        <br />
                        <span style="font-family: Arial">Phone: </span>
                        <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label><br />
                        <br />
                        <span style="font-family: Arial">Bus ID: </span>
                        <asp:TextBox ID="TextBox1" runat="server" MaxLength="7"></asp:TextBox>
                        <span style="font-family: Arial">(7 Character Max)</span><br />
                        <br />
                        <span style="font-family: Arial">Route:</span><asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource2"
                                DataTextField="Route" DataValueField="Route" EnableViewState="False">
                        </asp:DropDownList><asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:Parameter Name="Carrier" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <span style="font-family: Arial"></span>
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" ValidationGroup="Group1" /><br />
                        <span
                                style="font-family: Arial">
                                <br />
                            </span>
                        <br />
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx" Font-Names="Arial">Change Password</asp:HyperLink><span
                            style="font-family: Arial"> </span>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="BAT">
                    <ContentTemplate>
                        Available phones for Brockton Area Transportation:
                        <br />
                        <br />
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" DataKeyNames="GeolabID" OnSelectedIndexChanged ="IndexChange"
                                >
                            <Columns>
                                <asp:CommandField ShowSelectButton="True" />
                                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                                <asp:BoundField DataField="BusID" HeaderText="Bus ID" SortExpression="BusID" />
                                <asp:BoundField DataField="Device Serial Number" HeaderText="Device Serial Number"
                                        SortExpression="Device Serial Number" />
                                <asp:BoundField DataField="RouteName" HeaderText="RouteName" SortExpression="RouteName" />
                                <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" SortExpression="ModifiedLast" />
                                <asp:BoundField DataField="DateModified" HeaderText="DateModified" SortExpression="DateModified" />
                            </Columns>
                        </asp:GridView>
                        &nbsp;<br />
                        <br />
                        <br />
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:Parameter DefaultValue="BAT" Name="Carrier" Type="String" />
                            </SelectParameters>
                            <UpdateParameters>
                                <asp:Parameter Direction="ReturnValue" Name="RETURN_VALUE" Type="Int32" />
                                <asp:Parameter Name="GeolabID" Type="String" />
                                <asp:Parameter Name="Routename" Type="String" />
                                <asp:Parameter Name="Username" Type="String" />
                                <asp:Parameter Name="Date" Type="DateTime" />
                                <asp:Parameter Name="BusID" Type="String" />
                            </UpdateParameters>
                        </asp:SqlDataSource>
                        <br />
                        Phone:
                        <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label><br />
                        <br />
                        Bus ID:
                        <asp:TextBox ID="TextBox1" runat="server" MaxLength="7"></asp:TextBox><br />
                        <br />
                        Route:<asp:DropDownList ID="DropDownList1" runat="server" DataSourceID="SqlDataSource2"
                                DataTextField="Route" DataValueField="Route">
                        </asp:DropDownList><asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:Parameter DefaultValue="BAT" Name="Carrier" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" ValidationGroup="Group1" /><br />
                        &nbsp;<br />
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx">Change Password</asp:HyperLink>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="SouthPortland">
                    <ContentTemplate>
                        <span class="style1">Available phones for South Portland Transportation: </span>
                        <br class="style1" />
                        <br class="style1" />
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                            CssClass="style1" DataKeyNames="GeolabID" DataSourceID="SqlDataSource1" 
                            OnSelectedIndexChanged="IndexChange">
                            <Columns>
                                <asp:CommandField ShowSelectButton="True" />
                                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" 
                                    SortExpression="GeolabID" />
                                <asp:BoundField DataField="BusID" HeaderText="Bus ID" SortExpression="BusID" />
                                <asp:BoundField DataField="Device Serial Number" 
                                    HeaderText="Device Serial Number" SortExpression="Device Serial Number" />
                                <asp:BoundField DataField="RouteName" HeaderText="RouteName" 
                                    SortExpression="RouteName" />
                                <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" 
                                    SortExpression="ModifiedLast" />
                                <asp:BoundField DataField="DateModified" HeaderText="DateModified" 
                                    SortExpression="DateModified" />
                            </Columns>
                        </asp:GridView>
                        <span class="style1">&nbsp;</span><br class="style1" />
                        <br class="style1" />
                        <br class="style1" />
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>" 
                            SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" 
                            UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:ControlParameter ControlID="Label3" DefaultValue="SouthPortland" Name="Carrier" 
                                    PropertyName="Text" Type="String" />
                            </SelectParameters>
                            <UpdateParameters>
                                <asp:Parameter Direction="ReturnValue" Name="RETURN_VALUE" Type="Int32" />
                                <asp:Parameter Name="GeolabID" Type="String" />
                                <asp:Parameter Name="Routename" Type="String" />
                                <asp:Parameter Name="Username" Type="String" />
                                <asp:Parameter Name="Date" Type="DateTime" />
                                <asp:Parameter Name="BusID" Type="String" />
                            </UpdateParameters>
                        </asp:SqlDataSource>
                        <br class="style1" />
                        <span class="style1">Phone:
                        <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label>
                        </span>
                        <br class="style1" />
                        <br class="style1" />
                        <span class="style1">Bus ID:
                        <asp:TextBox ID="TextBox1" runat="server" MaxLength="7"></asp:TextBox>
                        </span>
                        <br class="style1" />
                        <br class="style1" />
                        <span class="style1">Route:<asp:DropDownList ID="DropDownList1" runat="server" 
                            DataSourceID="SqlDataSource2" DataTextField="Route" DataValueField="Route">
                        </asp:DropDownList>
                        </span>
                        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>" 
                            SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:ControlParameter ControlID="Label3" DefaultValue="SouthPortland" Name="Carrier" 
                                    PropertyName="Text" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <span class="style1">
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" 
                            ValidationGroup="Group1" />
                        </span>
                        <br class="style1" />
&nbsp;<br class="style1" />
                        <span class="style1">
                        <asp:HyperLink ID="HyperLink1" runat="server" 
                            NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx">Change 
                        Password</asp:HyperLink>
                        </span>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="NorthernTier">
                    <ContentTemplate>
                        <span class="style1">Available phones for NorthernTier Transportation: </span>
                        <br class="style1" />
                        <br class="style1" />
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                            CssClass="style1" DataKeyNames="GeolabID" DataSourceID="SqlDataSource1" 
                            OnSelectedIndexChanged="IndexChange">
                            <Columns>
                                <asp:CommandField ShowSelectButton="True" />
                                <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" 
                                    SortExpression="GeolabID" />
                                <asp:BoundField DataField="BusID" HeaderText="Bus ID" SortExpression="BusID" />
                                <asp:BoundField DataField="Device Serial Number" 
                                    HeaderText="Device Serial Number" SortExpression="Device Serial Number" />
                                <asp:BoundField DataField="RouteName" HeaderText="RouteName" 
                                    SortExpression="RouteName" />
                                <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" 
                                    SortExpression="ModifiedLast" />
                                <asp:BoundField DataField="DateModified" HeaderText="DateModified" 
                                    SortExpression="DateModified" />
                            </Columns>
                        </asp:GridView>
                        <span class="style1">&nbsp;</span><br class="style1" />
                        <br class="style1" />
                        <br class="style1" />
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>" 
                            SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" 
                            UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:ControlParameter ControlID="Label3" DefaultValue="" Name="Carrier" 
                                    PropertyName="Text" Type="String" />
                            </SelectParameters>
                            <UpdateParameters>
                                <asp:Parameter Direction="ReturnValue" Name="RETURN_VALUE" Type="Int32" />
                                <asp:Parameter Name="GeolabID" Type="String" />
                                <asp:Parameter Name="Routename" Type="String" />
                                <asp:Parameter Name="Username" Type="String" />
                                <asp:Parameter Name="Date" Type="DateTime" />
                                <asp:Parameter Name="BusID" Type="String" />
                            </UpdateParameters>
                        </asp:SqlDataSource>
                        <br class="style1" />
                        <span class="style1">Phone:
                        <asp:Label ID="Label2" runat="server" Text="None Selected"></asp:Label>
                        </span>
                        <br class="style1" />
                        <br class="style1" />
                        <span class="style1">Bus ID:
                        <asp:TextBox ID="TextBox1" runat="server" MaxLength="7"></asp:TextBox>
                        </span>
                        <br class="style1" />
                        <br class="style1" />
                        <span class="style1">Route:<asp:DropDownList ID="DropDownList1" runat="server" 
                            DataSourceID="SqlDataSource2" DataTextField="Route" DataValueField="Route">
                        </asp:DropDownList>
                        </span>
                        <asp:SqlDataSource ID="SqlDataSource2" runat="server" 
                            ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>" 
                            SelectCommand="sp_SelectAvailableRoutes" SelectCommandType="StoredProcedure">
                            <SelectParameters>
                                <asp:ControlParameter ControlID="Label3" DefaultValue="" Name="Carrier" 
                                    PropertyName="Text" Type="String" />
                            </SelectParameters>
                        </asp:SqlDataSource>
                        <span class="style1">
                        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Update" 
                            ValidationGroup="Group1" />
                        </span>
                        <br class="style1" />
                        &nbsp;<br class="style1" />
                        <span class="style1">
                        <asp:HyperLink ID="HyperLink1" runat="server" 
                            NavigateUrl="/MobilityManagement/Authenticated/ChangePassword.aspx">Change 
                        Password</asp:HyperLink>
                        </span>
                    </ContentTemplate>
                </asp:RoleGroup>
            </RoleGroups>
        </asp:LoginView>
        <br />
        <br />
        <br />
        
        </div>
    </form>
    
</body>
</html>
