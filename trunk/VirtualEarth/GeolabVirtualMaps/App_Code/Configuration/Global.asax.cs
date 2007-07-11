
using System;
using System.Collections;
using System.ComponentModel;
using System.Web;
using System.Web.SessionState;
using System.Diagnostics;		// For Debug and trace
using System.Resources;			// For string resources
using System.Reflection;		// For Assembly.GetExecutingAssembly();
using System.Web.Configuration; // For App configuration information
using System.Net;               // For network logon
using net.mappoint.staging;				


namespace Geolab
{
    /// <summary>
    /// An instance of this class is created by ASP .NET for every worker thread.
    /// Each web request is associated with an instance of this class, so it makes
    /// a handly place to put objects that are needed for each request, but are
    /// expensive to initialize.
    /// From the code behind of an individual page, the instance of this class
    /// associate with the request can be obtained from Context.ApplicationInstance
    /// </summary>
    public class Global : System.Web.HttpApplication
    {

        /// <summary>
        /// Constructor, use to populate per-instance data.
        /// In our application, each instance will create objects for accessing
        /// the MapPoint .NET service.
        /// </summary>
        public Global()
        {
            try
            {
                
            }
            catch (Exception ex)
            {
                //Your exception handling process goes here.
                Debug.Write(ex);
            }
        }

        /// <summary>
        /// Called by ASP .NET once on application start (not once per Global object created)
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_Start(Object sender, EventArgs e)
        {
        }

        /// <summary>
        /// Called by ASP .NET for each session as it creates the session
        /// use this event handler to set session defaults
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Session_Start(Object sender, EventArgs e)
        {

        }

        /// <summary>
        /// Called by ASP .NET for each request as part of authentication (see HttpApplication class overview)
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_AuthenticateRequest(Object sender, EventArgs e)
        {
        }

        /// <summary>
        /// Called by ASP .NET for each request before any other functions (see HttpApplication class overview)
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
        }

        /// <summary>
        /// Called by ASP .NET for each request after all other functions (see HttpApplication class overview)
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_EndRequest(Object sender, EventArgs e)
        {
        }


        /// <summary>
        /// Called when an unhandled exception occurs in the execution of a page request.
        /// Even if you have exception handlers in your code, an exception generated in the ASP .NET
        /// code can still cause errors to be displayed to users.  It's a good idea to clear these 
        /// errors here, or use the customErrors section of the web.config file to display a friendly
        /// error page
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_Error(Object sender, EventArgs e)
        {
            // get the exception (potentially log it or show some friendly error)
            //Exception ex = Server.GetLastError();
            // clear the error, so the user will never see an ASP .NET generated unhandled exception page
            //Server.ClearError();        
        }

        /// <summary>
        /// Called by ASP .NET as a session is expiring.
        /// use this function to perform cleanup on session data
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Session_End(Object sender, EventArgs e)
        {
        }

        /// <summary>
        /// Called by ASP .NET when the application is exiting or restarting
        /// Use to clean up any per application connections, etc.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Application_End(Object sender, EventArgs e)
        {
        }





    }
}

