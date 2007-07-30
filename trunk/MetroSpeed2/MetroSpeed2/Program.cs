using System;
using System.Collections.Generic;
using System.Windows.Forms;
using System.Security.Permissions;

[assembly: SecurityPermission(
   SecurityAction.RequestMinimum , Execution = true)]
[assembly: CLSCompliant(true)]

namespace MetroSpeed2
{
    static class Program
    {
        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Metrowest());
        }
    }
}