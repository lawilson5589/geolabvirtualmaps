using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Data.SqlClient;

namespace Geolab
{

    /// <summary>
    /// Summary description for PDAData
    /// </summary>
    public class PDAData
    {
        public PDAData()
        {

        }

        public void RetreivePDATable(String provider, ref Table t1)
        {
            String connectionstring;


            String storedprocedurename;
            //Table t1 = new Table();
            t1.GridLines = GridLines.Both;
            t1.BorderStyle = BorderStyle.Solid;
            bool containsbusid = true;


            switch (provider)
            {
                case "MWRTA":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_Framingham";
                    break;
                case "BusyBeeMWRTA":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_BusyBeeMWRTA";
                    break;
                case "Bridgew":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_Bridgew";
                    break;
                case "Brockton":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_Brockton";
                    break;
                case "CapeCod":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_CapeCod";
                    containsbusid = false;
                    break;
                case "CapeCodMDT":
                    connectionstring = ConnectionString.CapeCodLegacy;
                    storedprocedurename = "dbo.sp_SelectAVL_CapeCodePartners";
                    break;
                case "Emergency":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_SouthEastern";
                    break;
                case "GeoLab":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_GeoLab";
                    containsbusid = false;
                    break;
                case "GeoLabParatransit":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_GeoLabParatransit";
                    containsbusid = false;
                    break;
                case "NorthernTier":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_NorthernTier";
                    break;
                case "RailsMWRTA":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_RailsMWRTA";
                    break;
                case "SouthPortland":
                    connectionstring = ConnectionString.Geolab_mdt2_cape;
                    storedprocedurename = "dbo.sp_SelectAVL_SouthPortland";
                    break;
                default:
                    connectionstring = null;
                    storedprocedurename = null;
                    break;
            }
            SqlConnection sqlconnect = new SqlConnection(connectionstring);
            SqlCommand sqlcommand = new SqlCommand(storedprocedurename, sqlconnect);
            sqlcommand.CommandType = CommandType.StoredProcedure;
            sqlconnect.Open();

            SqlDataReader sr = sqlcommand.ExecuteReader();
            if (sr.HasRows)
            {
                TableCell[] header = new TableCell[6];
                for (int i = 0; i < header.Length; i++)
                {
                    header[i] = new TableCell();
                    header[i].Font.Name = "Arial";
                    header[i].Font.Bold = true;
                }
                    
                TableRow headerrow = new TableRow();
                header[0].Text = "Route Name";
                header[1].Text = "Bus ID";
                header[2].Text = "Time";
                header[3].Text = "Speed";
                header[4].Text = "Location";
                header[5].Text = "Heading";
                headerrow.Cells.AddRange(header);
                t1.Rows.Add(headerrow);

                while (sr.Read())
                {
                    ReverseGeo.SingleReverseGeoCode returnedLocations = new ReverseGeo.SingleReverseGeoCode();
                    TableCell[] cells = new TableCell[6];
                    for (int i = 0; i < cells.Length; i++)
                        cells[i] = new TableCell();
                    TableRow row = new TableRow();
                    DateTime dt = Convert.ToDateTime(sr[AGPS_DbColumnNames.Datetime].ToString());
                    String dtstring;
                    
                    if (dt.Date == DateTime.Now.Date)
                        dtstring = String.Format("{0:t}", dt);
                    else
                        dtstring = String.Format("{0:g}", dt);
                    string test = sr[AGPS_DbColumnNames.PositionHeading].ToString();
                    String bearingstring;
                    if (!String.IsNullOrEmpty(test))
                    {
                        int bearing = Convert.ToInt32(test);


                        if ((bearing >= 20) && (bearing <= 65))
                            bearingstring = String.Concat("NE (", bearing, (char)176, ")");

                        else if ((bearing > 65) && (bearing <= 110))
                            bearingstring = String.Concat("E (", bearing, (char)176, ")");

                        else if ((bearing > 110) && (bearing <= 155))
                            bearingstring = String.Concat("SE (", bearing, (char)176, ")");

                        else if ((bearing > 155) && (bearing <= 200))
                            bearingstring = String.Concat("S (", bearing, (char)176, ")");

                        else if ((bearing > 200) && (bearing <= 245))
                            bearingstring = String.Concat("SW (", bearing, (char)176, ")");

                        else if ((bearing > 245) && (bearing <= 290))
                            bearingstring = String.Concat("W (", bearing, (char)176, ")");

                        else if ((bearing > 290) && (bearing <= 335))
                            bearingstring = String.Concat("NW (", bearing, (char)176, ")");

                        else if ((bearing > 335) && (bearing <= 360))
                            bearingstring = String.Concat("N (", bearing, (char)176, ")");

                        else if ((bearing >= 0) && (bearing < 20))
                            bearingstring = String.Concat("N (", bearing, (char)176, ")");

                        else
                            bearingstring = String.Concat(bearing, (char)176);
                    }
                    else
                        bearingstring = " ";
                    

                    

                    String result;
                    returnedLocations = ReverseGeo.GeoNamesAddress.GetAddress(Convert.ToDouble(sr[AGPS_DbColumnNames.Latitude].ToString()), Convert.ToDouble(sr[AGPS_DbColumnNames.Longitude].ToString()));
                    if (returnedLocations.address != null || returnedLocations.address.ToString() != "")
                        result = String.Concat(returnedLocations.address.streetNumber, " ", returnedLocations.address.street, " ", returnedLocations.address.placename, ",", returnedLocations.address.adminCode1, " ", returnedLocations.address.postalcode);
                    else
                        result = "";
                    cells[0].Text = sr[AGPS_DbColumnNames.Froutename].ToString();
                    if (containsbusid)
                        cells[1].Text = sr[AGPS_DbColumnNames.Busid].ToString();
                    else
                        cells[1].Text = sr[AGPS_DbColumnNames.GeolabID].ToString().Remove(0,3);
                    cells[2].Text = dtstring;
                    String speed = sr[AGPS_DbColumnNames.PositionSpeed].ToString();
                    cells[3].Text = !(String.IsNullOrEmpty(sr[AGPS_DbColumnNames.PositionSpeed].ToString())) ? String.Format("{0} MPH", sr[AGPS_DbColumnNames.PositionSpeed].ToString()) : " ";
                    cells[4].Text = result;
                    cells[5].Text = bearingstring;
                    row.Cells.AddRange(cells);
                    t1.Rows.Add(row);
                }
            }
        }
    }
}