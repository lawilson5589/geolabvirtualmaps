// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel;


namespace VELibrary
{
    /// <summary>
    /// Abstract implementation of Shape class
    /// </summary>
    public abstract class AShape : Ajson, IShape
    {
        /// <summary>
        /// A String object containing either plain text or HTML that represents the VEShape object's title.
        /// </summary>
        String title = String.Empty;

        /// <summary>
        /// A String object containing either plain text or HTML that represents the VEShape object's description field.
        /// </summary>
        String description = String.Empty;
   
        /// <summary>
        /// A String object containing either a URL to an image, custom HTML that defines the custom icon, or a VECustomIconSpecification object.
        /// </summary>
        String customIcon = String.Empty;

        /// <summary>
        /// A uniform resource identifier (URI) object containing the Url of the image that is displayed in the shape's info box.
        /// </summary>
        Uri photoUrl;

        /// <summary>
        /// A uniform resource identifier (URI) object containing the Url of the "more info" link that 
        /// is displayed in the shape's info box.
        /// </summary>
        Uri moreInfoUrl;

        /// <summary>
        /// Alpha VELatLong Class object representing the shape's info box anchor point.
        /// </summary>
        VELatLong iconAnchor;

        #region IShape Members

        /// <summary>
        /// Sets/ gets the title of the VEShape object.
        /// </summary>
        public String Title
        {
            get { return title; }
            set { title = value; }
        }

        /// <summary>
        /// Sets/gets the description of the VEShape object.
        /// </summary>
        public String Description
        {
            get { return description; }
            set { description = value; }
        }

        /// <summary>
        /// Sets the VEShape object's custom icon.
        /// </summary>
        public String CustomIcon
        {
            get { return customIcon; }
            set { customIcon = value; }
        }

        /// <summary>
        /// Sets/gets the shape's "photo" Url.
        /// </summary>
        public Uri PhotoUrl
        {
            get { return photoUrl; }
            set { photoUrl = value; }
        }

        /// <summary>
        /// Sets/gets the shape's "more info" Url.
        /// </summary>
        public Uri MoreInfoUrl
        {
            get { return moreInfoUrl; }
            set { moreInfoUrl = value; }
        }

        /// <summary>
        /// Sets/gets the info box anchor of the VEShape object.
        /// </summary>
        public VELatLong IconAnchor
        {
            get { return iconAnchor; }
            set { iconAnchor = value; }
        }
        #endregion

        /// <summary>
        /// Indicates whether the Uri strings used to construct this VEShape Object was well-formed. 
        /// </summary>
        /// <returns>true if the string was well-formed in accordance with RFC 2396 and RFC 2732; else false. </returns>
        protected bool IsWellFormedOriginalUriStrings()
        {
            bool photo;
            bool more;
            if (this.PhotoUrl != null)
            {
                photo = this.photoUrl.IsWellFormedOriginalString();
            }
            else
            {
                photo = true;
            }
            
            if (this.moreInfoUrl != null)
            {
                more = this.photoUrl.IsWellFormedOriginalString();
            }
            else
            {
                more = true;
            }
            return (photo && more);
        }


    }
}
