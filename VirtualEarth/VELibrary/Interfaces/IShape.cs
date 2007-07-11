// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
namespace VELibrary
{
    /// <summary>
    /// 
    /// </summary>
    public interface IShape
    {
        string CustomIcon { get; set; }
        string Description { get; set; }
        VELatLong IconAnchor { get; set; }
        Uri MoreInfoUrl { get; set; }
        Uri PhotoUrl { get; set; }
        string Title { get; set; }

        /// <summary>
        /// Validate the VEShape required properties like  VELatLong or List of VELatLong 
        /// and their values like Latlong must me less like 180.
        /// </summary>
        /// <returns>true if the all properties passed the check</returns>
        //bool IsVEShapeValid();

    }
}
