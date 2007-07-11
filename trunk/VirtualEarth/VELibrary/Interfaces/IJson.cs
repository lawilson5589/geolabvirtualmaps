// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;

namespace VELibrary
{
    public interface IJson
    {
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        string ToJson();

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        string Serialize();
    }
}
