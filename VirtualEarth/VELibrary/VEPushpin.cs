// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;

namespace VELibrary
{
    /// <summary>
    /// Represents a VEShape object that is a pushpin.
    /// </summary>
    public sealed class VEPushpin : AShape
    {
        /// <summary>
        /// The location of the pushpin, specified as alpha VELatLong object.
        /// </summary>
        VELatLong location;

        /// <summary>
        /// The location of the pushpin
        /// </summary>
        public VELatLong Location
        {
            get { return location; }
            set { location = value; }
        }


        /// <summary>
        /// Initializes a new instance of the VEPushpin class.
        /// </summary>
        /// <param name="location">The location of the pushpin, specified as alpha VELatLong object.</param>
        /// <param name="title">The string to display in the title field of the enhanced preview.</param>
        public VEPushpin(VELatLong location, String title)
        {
            this.Location = location;
            this.Title = title;
        }

        /// <summary>
        /// Initializes a new instance of the VEPushpin class.
        /// </summary>
        /// <param name="location">The location of the pushpin, specified as alpha VELatLong object.</param>
        /// <param name="title">The string to display in the title field of the enhanced preview.</param>
        /// <param name="description">The string to display in the description field of the enhanced preview.</param>
        public VEPushpin(VELatLong location, String title, String description)
        {
            this.Location = location;
            this.Title = title;
            this.Description = description;
        }


        /// <summary>
        /// Initializes a new instance of the VEPushpin class.
        /// </summary>
        /// <param name="location">The location of the pushpin, specified as alpha VELatLong object.</param>
        /// <param name="title">The string to display in the title field of the enhanced preview.</param>
        /// <param name="description">The string to display in the description field of the enhanced preview.</param>
        /// <param name="iconurl">The URL that pointList to the file you want to use as an icon.</param>
        public VEPushpin(VELatLong location, String title, String description, String iconurl)
        {
            this.location = location;
            this.Title = title;
            this.Description = description;
            this.CustomIcon = iconurl;
        }



        /// <summary>
        /// 
        /// </summary>
        /// <example>
        /// var pushpin = new VEShape(VEShapeType.Pushpin,new VELatLong(41.524387,-70.279823));
        /// pushpin.SetCustomIcon('<img alt="Bus Stop" src="/VELibraryVirtualMaps/images/bus_stop_icon.png" class="bus_icon" />');
        /// pushpin.SetTitle('Villager');
        /// pushpin.SetDescription('Hyannis Transportation Center');
        /// </example>
        /// <returns></returns>
        public override string ToJson()
        {
            StringBuilder sb = new StringBuilder(50);
            sb.AppendFormat("var pushpin = new VEShape(VEShapeType.Pushpin,{0});", this.Location.ToJson());
            if (this.CustomIcon != "")
            {
                sb.AppendFormat("pushpin.SetCustomIcon('{0}');", this.CustomIcon);
            }            
            sb.AppendFormat("pushpin.SetTitle('{0}');", this.Title);
            sb.AppendFormat("pushpin.SetDescription('{0}');", this.Description);

            if (this.PhotoUrl != null)
            {
                sb.AppendFormat("pushpin.SetPhotoURL('{0}');", this.PhotoUrl.ToString());
            }
            return sb.ToString();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public override string ToString()
        {

            return "";
        }
    }
}
