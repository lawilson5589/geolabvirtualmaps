// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;

namespace VELibrary
{
    /// <summary>
    /// An enumeration of map styles.
    /// </summary>
    [Flags]
    public enum VEMapStyle
    {

        /// <summary>
        /// Sets the map style to a traditional road map
        /// </summary>
        Road = 'r',

        /// <summary>
        /// Sets the map style to aerial (satellite and aerial imagery)
        /// </summary>
        Aerial = 'a',

        /// <summary>
        /// Sets the map style to a combination of aerial images with labels overlaid (also known as hybrid)
        /// </summary>
        Hybrid = 'h',

        /// <summary>
        /// Sets the map style to use bird's eye imagery
        /// </summary>
        Birdseye = 'o'
    }

    /// <summary>
    /// An enumeration of map modes.
    /// </summary>
    [Flags]
    public enum VEMapMode
    {
        /// <summary>
        /// Displays the map in the traditional two dimensions
        /// </summary>
        Mode2D = 1,

        /// <summary>
        /// Loads the Virtual Earth 3D control, displays the map in three dimensions, and displays the 3D navigation control
        /// </summary>
        Mode3D = 2
    }

    /// <summary>
    /// An enumeration of the distance unit used for generating routes and itineraries. 
    /// </summary>
    [Flags]
    public enum VEDistanceUnit
    {
        Miles = 'm',
        Kilometers = 'k'
    }

    /// <summary>
    /// This enumeration represents the size of the mini map. 
    /// </summary>
    [Flags]
    public enum VEMiniMapSize
    {
        /// <summary>
        /// This represents a small mini map.
        /// <remarks>Virtual Earth Map equivalent is VEMiniMapSize.Small</remarks>
        /// </summary>
        Small,

        /// <summary>
        /// This represents a large mini map.
        /// <remarks>Virtual Earth Map equivalent is VEMiniMapSize.Large</remarks>
        /// </summary>
        Large
    }

    /// <summary>
    /// An enumeration that represents the size and type of dashboard to be displayed on the map
    /// </summary>
    [Flags]
    public enum VEDashboardSize
    {
        /// <summary>
        /// This is the dashboard that is used by default
        /// <remarks>Virtual Earth Map equivalent is VEDashboardSize.Normal</remarks>
        /// </summary>
        Normal,

        /// <summary>
        /// This is a dashboard smaller than the default: it only contains + and - zoom buttons and road, aerial, and hybrid buttons for changing the map style
        /// <remarks>Virtual Earth Map equivalent is VEDashboardSize.Small</remarks>
        /// </summary>
        Small,

        /// <summary>
        /// This is the smallest dashboard option available. This dashboard only contains zoom-out (+) and zoom-in (-) zoom buttons
        /// <remarks>Virtual Earth Map equivalent is VEDashboardSize.Tiny</remarks>
        /// </summary>
        Tiny,
    }



}

