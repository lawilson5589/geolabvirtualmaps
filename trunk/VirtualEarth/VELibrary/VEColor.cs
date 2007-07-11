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
    /// Specifies the color and transparency to use when drawing VEShape objects on the map.
    /// </summary>
    [TypeConverter(typeof(JsonConverter))]
    public sealed class VEColor : Ajson
    {

        /// <summary>
        /// The red component value. Valid values range from 0 through 255.
        /// </summary>
        private byte red;

        /// <summary>
        /// The green component value. Valid values range from 0 through 255.
        /// </summary>
        private byte green;

        /// <summary>
        /// The blue component value. Valid values range from 0 through 255.
        /// </summary>
        private byte blue;

        /// <summary>
        /// The alpha (transparency) component value. Valid values range from 0.0 through 1.0.
        /// </summary>
        private double alpha;

        /// <summary>
        /// Initializes new instance of the VEColor class.
        /// </summary>
        /// <param name="red">The red component value.</param>
        /// <param name="green">The green component value.</param>
        /// <param name="blue">The blue component value.</param>
        /// <param name="alpha">The alpha (transparency) component value.</param>
        public VEColor(byte red, byte green, byte blue, double alpha)
        {
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
        }

        /// <summary>
        /// Initializes new instance of the VEColor class.
        /// </summary>
        /// <param name="rgbColor">The RBG color with alpha string like rgb(255,255,255,1.0)</param>
        /// <remarks>Visit http://www.w3.org/TR/SVG/types.html#ColorKeywords to find more about Color names and values</remarks>
        public VEColor(String rgbColor)
        {

            VEColor color = Parser.ParseColor(rgbColor);
            if (color == null)
            {
                throw new ArgumentException("The RGB string format is invalid! Must be something like this rgb(105,255,245,1.0)");
            }
            else
            {
                this.red = color.red;
                this.green = color.green;
                this.blue = color.blue;
                this.alpha = color.alpha;
                
            }
        }


        /// <summary>
        /// Specifies the red component value. Valid values range from 0 through 255.
        /// </summary>
        public byte Red
        {
            get { return this.red; }
            set { this.red = value; }
        }



        /// <summary>
        /// Specifies the green component value. Valid values range from 0 through 255.
        /// </summary>
        public byte Green
        {
            get { return green; }
            set { this.green = value; }
        }


        /// <summary>
        /// Specifies the blue component value. Valid values range from 0 through 255.
        /// </summary>
        public byte Blue
        {
            get { return blue; }
            set { this.blue = value; }
        }

        /// <summary>
        /// Specifies the alpha (transparency) component value. Valid values range from 0.0 through 1.0.
        /// </summary>
        public double Alpha
        {
            get { return alpha; }
            set
            {
                if (value >= 0 && value <= 1)
                {
                    this.alpha = value;
                }
                else
                {
                    throw new ArgumentOutOfRangeException("The transparency valid values range from 0.0 through 1.0");
                }
            }
        }


        /// <summary>
        /// The string representation of the object.
        /// </summary>
        /// <returns>rgb(red, green, blue, alpha)</returns>
        public override string ToString()
        {
            return String.Format("rgb({0},{1},{2},{3})", this.red, this.green, this.blue, this.alpha);
        }


        #region IJson Members

        /// <summary>
        /// The string representation of the object in Virtual Earth Javascript's form.
        /// </summary>
        /// <returns>new VEColor(red, green, blue, alpha)</returns>
        public override string ToJson()
        {
            return String.Format("new VEColor({0}, {1}, {2}, {3})", this.red, this.green, this.blue, this.alpha);
        }


        #region Operators

        /// <summary>
        /// Determines whether the specified Object is equal to the current Object.
        /// </summary>
        /// <param name="obj">The Object to compare with the current Object</param>
        /// <returns>true if the specified Object is equal to the current Object; otherwise, false.</returns>
        public override bool Equals(object obj)
        {
            VEColor color = (VEColor)obj;
            return (color != null && this == color);
        }

        /// <summary>
        ///  Equality operator.
        /// </summary>
        /// <param name="colorone">Color one object</param>
        /// <param name="colortwo">Coolor two object</param>
        /// <returns>true if colorone and colortwo represent the same VEColor with properties; otherwise, false.</returns>
        public static bool operator == (VEColor colorone, VEColor colortwo)
        {
            return (colorone is VEColor && colortwo is VEColor && colorone.red == colortwo.red && colorone.green == colortwo.green && colorone.blue == colortwo.blue && colorone.alpha == colortwo.alpha);
        }

        /// <summary>
        ///  Equality operator.
        /// </summary>
        /// <param name="colorone">Color one object</param>
        /// <param name="colortwo">Coolor two object</param>
        /// <returns>false if colorone and colortwo represent the same VEColor with properties; otherwise, true.</returns>
        public static bool operator !=(VEColor colorone, VEColor colortwo)
        {
            return !(colorone == colortwo);
        }

        /// <summary>
        /// Serves as a hash function for a this type.
        /// </summary>
        /// <returns> A hash code for the current Object.</returns>
        public override int GetHashCode()
        {
            return (this.red.GetHashCode() ^ this.green.GetHashCode() ^ this.blue.GetHashCode() ^ this.alpha.GetHashCode());
        }
        #endregion

        #endregion
    }
}
