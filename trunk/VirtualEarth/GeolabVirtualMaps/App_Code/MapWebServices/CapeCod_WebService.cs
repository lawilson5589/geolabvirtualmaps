using System;
using System.Web;
using System.Collections;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Web.Script.Services;
using System.Data.SqlClient;
using System.Data;
using System.Text;
using System.Web.Configuration;
using Geolab;
using Microsoft.Security.Application;
using System.Web.UI.WebControls;

namespace Geolab
{
    /// <summary>
    /// Summary description for WebService
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.None)]
    [System.Web.Script.Services.ScriptService]
    public sealed class CapeCod_WebService : System.Web.Services.WebService
    {

        public CapeCod_WebService()
        {
            
            //Uncomment the following line if using designed components 
            //InitializeComponent(); 
        }

        /// <summary>
        /// Access the following webservice Geolab.CapeCod_WebService.BusStops('Ornage', onSuccessFunction ....);
        /// </summary>
        /// <param name="mapID"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(UseHttpGet = true)]
        public string BusStops(String mapID)
        {
            StringBuilder sb = new StringBuilder();
            switch (mapID)
            {
                case "Orange":
                case "Sealine":
                case "PTown":
                case "Flex":
                case "H20":
                case "Whoosh":
                case "Yarmouth":
                case "Hyannis":
                //case "Villager":
                case "Barnstable":
                case "Woosh":
                case "BSCRoute1":
                case "BSCRoute2":
                case "BSCRoute28":
                case "SL_winter":
                case "LIFT2":
                case "LIFT3":
                case "LIFT4":
                case "LIFT5":
                case "LIFT6":
                case "LIFT7":
                case "ROUTE9":
                case "ROUTE10":
                case "NatickCBus":
                case "ROUTE11":
                case "GLinkRoute1":
                case "GLinkRoute2":
                case "GLinkRoute3":
                case "SPRoute1":

                    SqlVECollectionReader.RetrievePushPinCollection(ConnectionString.CapeCod, "sp_SelectVEPushPins", mapID, ref sb);
                    break;
                default:
                    sb.Append("/*Error. Unknown route.*/");
                    break;
            }
            return sb.ToString();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="mapID"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json , UseHttpGet = false)]
        public string BusLine(String mapID)
        {
            StringBuilder sb = new StringBuilder();
            switch (mapID)
            {
                case "Orange":
                case "Sealine":
                case "PTown":
                case "Flex":
                case "H20":
                case "Whoosh":
                case "Yarmouth":
                case "Hyannis":
                //case "Villager":
                case "Barnstable":
                case "BSCRoute1":
                case "BSCRoute2":
                case "BSCRoute28":
                case "SL_winter":
                case "LIFT2":
                case "LIFT3":
                case "LIFT4":
                case "LIFT5":
                case "LIFT6":
                case "LIFT7":
                case "ROUTE9":
                case "ROUTE10":
                case "NatickCBus":
                case "ROUTE11":
                case "GLinkRoute1":
                case "GLinkRoute2":
                case "GLinkRoute3":
                case "SPRoute1":


                    SqlVECollectionReader.RetrievePolyLine(ConnectionString.CapeCod, "sp_SelectVEPolyLines", mapID, ref sb);
                    break;
                default:
                    sb.Append("/*Error. Unknown route.*/");
                    break;
            }
            return sb.ToString();
        }

    }

}