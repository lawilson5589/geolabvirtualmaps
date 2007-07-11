<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="Mobile_Default" %>
<%@ Register TagPrefix="mobile" Namespace="System.Web.UI.MobileControls" Assembly="System.Web.Mobile" %>

<html xmlns="http://www.w3.org/1999/xhtml" >
<body>
    <mobile:Form id="FormMain" runat="server"><mobile:Label ID="lblTitle" Runat="server" Alignment="Center">GeoGraphics Lab</mobile:Label>&nbsp; <mobile:Link
        ID="lnkSouthEastern" Runat="server" NavigateUrl="~/Mobile/SouthEastern.aspx">South Eastern  AVL</mobile:Link></mobile:Form>
</body>
</html>
