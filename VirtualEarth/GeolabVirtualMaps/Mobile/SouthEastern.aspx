<%@ Page Language="C#" AutoEventWireup="true" CodeFile="SouthEastern.aspx.cs" Inherits="Mobile_SouthEastern" %>
<%@ Register TagPrefix="mobile" Namespace="System.Web.UI.MobileControls" Assembly="System.Web.Mobile" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<body>
    <mobile:Form id="FormMain" runat="server" Action="~/Mobile/SouthEastern.aspx" Title="AVL">
        <mobile:Label ID="lblTitle" Runat="server" Alignment="Center">South Eastern</mobile:Label>
        <mobile:SelectionList ID="SelectionList1" Runat="server" SelectType="Radio" Alignment="Left" Title="Select Phone">
            <Item Text="GEO-047" Value="GEO047" />
            <Item Text="GEO-048" Value="GEO048" />
            <Item Text="GEO-049" Value="GEO049" />
            <Item Selected="True" Text="GEO-050" Value="GEO050" />
        </mobile:SelectionList>

    </mobile:Form>
</body>
</html>
