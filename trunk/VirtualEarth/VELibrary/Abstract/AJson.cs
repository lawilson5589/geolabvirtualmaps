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
    /// 
    /// </summary>
    [TypeConverter(typeof(JsonConverter))]
    public abstract class Ajson : IJson
    {
        #region IJson Members

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public virtual String Serialize()
        {
            System.Web.Script.Serialization.JavaScriptSerializer jss = new System.Web.Script.Serialization.JavaScriptSerializer();
            return jss.Serialize(this);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public abstract string ToJson();

        #endregion
    }
}
