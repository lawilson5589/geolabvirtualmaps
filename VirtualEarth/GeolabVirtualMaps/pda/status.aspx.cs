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
        Response.AppendHeader("Refresh", "30; URL=status.aspx");
    }
    protected void GridView1_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        if (e.Row.RowType == DataControlRowType.DataRow)
        {

            string lat = e.Row.Cells[4].Text;
            double dlat = double.Parse(lat);
            string lng = e.Row.Cells[5].Text;
            double dlng = double.Parse(lng);
            LatLong latlong = new LatLong();
            latlong.Latitude = dlat;
            latlong.Longitude = dlng;


            //Define get info options object
            GetInfoOptions options = new GetInfoOptions();
            //I'm looking only for cities
            options.IncludeAllEntityTypes = false;
            options.EntityTypesToReturn = new string[] { "PopulatedPlace" };


            //Define a field to hold returned locations
            Location[] returnedLocations;
            //Call GetLocationInfo with "MapPoint.NA" data source

            returnedLocations = global.FindService.GetLocationInfo(latlong, "MapPoint.NA", options);

            e.Row.Cells[3].Text = returnedLocations[0].Entity.DisplayName;
        }
    }
}
