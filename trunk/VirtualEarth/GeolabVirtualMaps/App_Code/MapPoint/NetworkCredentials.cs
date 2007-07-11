using System;
using System.Data;
using System.Configuration;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using net.mappoint.staging;
using System.Web.Configuration;
using System.Net;

namespace Geolab
{
    /// <summary>
    /// Initialize MapPoint credentials
    /// </summary>
    public sealed class MapPointCredentials
    {
        /// <summary>
        /// These are the actual instances of the objects that call the MapPoint .NET service
        /// </summary>
        private RenderServiceSoap renderService;
        private FindServiceSoap findService;
        private CommonServiceSoap commonService;


        /// <summary>
        /// Performs the work needed to initialize the connection to the 
        /// MapPoint .NET service
        /// </summary>
        public MapPointCredentials()
        {
            try
            {

                // first, create the render service
                renderService = new RenderServiceSoap();

                // create and set the logon information (note comment in web.config -- here would be the place to
                // decrypt/unhash the user/password from the config file).
                NetworkCredential ourCredentials = new NetworkCredential(WebConfigurationManager.AppSettings["MPUser"],
                WebConfigurationManager.AppSettings["MPPass"]);
                renderService.Credentials = ourCredentials;
                renderService.PreAuthenticate = true;

                // next, create the find service
                findService = new FindServiceSoap();
                // set the logon information
                findService.Credentials = ourCredentials;
                findService.PreAuthenticate = true;

            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.Assert(false, "Exception attempting to connect to MapPoint .NET: " + ex.Message);
            }
        }


        #region MapPointNet
        // This section handles the initialization and management of the classes for the MapPoint .NET service

        /// <summary>
        /// An instance of the render service class
        /// </summary>
        public RenderServiceSoap RenderService
        {
            get
            {
                return renderService;
            }
        }

        /// <summary>
        /// An instance of the find service class
        /// </summary>
        public FindServiceSoap FindService
        {
            get
            {
                return findService;
            }
        }


        /// <summary>
        /// An instance of the common service class
        /// </summary>
        public CommonServiceSoap CommonService
        {
            get
            {
                return commonService;
            }
        }

        #endregion
    }
}
