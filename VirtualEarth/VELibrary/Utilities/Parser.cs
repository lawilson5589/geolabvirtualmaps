// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.Diagnostics;

namespace VELibrary
{
    /// <summary>
    /// Parse strings to Virtual Earth Objects
    /// </summary>
    internal class Parser
    {
        /// <summary>
        /// Define a regular expression for VEColor String to validate
        /// </summary>
        private static readonly String RegexString = @"^rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\,(\d|\d\.\d{1,2})\)$";

        /// <summary>
        /// The regular expresion to check against
        /// </summary>
        private static readonly Regex regex = new Regex(RegexString, RegexOptions.Compiled | RegexOptions.CultureInvariant | RegexOptions.IgnorePatternWhitespace);

        /// <summary>
        /// Parse RGB color string like rgb(245,245,245,1.0) to VEColor object. 
        /// This method is usefull to parse RGB color string stored in MS-SQL databases.
        /// </summary>
        /// <param name="rgbColorString">The RGB string in format rgb(value, value,value</param>
        /// <returns>Returns VEColor objects, otherwise null</returns>
        public static VEColor ParseColor(String rgbColorString)
        {

            VEColor vecolor = null;
            rgbColorString = rgbColorString.Replace(" ", "");
            try
            {
                if (regex.IsMatch(rgbColorString))
                {
                    int left = rgbColorString.IndexOf('(');
                    int right = rgbColorString.IndexOf(')');

                    String[] color = rgbColorString.Substring(left+1, right-left-1).Split(',');
                    if (color.Length == 4)
                    {
                        byte red = Convert.ToByte(color[0]);
                        byte green = Convert.ToByte(color[1]);
                        byte blue = Convert.ToByte(color[2]);
                        double alpha = Convert.ToDouble(color[3]);
                        vecolor = new VEColor(red, green, blue, alpha);
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex);
            }
            return vecolor;
        }


        public static VECollection ParsePolyLine(String geoRssPolyLine)
        {
            VECollection collection = null;
            try
            {
                String[] coor = geoRssPolyLine.Split(' ');
                if (coor.Length % 2 == 0)
                {
                    collection = new VECollection();
                    for (int i = 0; i < coor.Length / 2; i++)
                    {
                        int index = i * 2;
                        collection.Add(new VELatLong(Convert.ToDouble(coor[index]), Convert.ToDouble(coor[index + 1])));
                    }
                }
            }
            catch (Exception ex)
            {
                Log.Error(ex);
            }

            return collection;
        }



        /// <summary>
        /// No instances allowed
        /// </summary>
        private Parser() { }
    }
}
