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
        <h2>
            Information Retrieved at:
            <asp:Label ID="InfoRetrieved" runat="server" Text="Label"></asp:Label></h2>
        <p>
            <asp:Button ID="Refresher" runat="server" OnClick="Refresher_Click" Text="Refresh" />&nbsp;</p>
        <p>
            MetroWest Transit Authority</p>
         
                   <asp:Table ID="Table1" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
                   </asp:Table>

          
        <p>
            BusyBee Paratransit Services</p>
  
            <asp:Table ID="Table2" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>

        <p>
            Bridgewater State College Transit</p>

            <asp:Table ID="Table3" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>

        <p>
            Brockton Area Transit Paratransit</p>
    
            <asp:Table ID="Table4" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>

 
    
        <p>
            Cape Cod 8000 Series/6000 Series</p>
   
            <asp:Table ID="Table5" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>
    
            
                    <p>
                        Cape Cod MDTs</p>

            <asp:Table ID="Table6" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>

                    <p>
                        Emergency Services</p>

            <asp:Table ID="Table7" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>

                    <p>
                        Geolab Development Phones</p>

            <asp:Table ID="Table8" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>
     
                    <p>
                        Geolab Paratransit Development Phones</p>
  
            <asp:Table ID="Table9" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>
       
                    <p>
                        NorthernTier Transportation </p>
       
            <asp:Table ID="Table10" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
            </asp:Table>
   
                    <p>
                        MWRTA Commuter Rail</p>
        <asp:Table ID="Table11" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
        </asp:Table>
        <p>
            South Portland Transportation
        </p>
        <asp:Table ID="Table12" runat="server" BorderStyle="Solid" CellPadding="0" 
            CellSpacing="0" GridLines="Both">
        </asp:Table>     
    </div>
    </form>
</body>
</html>
