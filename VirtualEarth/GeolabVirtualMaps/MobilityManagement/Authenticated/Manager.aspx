<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Manager.aspx.cs" Inherits="MobilityMangement_Authenticated_Manager" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" >
<head runat="server">
    <title>Untitled Page</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <span style="font-family: Arial">
        Welcome, </span>
        
        <asp:LoginName ID="LoginName1" runat="server" Font-Names="Arial" />
        <span style="font-family: Arial">
        (</span><asp:Label ID="Label3" runat="server" Text="Label" Font-Names="Arial"></asp:Label><span style="font-family: Arial">)</span><asp:LoginView ID="LoginView1" runat="server">
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
                                    <asp:BoundField DataField="Device Serial Number" HeaderText="Device Serial Number"
                                        SortExpression="Device Serial Number" />
                                    <asp:BoundField DataField="RouteName" HeaderText="RouteName" SortExpression="RouteName" />
                                    <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" SortExpression="ModifiedLast" />
                                    <asp:BoundField DataField="DateModified" HeaderText="DateModified" SortExpression="DateModified" />
                                </Columns>
                            </asp:GridView>
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                                <UpdateParameters>
                                    <asp:Parameter Name="GeolabID" Type="String" />
                                    <asp:Parameter Name="Routename" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Date" Type="DateTime" />
                                </UpdateParameters>
                                <SelectParameters>
                                    <asp:Parameter DefaultValue="MWRTA" Name="Carrier" Type="String" />
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
                            &nbsp;</span>
                    </ContentTemplate>
                </asp:RoleGroup>
                <asp:RoleGroup Roles="CapeCod">
                    <ContentTemplate>
                        &nbsp;
                        <br />
                        <span style="width: 100%; font-family: Arial">Available phones for CapeCod Transportation:
                            <br />
                            <br />
                            <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" DataKeyNames="GeolabID" OnSelectedIndexChanged ="IndexChange"
                                >
                                <Columns>
                                    <asp:CommandField ShowSelectButton="True" />
                                    <asp:BoundField DataField="GeolabID" HeaderText="GeolabID" SortExpression="GeolabID" />
                                    <asp:BoundField DataField="Device Serial Number" HeaderText="Device Serial Number"
                                        SortExpression="Device Serial Number" />
                                    <asp:BoundField DataField="RouteName" HeaderText="RouteName" SortExpression="RouteName" />
                                    <asp:BoundField DataField="ModifiedLast" HeaderText="ModifiedLast" SortExpression="ModifiedLast" />
                                    <asp:BoundField DataField="DateModified" HeaderText="DateModified" SortExpression="DateModified" />
                                </Columns>
                            </asp:GridView>
                            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:geolab_mdt2_capeConnectionString %>"
                                SelectCommand="SelectCurrentPhones" SelectCommandType="StoredProcedure" UpdateCommand="sp_UpdateRouteInfo" UpdateCommandType="StoredProcedure">
                                <UpdateParameters>
                                    <asp:Parameter Name="GeolabID" Type="String" />
                                    <asp:Parameter Name="Routename" Type="String" />
                                    <asp:Parameter Name="Username" Type="String" />
                                    <asp:Parameter Name="Date" Type="DateTime" />
                                </UpdateParameters>
                                <SelectParameters>
                                    <asp:Parameter DefaultValue="MWRTA" Name="Carrier" Type="String" />
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
                            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="/ChangePassword.aspx">Change Password</asp:HyperLink></span>
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
            </RoleGroups>
        </asp:LoginView>
        
        </div>
    </form>
</body>
</html>
