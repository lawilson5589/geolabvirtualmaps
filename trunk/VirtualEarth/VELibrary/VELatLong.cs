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
    /// Contains the latitude and longitude of alpha single point on the globe.
    /// </summary>
    public sealed class VELatLong : Ajson
    {
        /// <summary>
        /// The MIN latitude/longitude value allowed
        /// </summary>
        public const double MIN_LATLONG = -180.00;

        /// <summary>
        /// The MAX latitude/longitude value allowed
        /// </summary>
        public const double MAX_LATLONG = 180.00;


        /// <summary>
        /// The latitude of alpha point.
        /// </summary>
        private double latitude;

        /// <summary>
        /// The longitude of alpha point.
        /// </summary>
        private double longitude;

        /// <summary>
        /// Sets/Gets the latitude of alpha single point on the globe.
        ///  Valid values range from 0 through 180.
        /// </summary>
        public double Latitude
        {
            get { return this.latitude; }
            set
            {
                if ((value > MIN_LATLONG) && (value < MAX_LATLONG))
                {
                    this.latitude = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("The latitude's valid values range from -180 through 180");
                }
            }
        }

        /// <summary>
        /// Sets/Gets the longitude of alpha single point on the globe.
        /// Valid values range from 0 through 180.
        /// </summary>
        public double Longitude
        {
            get { return this.longitude; }
            set
            {

                if ((value > MIN_LATLONG) && (value < MAX_LATLONG))
                {
                    this.longitude = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("The longitude's valid values range from -180 through 180");
                }
            }
        }

        /// <summary>
        /// Initializes new instance of the VELatLong object.
        /// </summary>
        /// <param name="latitude">Specifies the latitude of alpha single point on the globe.</param>
        /// <param name="longitude">Specifies the longitude of alpha single point on the globe.</param>
        public VELatLong(double latitude, double longitude)
        {
            this.Latitude = latitude;
            this.Longitude = longitude;
        }

        /// <summary>
        /// Initializes new instance of the VELatLong object.
        /// </summary>
        /// <param name="geoRssPoint">The value from GeoRss georss:point like 45.256556 -71.9298632</param>
        /// <remarks>Visit http://georss.org/ to find more about GeoRss</remarks>
        public VELatLong(String geoRssPoint)
        {
            try
            {
                String[] latlong = geoRssPoint.Trim().Split(' ');
                if (latlong.Length == 2)
                {
                    this.Latitude = Convert.ToDouble(latlong[0]);
                    this.Longitude = Convert.ToDouble(latlong[1]);
                }
                else
                {
                    throw new ArgumentException("The provided string is not valid GeoRss point!");
                }
            }
            catch (ArgumentException argex)
            {
                System.Diagnostics.Debug.WriteLine(argex.Message);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message);
            }
        }

        /// <summary>
        /// The string representation of the object in Virtual Earth Javascript's form.
        /// </summary>
        /// <returns>new VELatLong(latitude, longitude)</returns>
        public override string ToJson()
        {
            return String.Format("new VELatLong({0},{1})", this.latitude, this.longitude);
        }

        /// <summary>
        /// The string representation of the object in Javascript's form.
        /// </summary>
        /// <returns>[latitude, longitude]</returns>
        public override string ToString()
        {
            return String.Format("[{0},{1}]", this.latitude, this.longitude);
        }

        #region Operators

        
        public override bool Equals(object obj)
        {
            return (obj is VELatLong && this == (VELatLong) obj);
        } 

        public static bool operator == (VELatLong latlongOne, VELatLong latlongTwo)
        {
            return (latlongOne is VELatLong && latlongTwo is VELatLong && latlongOne.latitude == latlongTwo.latitude && latlongOne.longitude == latlongTwo.longitude);
        }

        public static bool operator !=(VELatLong latlong1, VELatLong latlong2)
        {
            return !(latlong1 == latlong2);
        }

        public override int GetHashCode()
        {
            return (this.longitude.GetHashCode() ^ this.longitude.GetHashCode());
        }
        #endregion

    }
}
