// Author: J.Baltikauskas
// This source is subject to the Microsoft Reference License.
// See http://www.microsoft.com/resources/sharedsource/licensingbasics/communitylicense.mspx

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.Windows.Forms;
using VELibrary;
using System.IO;
using VELibrary.Controls;

namespace VEDisplay
{
    public partial class VEFormMain : Form
    {
        public VEFormMain()
        {
            InitializeComponent();
            // This code for test purposes or local VE 
            // Find the Location of VirtualEarth.html
            //string BrowserURL = Application.ExecutablePath;
            //BrowserURL = BrowserURL.Substring(0, BrowserURL.LastIndexOf("\\"));
            //BrowserURL = Path.Combine(BrowserURL, @"VirtualEarth5.htm");

            // Start the load of VirtualEarth.html into the WebBrowser.
            // When done, the callback below (DocumentedCompleted) gets called.
            this.veMapControl.Url = new Uri("http://207.206.224.39/geolabvirtualmaps/HaynnisDemo.aspx");
        }

        private void exitToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void showMiniMapToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.showMiniMapToolStripMenuItem.Checked = !this.showMiniMapToolStripMenuItem.Checked;
            if (this.showMiniMapToolStripMenuItem.Checked)
            {
                this.veMapControl.ShowMiniMap();
            }
            else
            {
                this.veMapControl.HideMiniMap();
            }
        }

        private void showDashBoradToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.showDashBoradToolStripMenuItem.Checked = !this.showDashBoradToolStripMenuItem.Checked;
            if (this.showDashBoradToolStripMenuItem.Checked)
            {
                this.veMapControl.ShowDashboard();
            }
            else
            {
                this.veMapControl.HideDashboard();
            }
        }

        private void toolStripButtonZoomOut_Click(object sender, EventArgs e)
        {
            this.veMapControl.ZoomOut();
        }

        private void toolStripButtonZoomIn_Click(object sender, EventArgs e)
        {
            this.veMapControl.ZoomIn();
        }

        private void toolStripButtonLeft_Click(object sender, EventArgs e)
        {
            this.veMapControl.MoveMapLeft();
        }

        private void toolStripButtonUp_Click(object sender, EventArgs e)
        {
            this.veMapControl.MoveMapUp();
        }

        private void toolStripButtonDown_Click(object sender, EventArgs e)
        {
            this.veMapControl.MoveMapDown();
        }

        private void toolStripButtonRigth_Click(object sender, EventArgs e)
        {
            this.veMapControl.MoveMapRight();
        }

        private void toolStripButtonGo_Click(object sender, EventArgs e)
        {
            try
            {
                this.veMapControl.Url = new Uri(this.toolStripTextBoxURL.Text);
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
        }

        private readonly VELatLong haynniscenter = new VELatLong(41.65588797740388, -70.28833866119386);

        private void VEFormMain_Shown(object sender, EventArgs e)
        {

        }

        private void toolStripButton1_Click(object sender, EventArgs e)
        {
            this.veMapControl.Eval("step1()");
        }







    }
}