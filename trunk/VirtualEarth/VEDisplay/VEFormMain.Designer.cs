namespace VEDisplay
{
    partial class VEFormMain
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(VEFormMain));
            this.menuStripMain = new System.Windows.Forms.MenuStrip();
            this.fileToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.exitToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.optionsToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.showMiniMapToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.showDashBoradToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripMain = new System.Windows.Forms.ToolStrip();
            this.toolStripUrl = new System.Windows.Forms.ToolStrip();
            this.toolStripLabelUrl = new System.Windows.Forms.ToolStripLabel();
            this.toolStripTextBoxURL = new System.Windows.Forms.ToolStripTextBox();
            this.toolStripButtonGo = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonZoomIn = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonZoomOut = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonLeft = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonUp = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonDown = new System.Windows.Forms.ToolStripButton();
            this.toolStripButtonRigth = new System.Windows.Forms.ToolStripButton();
            this.veMapControl = new VELibrary.Controls.VEMapControl();
            this.toolStripButton1 = new System.Windows.Forms.ToolStripButton();
            this.menuStripMain.SuspendLayout();
            this.toolStripMain.SuspendLayout();
            this.toolStripUrl.SuspendLayout();
            this.SuspendLayout();
            // 
            // menuStripMain
            // 
            this.menuStripMain.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.fileToolStripMenuItem,
            this.optionsToolStripMenuItem});
            this.menuStripMain.Location = new System.Drawing.Point(0, 0);
            this.menuStripMain.Name = "menuStripMain";
            this.menuStripMain.Size = new System.Drawing.Size(826, 24);
            this.menuStripMain.TabIndex = 1;
            this.menuStripMain.Text = "menuStripMain";
            // 
            // fileToolStripMenuItem
            // 
            this.fileToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.exitToolStripMenuItem});
            this.fileToolStripMenuItem.Name = "fileToolStripMenuItem";
            this.fileToolStripMenuItem.Size = new System.Drawing.Size(35, 20);
            this.fileToolStripMenuItem.Text = "&File";
            // 
            // exitToolStripMenuItem
            // 
            this.exitToolStripMenuItem.Name = "exitToolStripMenuItem";
            this.exitToolStripMenuItem.Size = new System.Drawing.Size(103, 22);
            this.exitToolStripMenuItem.Text = "&Exit";
            this.exitToolStripMenuItem.Click += new System.EventHandler(this.exitToolStripMenuItem_Click);
            // 
            // optionsToolStripMenuItem
            // 
            this.optionsToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.showMiniMapToolStripMenuItem,
            this.showDashBoradToolStripMenuItem});
            this.optionsToolStripMenuItem.Name = "optionsToolStripMenuItem";
            this.optionsToolStripMenuItem.Size = new System.Drawing.Size(56, 20);
            this.optionsToolStripMenuItem.Text = "&Options";
            // 
            // showMiniMapToolStripMenuItem
            // 
            this.showMiniMapToolStripMenuItem.Name = "showMiniMapToolStripMenuItem";
            this.showMiniMapToolStripMenuItem.Size = new System.Drawing.Size(166, 22);
            this.showMiniMapToolStripMenuItem.Text = "Show &Mini Map";
            this.showMiniMapToolStripMenuItem.Click += new System.EventHandler(this.showMiniMapToolStripMenuItem_Click);
            // 
            // showDashBoradToolStripMenuItem
            // 
            this.showDashBoradToolStripMenuItem.Name = "showDashBoradToolStripMenuItem";
            this.showDashBoradToolStripMenuItem.Size = new System.Drawing.Size(166, 22);
            this.showDashBoradToolStripMenuItem.Text = "Show &DashBorad";
            this.showDashBoradToolStripMenuItem.Click += new System.EventHandler(this.showDashBoradToolStripMenuItem_Click);
            // 
            // toolStripMain
            // 
            this.toolStripMain.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripButtonZoomIn,
            this.toolStripButtonZoomOut,
            this.toolStripButtonLeft,
            this.toolStripButtonUp,
            this.toolStripButtonDown,
            this.toolStripButtonRigth,
            this.toolStripButton1});
            this.toolStripMain.Location = new System.Drawing.Point(0, 24);
            this.toolStripMain.Name = "toolStripMain";
            this.toolStripMain.Size = new System.Drawing.Size(826, 25);
            this.toolStripMain.TabIndex = 2;
            this.toolStripMain.Text = "toolStripMain";
            // 
            // toolStripUrl
            // 
            this.toolStripUrl.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.toolStripLabelUrl,
            this.toolStripTextBoxURL,
            this.toolStripButtonGo});
            this.toolStripUrl.Location = new System.Drawing.Point(0, 49);
            this.toolStripUrl.Name = "toolStripUrl";
            this.toolStripUrl.Size = new System.Drawing.Size(826, 25);
            this.toolStripUrl.TabIndex = 3;
            this.toolStripUrl.Text = "toolStripUrl";
            // 
            // toolStripLabelUrl
            // 
            this.toolStripLabelUrl.Name = "toolStripLabelUrl";
            this.toolStripLabelUrl.Size = new System.Drawing.Size(30, 22);
            this.toolStripLabelUrl.Text = "URL:";
            // 
            // toolStripTextBoxURL
            // 
            this.toolStripTextBoxURL.Name = "toolStripTextBoxURL";
            this.toolStripTextBoxURL.Size = new System.Drawing.Size(400, 25);
            this.toolStripTextBoxURL.Text = "http://www.geolabvirtualmaps.com/HaynnisDemo.aspx";
            // 
            // toolStripButtonGo
            // 
            this.toolStripButtonGo.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonGo.Image = ((System.Drawing.Image)(resources.GetObject("toolStripButtonGo.Image")));
            this.toolStripButtonGo.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonGo.Name = "toolStripButtonGo";
            this.toolStripButtonGo.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonGo.Text = "GO";
            this.toolStripButtonGo.Click += new System.EventHandler(this.toolStripButtonGo_Click);
            // 
            // toolStripButtonZoomIn
            // 
            this.toolStripButtonZoomIn.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonZoomIn.Image = global::VEDisplay.Properties.Resources.zoom_in;
            this.toolStripButtonZoomIn.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonZoomIn.Name = "toolStripButtonZoomIn";
            this.toolStripButtonZoomIn.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonZoomIn.Text = "Zoom In";
            this.toolStripButtonZoomIn.Click += new System.EventHandler(this.toolStripButtonZoomIn_Click);
            // 
            // toolStripButtonZoomOut
            // 
            this.toolStripButtonZoomOut.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonZoomOut.Image = global::VEDisplay.Properties.Resources.zoom_out;
            this.toolStripButtonZoomOut.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonZoomOut.Name = "toolStripButtonZoomOut";
            this.toolStripButtonZoomOut.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonZoomOut.Text = "Zoom Out";
            this.toolStripButtonZoomOut.Click += new System.EventHandler(this.toolStripButtonZoomOut_Click);
            // 
            // toolStripButtonLeft
            // 
            this.toolStripButtonLeft.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonLeft.Image = global::VEDisplay.Properties.Resources.map_left;
            this.toolStripButtonLeft.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonLeft.Name = "toolStripButtonLeft";
            this.toolStripButtonLeft.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonLeft.Text = "Move Left";
            this.toolStripButtonLeft.Click += new System.EventHandler(this.toolStripButtonLeft_Click);
            // 
            // toolStripButtonUp
            // 
            this.toolStripButtonUp.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonUp.Image = global::VEDisplay.Properties.Resources.map_up;
            this.toolStripButtonUp.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonUp.Name = "toolStripButtonUp";
            this.toolStripButtonUp.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonUp.Text = "Move Up";
            this.toolStripButtonUp.Click += new System.EventHandler(this.toolStripButtonUp_Click);
            // 
            // toolStripButtonDown
            // 
            this.toolStripButtonDown.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonDown.Image = global::VEDisplay.Properties.Resources.map_down;
            this.toolStripButtonDown.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonDown.Name = "toolStripButtonDown";
            this.toolStripButtonDown.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonDown.Text = "Move Down";
            this.toolStripButtonDown.ToolTipText = "Move Down";
            this.toolStripButtonDown.Click += new System.EventHandler(this.toolStripButtonDown_Click);
            // 
            // toolStripButtonRigth
            // 
            this.toolStripButtonRigth.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButtonRigth.Image = global::VEDisplay.Properties.Resources.map_right;
            this.toolStripButtonRigth.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButtonRigth.Name = "toolStripButtonRigth";
            this.toolStripButtonRigth.Size = new System.Drawing.Size(23, 22);
            this.toolStripButtonRigth.Text = "Move Rigth";
            this.toolStripButtonRigth.ToolTipText = "Move Rigth";
            this.toolStripButtonRigth.Click += new System.EventHandler(this.toolStripButtonRigth_Click);
            // 
            // veMapControl
            // 
            this.veMapControl.DeltaX = ((byte)(5));
            this.veMapControl.DeltaY = ((byte)(5));
            this.veMapControl.Dock = System.Windows.Forms.DockStyle.Fill;
            this.veMapControl.Latitude = 41.783896;
            this.veMapControl.Location = new System.Drawing.Point(0, 74);
            this.veMapControl.Longitude = -70.732356;
            this.veMapControl.Map = "map";
            this.veMapControl.MapStyle = VELibrary.VEMapStyle.Road;
            this.veMapControl.MiniMapSize = VELibrary.VEMiniMapSize.Small;
            this.veMapControl.MiniMapVisible = true;
            this.veMapControl.Name = "veMapControl";
            this.veMapControl.Size = new System.Drawing.Size(826, 585);
            this.veMapControl.TabIndex = 0;
            this.veMapControl.Url = new System.Uri("http://www.geolabvirtualmaps.com/HaynnisDemo.aspx", System.UriKind.Absolute);
            this.veMapControl.ZoomLevel = 9;
            // 
            // toolStripButton1
            // 
            this.toolStripButton1.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.toolStripButton1.Image = ((System.Drawing.Image)(resources.GetObject("toolStripButton1.Image")));
            this.toolStripButton1.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.toolStripButton1.Name = "toolStripButton1";
            this.toolStripButton1.Size = new System.Drawing.Size(23, 22);
            this.toolStripButton1.Text = "toolStripButton1";
            this.toolStripButton1.Click += new System.EventHandler(this.toolStripButton1_Click);
            // 
            // VEFormMain
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(826, 659);
            this.Controls.Add(this.veMapControl);
            this.Controls.Add(this.toolStripUrl);
            this.Controls.Add(this.toolStripMain);
            this.Controls.Add(this.menuStripMain);
            this.MainMenuStrip = this.menuStripMain;
            this.Name = "VEFormMain";
            this.Text = "VE Form Main";
            this.Shown += new System.EventHandler(this.VEFormMain_Shown);
            this.menuStripMain.ResumeLayout(false);
            this.menuStripMain.PerformLayout();
            this.toolStripMain.ResumeLayout(false);
            this.toolStripMain.PerformLayout();
            this.toolStripUrl.ResumeLayout(false);
            this.toolStripUrl.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private VELibrary.Controls.VEMapControl veMapControl;
        private System.Windows.Forms.MenuStrip menuStripMain;
        private System.Windows.Forms.ToolStripMenuItem fileToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem exitToolStripMenuItem;
        private System.Windows.Forms.ToolStrip toolStripMain;
        private System.Windows.Forms.ToolStripButton toolStripButtonZoomIn;
        private System.Windows.Forms.ToolStripButton toolStripButtonZoomOut;
        private System.Windows.Forms.ToolStripButton toolStripButtonLeft;
        private System.Windows.Forms.ToolStripButton toolStripButtonUp;
        private System.Windows.Forms.ToolStripButton toolStripButtonDown;
        private System.Windows.Forms.ToolStripButton toolStripButtonRigth;
        private System.Windows.Forms.ToolStripMenuItem optionsToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem showMiniMapToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem showDashBoradToolStripMenuItem;
        private System.Windows.Forms.ToolStrip toolStripUrl;
        private System.Windows.Forms.ToolStripLabel toolStripLabelUrl;
        private System.Windows.Forms.ToolStripTextBox toolStripTextBoxURL;
        private System.Windows.Forms.ToolStripButton toolStripButtonGo;
        private System.Windows.Forms.ToolStripButton toolStripButton1;
    }
}