// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.Text;
using System.IO;

namespace VELibrary
{
    internal class Log
    {
        public static void Error(String error)
        {
            System.Diagnostics.Debug.WriteLine(error.ToString());
            using (StreamWriter file = new StreamWriter(@"Exceptions.txt", true))
            {
                file.WriteLine(error.ToString());
                file.Close();
            }
        }
        public static void Error(Exception exception)
        {
            System.Diagnostics.Debug.WriteLine(exception.ToString());
            using (StreamWriter file = new StreamWriter(@"Exceptions.txt", true))
            {
                file.WriteLine(exception.ToString());
                file.Close();
            }
        }
    }
}
