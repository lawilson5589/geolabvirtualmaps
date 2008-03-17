using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using net.mappoint.staging;
using System.Text;

public partial class pda_status : System.Web.UI.Page
{
    private static Geolab.MapPointCredentials global = new Geolab.MapPointCredentials();
    protected void Page_Load(object sender, EventArgs e)
    {
        InfoRetrieved.Text = System.DateTime.Now.ToString();

    }
    protected void Refresher_Click(object sender, EventArgs e)
    {
        Response.Redirect(Page.Request.Url.ToString());
    }
    protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {
            DateTime recordtime = Convert.ToDateTime(e.Row.Cells[1].Text);
            TimeSpan timespan1 = new TimeSpan(0, 1, 0);
            bool current = true;
            string lat = e.Row.Cells[4].Text;
            double dlat = double.Parse(lat);
            string lng = e.Row.Cells[5].Text;
            double dlng = double.Parse(lng);
            LatLong latlong = new LatLong();
            latlong.Latitude = dlat;
            latlong.Longitude = dlng;
            string latlong2 = String.Concat("Lat: ", lat, " Lng: ", lng);


            if ((recordtime < (DateTime)System.DateTime.Now.Subtract(timespan1)))
            {
                e.Row.Visible = false;
                current = false;
            }
            if (current == true)
            {
                try
                {
                    int bearing = Convert.ToInt32(e.Row.Cells[7].Text);
                    if ((bearing >= 20) && (bearing <= 65))
                    {
                        e.Row.Cells[6].Text = "NE";
                    }
                    else if ((bearing > 65) && (bearing <= 110))
                    {
                        e.Row.Cells[6].Text = "E";
                    }
                    else if ((bearing > 110) && (bearing <= 155))
                    {
                        e.Row.Cells[6].Text = "SE";
                    }
                    else if ((bearing > 155) && (bearing <= 200))
                    {
                        e.Row.Cells[6].Text = "S";
                    }
                    else if ((bearing > 200) && (bearing <= 245))
                    {
                        e.Row.Cells[6].Text = "SW";
                    }
                    else if ((bearing > 245) && (bearing <= 290))
                    {
                        e.Row.Cells[6].Text = "W";
                    }
                    else if ((bearing > 290) && (bearing <= 335))
                    {
                        e.Row.Cells[6].Text = "NW";
                    }
                    else if ((bearing > 335) && (bearing <= 360))
                    {
                        e.Row.Cells[6].Text = "N";
                    }
                    else if ((bearing >= 0) && (bearing < 20))
                    {
                        e.Row.Cells[6].Text = "N";
                    }
                }
                catch (Exception f)
                {
                    e.Row.Cells[6].Text = "Null";
                }




                //Define get info options object
                GetInfoOptions options = new GetInfoOptions();
                //I'm looking only for cities
                options.IncludeAllEntityTypes = false;
                options.EntityTypesToReturn = new string[] { "PopulatedPlace" };


                //Define a field to hold returned locations
                //Location[] returnedLocations;
                ReverseGeo.SingleReverseGeoCode returnedLocations;
                //Call GetLocationInfo with "MapPoint.NA" data source
                try
                {
                    //MAPPOINT CALL
                    //returnedLocations = global.FindService.GetLocationInfo(latlong, "MapPoint.NA", options);
                    //e.Row.Cells[4].Text = returnedLocations[0].Entity.DisplayName;
                    // e.Row.Cells[4].Text = latlong2;
                    returnedLocations = ReverseGeo.GeoNamesAddress.GetAddress(dlat, dlng);
                    String result = String.Concat(returnedLocations.address.streetNumber, " ", returnedLocations.address.street, " ", returnedLocations.address.placename, " ,", returnedLocations.address.adminCode1, " ", returnedLocations.address.postalcode);

                    e.Row.Cells[4].Text = result;
                }
                catch (Exception f)
                {
                    e.Row.Cells[4].Text = latlong2;
                }

                e.Row.Cells[4].Visible = false;
                e.Row.Cells[5].Visible = false;
                e.Row.Cells[7].Visible = false;
            }
        }
    }
}
