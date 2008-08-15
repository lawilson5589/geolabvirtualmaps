<%@ Page Language="C#" MasterPageFile="~/MasterPages/MasterPage2.master" AutoEventWireup="true" CodeFile="Default.aspx.cs"
    Inherits="DefaultMain" Title="GeoGraphics Lab Virtual Maps" StylesheetTheme="Main" Theme="Main" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder" runat="Server">
    <div style="margin:0 auto 0 auto;width:100%; padding-left:50px;">
        <table border="0" cellpadding="0" cellspacing="0" style="WIDTH: 849px">
            <tr>
                <td style="WIDTH: 843px"><div style="float:left"><asp:Image ID="ImageIcon" runat="server" ImageUrl="images/Map_content/Map-128x128.gif"  /></div><div style="float:left;font-size:20pt;margin-top:45px">Automatic Vehicle Location Projects (AVL)&nbsp;</div></td>
            </tr>
            <tr>
                <td style="text-indent:135px; width: 843px;">
                    <h2 class="links">
                        MetroWest (Boston MA) Mobility Manager&nbsp;</h2>
                    <h3>
                        <a href="MetroWest.aspx">Microsoft Virtual Earth</a></h3>
                    <h3>
                        <a href="http://maps.google.com/ig/add?synd=mpl&pid=mpl&moduleurl=http://www.geographicslab.org/metrowest.xml">Google Mapplets</a></h3>
                    <h3>
                        <a href="pda/metrowest.aspx">PDA Display</a></h3>
                </td>
            </tr>
            <tr>
                <td style="text-indent:135px; width: 843px;">
                    <h2 class="links" style="text-align: left">
                        Cape Cod Transportation Partners
                            Integrated Intermodal AVL</h2>
                    <h3>
                        <a href="CapeCodRegionalTransitAuthority_Legacy.aspx">Microsoft Virtual Earth</a></h3>
                    <h3>
                        <a href="http://maps.google.com/ig/add?synd=mpl&pid=mpl&moduleurl=http://www.geographicslab.org/capecod.xml">Google Mapplets</a></h3>
                    <h3>
                        <a href="pda/ccrta.aspx">PDA Display</a></h3>
                    <h3>
                        </h3>
                </td>
            </tr>
            
            
            <tr>
                <td style="text-indent:135px; width: 843px; height: 42px">
                <h2 class="links">
                Brockton Area Mobility Manager</h2>
                <h3> <a href="Brockton.aspx">Microsoft Virtual Earth</a></h3>
                <h3> <a href="http://maps.google.com/ig/add?synd=mpl&pid=mpl&moduleurl=http://www.geographicslab.org/brockton.xml">Google Mapplets</a></h3>
                    <h3>
                        <a href="pda/brockton.aspx">PDA Display</a></h3>
                    <h3>
                        </h3>
                </td>
            </tr>
            
            <tr>
                <td style="text-indent:135px; width: 843px; height: 42px;">
                    <h2 class="links">
                        Northern (MA) Transportation Tier Mobility Manager&nbsp;</h2>
                    <h3>
                        <a href="NorthernTier.aspx">Microsoft Virtual Earth</a></h3>
                    <h3>
                        <a href="http://maps.google.com/ig/add?synd=mpl&pid=mpl&moduleurl=http://www.geographicslab.org/northerntier.xml">Google Mapplets</a></h3>
                    <h3>
                        <a href="pda/northerntier.aspx">PDA Display</a></h3>
                    <h3>
                        </h3>
                </td>
            </tr>
            
            <tr>
                <td style="text-indent:135px; width: 843px; height: 42px;">
                    <h2 class="links">
                        South Portland (ME) Mobility Manager&nbsp;</h2>
                    <%-- %><h3>
                        <a href="NorthernTier.aspx">Microsoft Virtual Earth</a></h3> --%>
                    <%--<h3>
                        <a href="http://maps.google.com/ig/add?synd=mpl&pid=mpl&moduleurl=http://www.geographicslab.org/metrowest.xml">Google Mapplets</a></h3>--%>
                    <h3>
                        <a href="pda/southportland.aspx">PDA Display</a></h3>
                    <h3>
                        </h3>
                </td>
            </tr>
            
            <tr>
                <td style="text-indent:135px; width: 843px; height: 42px;">

                    <h2 class="links">
                        New England R&amp;D AVL</h2>
                    <h3> <a href="GeoGraphicsLab.aspx">Microsoft Virtual Earth</a></h3>
                    <h3> <a href="pda/geolab.aspx">PDA Display</a></h3>
                    <h3> </h3>
                </td>
            </tr>
         
            <tr>
                <td style="text-indent:135px; width: 843px; height: 42px;">
                    <h2 class="links">
                       Southeastern MA Emergency Management AVL</h2>
                    <h3> <a href="SouthEastern.aspx">Microsoft Virtual Earth</a></h3>
                    <h3> <a href="pda/emergency.aspx">PDA Display</a></h3>
                    <h3></h3>
                </td>
            </tr>
          

            <tr>
                <td style="text-indent:135px; width: 843px;">
                    <span style="font-size: 14pt; color: #0000ff; text-decoration: underline"></span>
                    <h2 class="links">
                        Bridgewater State Transit AVL</h2>
                    <h3> <a href="Bridgew.aspx">Microsoft Virtual Earth </a></h3>
                    <h3> <a href="pda/bridgewater.aspx">PDA Display</a></h3>
                    <h3></h3>
                                    </td>
            </tr>  
            <tr>
                <td style="text-indent:135px;height:50px; width: 843px;">
                                    </td>
            </tr>    
        </table>
    </div>
</asp:Content>
