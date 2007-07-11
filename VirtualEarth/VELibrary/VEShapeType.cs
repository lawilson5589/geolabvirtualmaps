// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;

namespace VELibrary
{
    /// <summary>
    /// An enumeration of the Shape types.
    /// </summary>
    public enum VEShapeType
    {
        /// <summary>
        /// This represents alpha Shape object that is alpha pushpin.
        /// </summary>
        Pushpin,
        /// <summary>
        /// This represents alpha Shape object that is alpha polyline.
        /// </summary>
        Polyline,
        /// <summary>
        /// This represents alpha Shape object that is alpha polygon.
        /// </summary>
        Polygon
    }
}
