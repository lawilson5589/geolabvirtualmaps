using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Data.SqlClient;
using System.Text;
using VELibrary;


namespace Geolab
{


    /// <summary>
    /// Class for retrieving a VE collections from SQl Server
    /// </summary>
    public sealed class SqlVECollectionReader 
    {

        /// <summary>
        /// The method to retrieve VE PushPin object collection from SQL Server
        /// </summary>
        /// <param name="connectionString">SQl connection name</param>
        /// <param name="sqlSprocName">SQL Stored Procedure Name</param>
        /// <param name="mapID">Map ID of VE PushPin's</param>
        /// <param name="sb">StringBuilder reference for output</param>
        /// <returns>flag true if no errors</returns>
        public static bool RetrievePushPinCollection(String connectionString, String sqlSprocName, String mapID, ref StringBuilder sb)
        {
            SqlConnection sqlconnection = null;
            SqlCommand sqlcommand = null;
            try
            {
                sqlconnection = new SqlConnection(connectionString);
                sqlcommand = new SqlCommand(sqlSprocName, sqlconnection);

                sqlcommand.CommandType = CommandType.StoredProcedure;
                sqlcommand.Parameters.Add(new SqlParameter("@MapID", SqlDbType.VarChar));
                sqlcommand.Parameters["@MapID"].Value = mapID;
                sqlconnection.Open();
                SqlDataReader sqldatareader = sqlcommand.ExecuteReader();
                if (sqldatareader.HasRows)
                {
                    sb.AppendFormat("/*{0}*/", mapID); // BEGIN
                    sb.Append("collection=new Array();");
                    while (sqldatareader.Read()) // Add elements to array
                    {
                        VEPushpin pin = new VEPushpin(
                            new VELatLong(sqldatareader[VEShape_DbColumnNames.GeoRssPoint].ToString()),
                            sqldatareader[VEShape_DbColumnNames.Title].ToString(),
                            sqldatareader[VEShape_DbColumnNames.Description].ToString(),
                            sqldatareader[VEShape_DbColumnNames.IconUrl].ToString()
                        );
                        if (pin is VEPushpin) sb.AppendFormat("{0}Array.add(collection,pushpin);", pin.ToJson());
                    }
                }
                else
                {
                    sb.Append("/* Empty */");
                }
            }
            catch (SqlException sqlex)
            {
                System.Diagnostics.Trace.WriteLine(sqlex.Message);
                System.Diagnostics.Debug.WriteLine(sqlex.Message);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.WriteLine(ex.Message);
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            finally
            {
                if (sqlconnection != null) sqlconnection.Close();
            }
            return true;
        }

        /// <summary>
        /// The method to retrieve VE Polyline object from SQL Server
        /// </summary>
        /// <param name="connectionString">SQl connection name</param>
        /// <param name="sqlSprocName">SQL Stored Procedure Name</param>
        /// <param name="mapID">Map ID of VE polyline</param>
        /// <param name="sb">StringBuilder reference for output</param>
        /// <returns>flag true if no errors</returns>
        public static bool RetrievePolyLine(String connectionString, String sqlSprocName, String mapID, ref StringBuilder sb)
        {

            SqlConnection sqlconnection = null;
            SqlCommand sqlcommand = null;

            try
            {
                sqlconnection = new SqlConnection(connectionString);
                sqlcommand = new SqlCommand( sqlSprocName, sqlconnection);

                sqlcommand.CommandType = CommandType.StoredProcedure;
                sqlcommand.Parameters.Add(new SqlParameter("@MapID", SqlDbType.VarChar));
                sqlcommand.Parameters["@MapID"].Value = mapID;
                sqlconnection.Open();
                SqlDataReader sqldatareader = sqlcommand.ExecuteReader();
                if (sqldatareader.HasRows)
                {
                    sb.AppendFormat("/*{0}*/", mapID);
                    while (sqldatareader.Read())
                    {
                        VEColor color = new VEColor(sqldatareader[VEShape_DbColumnNames.Color].ToString());
                        byte width = Convert.ToByte(sqldatareader[VEShape_DbColumnNames.Width].ToString());
                        VEPolyline polyline = new VEPolyline(sqldatareader[VEShape_DbColumnNames.GeoRssLine].ToString(), sqldatareader[VEShape_DbColumnNames.Title].ToString(), color, width);

                        polyline.Description = sqldatareader[VEShape_DbColumnNames.Description].ToString();
                        polyline.CustomIcon = sqldatareader[VEShape_DbColumnNames.IconUrl].ToString();
                        String linestyle = sqldatareader[VEShape_DbColumnNames.LineStyle].ToString();
                        if (!linestyle.Equals(String.Empty))
                        {
                            polyline.LineStyle = linestyle; // Or use some styles like VEPlolyLineStyles.ShortDot
                        }
                        // The result in Javascript will be
                        // polyline = new VEShape(VEShapeType.Polyline, [new VELatLong(...), new VELatLong(..),  new VELatLong(...), new VELatLong(...)]);  
                        // polyline.SetLineColor(lineColor); Set the line color                  
                        // polyline.SetLineWidth(lineWidth); Set the line width    
                        sb.Append(polyline.ToJson());
                    }

                }
                else
                {
                    sb.Append("/* Empty */");
                }
            }
            catch (SqlException sqlex)
            {
                System.Diagnostics.Trace.WriteLine(sqlex.Message);
                System.Diagnostics.Debug.WriteLine(sqlex.Message);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Trace.WriteLine(ex.Message);
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
            finally
            {
                if (sqlconnection != null) sqlconnection.Close();
            }
            return true;
        }

        /// <summary>
        /// The method to formats VE Puship object (Vehicle type) from SQL Server
        /// </summary>
        /// <param name="sqldatareader">The sqlreader after SqlDataReader sqldatareader = sqlcommand.ExecuteReader();</param>
        /// <param name="output">StringBuilder reference to put output</param>
        /// <param name="flags">Vehicle info like pop-up title, Icon</param>
        /// <returns>true if method executed ok</returns>
        public static bool RetrieveVehicleData(ref SqlDataReader sqldatareader, ref StringBuilder output, VEVehicleInfoFlags flags)
        {
            if (sqldatareader.HasRows)
            {
                while (sqldatareader.Read())
                {
                    VEVehicle vehicle = new VEVehicle(flags);
                    String[] datetime = sqldatareader[AGPS_DbColumnNames.Datetime].ToString().Split(' ');

                    vehicle.Date = datetime[0];
                    vehicle.Time = String.Format("{0} {1}", datetime[1], datetime[2]);
                    vehicle.Latitude = Convert.ToDouble(sqldatareader[AGPS_DbColumnNames.Latitude].ToString());
                    vehicle.Longitude = Convert.ToDouble(sqldatareader[AGPS_DbColumnNames.Longitude].ToString());
                    vehicle.Accuracy = sqldatareader[AGPS_DbColumnNames.LatLonAccuracy].ToString();
                    vehicle.Speed = sqldatareader[AGPS_DbColumnNames.PositionSpeed].ToString();
                    vehicle.Heading = sqldatareader[AGPS_DbColumnNames.PositionHeading].ToString();
                    vehicle.SatelliteNumber = VEVehicle.GetSatteliteBars(sqldatareader[AGPS_DbColumnNames.SatelliteNumber].ToString());
                    vehicle.BatteryLevel = sqldatareader[AGPS_DbColumnNames.BatteryLevel].ToString();
                    vehicle.SignalStrength = sqldatareader[AGPS_DbColumnNames.SignalStrength].ToString();
                    vehicle.GeolabID = sqldatareader["GeolabID"].ToString().Trim();
                    vehicle.LocationInfo = vehicle.GeoCoding? vehicle.GetLocationInfo() : "";
                    try
                    {
                        vehicle.Froute = sqldatareader[AGPS_DbColumnNames.Froutename].ToString();
                    }
                    catch (SqlException sqlex)
                    {
                    }
                    try
                    {
                        if (sqldatareader.VisibleFieldCount == 14)
                        {
                            String bid = sqldatareader[AGPS_DbColumnNames.Busid].ToString();
                            if (bid != "")
                            {
                                vehicle.Busid = bid;
                            }
                        }
                    }
                    catch (SqlException sqlex)
                    {
                    }

                    output.AppendFormat("Array.add(collection, {0});", vehicle.ToJson());
                }
            }
            else
            {
                output.Append("/*Empty*/");
            }
            return true;
        }

        public static bool RetrieveVehicleXMLData(ref SqlDataReader sqldatareader, ref StringBuilder output, VEVehicleInfoFlags flags, bool displayXMLHeader, bool displayXMLFooter)
        {
            if (displayXMLHeader)
            {
                output.AppendFormat("<?xml version=\"1.0\" encoding=\"utf-8\" ?>");
                output.AppendFormat("<markers>");
            }
            if (sqldatareader.HasRows)
            {
                while (sqldatareader.Read())
                {
                    VEVehicle vehicle = new VEVehicle(flags);
                    String[] datetime = sqldatareader[AGPS_DbColumnNames.Datetime].ToString().Split(' ');

                    vehicle.Date = datetime[0];
                    vehicle.Time = String.Format("{0} {1}", datetime[1], datetime[2]);
                    vehicle.Latitude = Convert.ToDouble(sqldatareader[AGPS_DbColumnNames.Latitude].ToString());
                    vehicle.Longitude = Convert.ToDouble(sqldatareader[AGPS_DbColumnNames.Longitude].ToString());
                    vehicle.Accuracy = sqldatareader[AGPS_DbColumnNames.LatLonAccuracy].ToString();
                    vehicle.Speed = sqldatareader[AGPS_DbColumnNames.PositionSpeed].ToString();
                    vehicle.Heading = sqldatareader[AGPS_DbColumnNames.PositionHeading].ToString();
                    vehicle.SatelliteNumber = VEVehicle.GetSatteliteBars(sqldatareader[AGPS_DbColumnNames.SatelliteNumber].ToString());
                    vehicle.BatteryLevel = sqldatareader[AGPS_DbColumnNames.BatteryLevel].ToString();
                    vehicle.SignalStrength = sqldatareader[AGPS_DbColumnNames.SignalStrength].ToString();
                    vehicle.GeolabID = sqldatareader["GeolabID"].ToString().Trim();
                    vehicle.LocationInfo = vehicle.GeoCoding ? vehicle.GetLocationInfo() : "";
                    try
                    {
                        vehicle.Froute = sqldatareader[AGPS_DbColumnNames.Froutename].ToString();
                    }
                    catch (SqlException sqlex)
                    {
                        output.AppendFormat(sqlex.ToString());
                    }
                    if (vehicle.GeolabID.Length > 3)
                    {
                        vehicle.GeolabID = vehicle.GeolabID.Substring(3);
                    }
                    output.AppendFormat("<marker lat =\"{0}\" lng =\"{1}\" unit_id=\"{2}\" />", vehicle.Latitude, vehicle.Longitude, vehicle.GeolabID);
                }

            }
            else
            { }

            if (displayXMLFooter)
            {
                output.AppendFormat("</markers>");
            }
            return true;
        }
    }

}