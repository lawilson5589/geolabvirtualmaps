// JScript File

/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.HashTable = function(){
    // Initialize the base.
    Geolab.HashTable.initializeBase(this);
    this.hashtable = new Array();
};
Geolab.HashTable.prototype = { 
    clear : function() {
       this.hashtable = null;
       this.hashtable = new Array();
    },
    containsKey : function(key) {
       var exists = false;
       for (var i in this.hashtable) {
          if (i == key && this.hashtable[i] != null) {
             exists = true;
             break;
             }
          }
       return exists;
    },
    containsValue : function(value) {
       var contains = false;
       if (value != null) {
          for (var i in this.hashtable) {
             if (this.hashtable[i] == value) {
                contains = true;
                break;
                }
             }
          }
       return contains;
    },
    get : function(key) {
       return this.hashtable[key];
    },
    isEmpty : function() {
       return (parseInt(this.size()) == 0) ? true : false;
    },
    keys : function() {
       var keys = new Array();
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) keys.push(i);
          }
       return keys;
    },
    put : function(key, value) {
        if (key == null || value == null) {
            throw "NullPointerException {" + key + "},{" + value + "}";
        }
        else {
            this.hashtable[key] = value;
        }
    },
    remove : function(key) {
       var rtn = this.hashtable[key];
       this.hashtable[key] = null;
       return rtn;
    },
    size : function() {
       var size = 0;
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) size ++;
          }
       return size;
    },
    toString : function() {
       var result = "";
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) result += "{" + i + "},{" + this.hashtable[i] + "}\n";
          }
       return result;
    },
    values : function() {
       var values = new Array();
       for (var i in this.hashtable) {
          if (this.hashtable[i] != null) values.push(this.hashtable[i]);
          }
       return values;
    },
    entrySet : function() {
       return this.hashtable;
    },
    dispose : function(){
        this.hashtable = null;
    }
};

/* Author: JBaltikauskas */
// Uses functions GetWindowHeight() and GetWindowWidth() from include
// <script src="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=5" type="text/javascript"></script>
Type.registerNamespace("Geolab");

VEMap.ContainerHeight = function(){
    return (GetWindowHeight() - Screen.offsetY);
};

VEMap.ContainerWidth = function(){
    return (GetWindowWidth() - Screen.offsetX);
};
VEMap.MapHeight = function(){
    return (VEMap.ContainerHeight() - Screen.ToolBarHeight - Screen.mapoffsetY);
};
VEMap.MapWidth = function(){
    return (VEMap.ContainerWidth() - Screen.mapoffsetX);
};
VEMap.SetMapSize = function(){
    try{
        var el = $get(Screen.DivIDContainer);
        if( el !== null){
            el.style.width = VEMap.ContainerWidth() + "px";
            el.style.height = VEMap.ContainerHeight() + "px";
            el = null;
        }
        el = $get(Screen.DivIDToolbar);
        var w = VEMap.MapWidth();
        if( el !== null){
            el.style.width = w + "px";
            el = null;
        }
        el = $get(Screen.DivIDMap);
        if( el !== null){
            var menu = $get(Screen.DivIDLeftMenu);
            var menuwidth = 0;
            if(menu){
                menuwidth = parseInt(menu.style.width);
            }
            el.style.width = w + "px";
            el.style.height = VEMap.MapHeight() + "px";
            w = null;
        }
        el = null;
    }catch(e){
        Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
    }
};


Geolab.Dashboard = function(){
    this.DashBoardID = "MSVE_navAction_mapStyleCell";
    this.ElemIDPrefix = "MSVE_navAction_"
    this.ElemclassName = "MSVE_MapStyle";
    this.HeaderclassName = "MSVE_MapStyle_Header";
};
// Static method
Geolab.Dashboard.TooltipIconFormat =  '<img src="{0}" width="24" height="24" alt=""/>';
Geolab.Dashboard.prototype = {
    // The virtual function. User must implement Dashboard.init = function(){ ... }
    Init : null,
    
     __Hover : function(el){
       var obj = this;
       el.isClicked = false;
       var over = function(){
            if(!el.isClicked){
                el.className = obj.ElemclassName + "_Hover";
                if(el.tooltip){
                    var loc = Sys.UI.DomElement.getBounds(el);
                    var txt = $get('TooltipText')
                    if(txt){
                        txt.innerHTML = el.tooltip;   
                        var div = $get('Tooltip');
                        div.style.top = loc.y + "px";
                        if(el.tooltipicon){
                            var ico = $get('TooltipIcon');
                            ico.innerHTML = String.format(Geolab.Dashboard.TooltipIconFormat, el.tooltipicon);
                            ico = null;                       
                        }
                        div.style.left = loc.x + loc.width + 10 + "px";
                        div.style.display = 'block'; 
                        
                        txt = null; div = null;
                    }
                }
            }
       };
       var out = function(){
            if(!el.isClicked){
                el.className = obj.ElemclassName;
                if(el.tooltip){
                    var txt = $get('TooltipText')
                    if(txt){
                        txt.innerHTML = "";   
                        var div = $get('Tooltip');
                        div.style.display = 'none'; 
                        if(el.tooltipicon){
                            var ico = $get('TooltipIcon');
                            ico.innerHTML = '';
                            ico = null;
                        }
                        txt = null; div = null;
                    }
                }
            }
       };
       var click = function(){ ;
            var cs = el.className.match(/_clicked/i);
            if(cs){
                el.className = obj.ElemclassName;
            }else{
                el.className = obj.ElemclassName + "_clicked";
                if(el.tooltip){
                    var txt = $get('TooltipText')
                    if(txt){
                        txt.innerHTML = "";   
                        var div = $get('Tooltip');
                        div.style.display = 'none'; 
                        if(el.tooltipicon){
                            var ico = $get('TooltipIcon');
                            ico.innerHTML = '';
                            ico = null;
                        }
                        txt = null; div = null;
                    }
                }
            }
            el.isClicked = !el.isClicked;
       };
        el.attachEvent("onmouseover", over);
        el.attachEvent("onclick", click);
        el.attachEvent("onmouseout", out);
        function detach() {
            el.detachEvent("onmouseover", over);
            el.detachEvent("onmouseout", out);
            el.detachEvent("onclick", click);
        }
        window.attachEvent("onunload", detach);
        over = null; out = null; click = null;
    },
    CreateElement : function(id, title, onClickFunction, tooltip, imgScr)
    {
        var el = document.createElement("div");
        el.innerHTML = title ;
        el.id = this.ElemIDPrefix + id;
        if(typeof(onClickFunction)==='function'){
            el.className = this.ElemclassName;
            el.attachEvent("onclick", onClickFunction);
            el.tooltip = tooltip;
            el.tooltipicon = imgScr;
            this.__Hover(el);
        }else{
            el.className = this.HeaderclassName;
	    }
	    var dash = $get(this.DashBoardID);
	    if(dash) dash.appendChild(el);
        dash = null; onClickFunction = null; tooltip=null; imgScr=null;
    },
    InitializeTooltip : function(){
        try{
            var dlb = document.createElement('div');
            dlb.setAttribute("id", 'Tooltip');
            dlb.innerHTML =  '<div id="TooltipIcon"></div><div id="TooltipText"></div>';   
            document.body.appendChild(dlb);
            dlb = null;
         }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
         }  
    }
};
Geolab.Dashboard.registerClass('Geolab.Dashboard');
var Dashboard = new Geolab.Dashboard();
/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");

Geolab.Color = function(){

};
Geolab.Color.prototype = {
    // Define Colors with opacity 0.75
    'Red' :  new VEColor(255, 0, 0, 0.75),
    'Green' :  new VEColor(0, 255, 0, 0.75),
    'Blue' :  new VEColor(0, 0, 255, 0.75),
    'Magenta' :  new VEColor(255, 0, 255, 0.75),
    'Lime' :  new VEColor(0, 230, 0, 0.75),
    'DodgerBlue' :  new VEColor(0,102,255, 0.75),
    'RedOrange' :  new VEColor(0,153,153, 0.75),
    'Teal' : new VEColor(0,153,153, 0.75),
    'Purple' :  new VEColor(153,0,153, 0.75),
    'Gold' :  new VEColor(255,174,0, 0.75),
    'DeepPink' :  new VEColor(226,0,121, 0.75),
    'MediumBlue' :  new VEColor(51,0,204, 0.75),
    setColor : function(r,b,g,a){
        return new VEColor(r,b,g,a);
    }
};
Geolab.Color.registerClass('Geolab.Color');
// Create Shortcut
var $Color = new Geolab.Color();
/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");

Geolab.DialogBox = function(){
    this.__screenXOffset = -200;
    this.__screenYOffset = -75;
    this.__top  = 0;
    this.__left = 0;
    this.__dlgID = "dialogBox";
    try{
        var image = new Image(); // Preload
        image.src = "images/ajax_loading_content.gif";
        this.__top = this.__screenYOffset + VEMap.ContainerHeight()/2;
        this.__left = this.__screenXOffset + VEMap.ContainerWidth()/2;
    }
    catch(e){
        Sys.Debug.trace("Geolab.DialogBox" + e.message);
    }
}; 

   
Geolab.DialogBox.prototype = {
    PopupFormat :  
            '<div id="DialogWindow" style="display:block;left:{0}px;top:{1}px;">'+
            '<div id="DialogHeader"><b>BSC Geographics Lab</b></div>' +
            '<div id="DialogContent"><img alt="" id="DialogLoadingImg" src="images/ajax_loading_content.gif" />' + 
            '<br /><b style="color:#0066CC;">www.GeographicsLab.org</b></div>',
            
    ModalBgFormat :  '<div id="ModalBg" style="display: block"></div>',
            
    Show : function(isPopup, setTimeout){
        try{
            var dlb = document.createElement('div');
            dlb.setAttribute("id", this.__dlgID); 
            if(isPopup){
                dlb.innerHTML =  String.format(this.PopupFormat, this.__left, this.__top)
            }else{          
                dlb.innerHTML =  this.ModalBgFormat +  String.format(this.PopupFormat, this.__left, this.__top)
            }
            document.body.appendChild(dlb);
            if(typeof(setTimeout) == "number"){
                window.setTimeout('DialogBox.Hide()', setTimeout); 
            }
            dlb = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }  
    },

    Hide : function ()
    {
        try{
            var dlb = $get(this.__dlgID);
            dlb.innerHTML = "";
            inner = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    }
}; 
var DialogBox = new Geolab.DialogBox();

Geolab.DialogBox.registerClass('Geolab.DialogBox');

// JScript File
function Cover(bottom, top, ignoreSize) {
    var location = Sys.UI.DomElement.getLocation(bottom);
    top.style.position = 'absolute';
    top.style.top = location.y + 'px';
    top.style.left = location.x + 'px';
    if (!ignoreSize) {
        top.style.height = bottom.offsetHeight  + 'px';
        top.style.width = bottom.offsetWidth + 'px';
    }
    location = null;
}

function NorthMapArrowShow(show){
    var arrow = $get("NorthImg");
    if(arrow){
        if(show) {
            arrow.style.display = 'block'; 
        }else{
            arrow.style.display = 'none'; // Hide north arrow then Map Help is popup
        }
    }
    arrow = null;
}
/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.MapNav = function(MapNav){
    this.__mapDivID = Screen.DivIDMap;
    this.__mapNavVar = MapNav ; // Map navigation variable for delay animation
    this.__mapSize = VEMap;
    this.__mapLegendWidth = 240;
    this.__mapLegendMargin = 0;
    this.__mapSizeIncrement = 260;
    this.__mapNavTop = 15;
    this.__mapNavLeft = 150;
    this.__miniMapTop = 285;
    this.__miniMapLeft = 525;
    this.__panSpeed = 5;
    this.__panXY = 25;
    this.__miniMapSizeSmall = 138;
    this.__miniMapSizeLarge = 180;
    this.__miniMapMarginX = 35;
    this.__miniMapOffsetX = this.__miniMapSizeSmall + this.__miniMapMarginX;
    this.__miniMapMarginY = 75;
    this.__miniMapOffsetY = this.__miniMapSizeSmall + this.__miniMapMarginY;
};
Geolab.MapNav.prototype = {
    onResize : function() {
        var elem = $get(this.__mapDivID);
        if(elem){
            map.Resize(this.__mapSize.MapWidth(), this.__mapSize.MapHeight());
            this.HideMiniMap();
            window.setTimeout(""+this.__mapNavVar+".setNavigationArrowPositions()", 500);
        }
        elem = null;
    },   
    onTollBarHelpOn : function (){
        var panel = $get('MapHelp');
        if(panel){
            panel.style.display = 'block';
            panel = null;
        }
    },
    onTollBarHelpOff : function (){
        var panel = $get('MapHelp');
        if(panel){
            panel.style.display = 'none';
            panel = null;
        }
    },
    onMapLegendOn : function (){
        var panel = $get('MapLefthMenu');
        if(panel){
            panel.style.display = 'block';
            panel = null;
        }
    },
    onMapLegendOff : function (){
        var panel = $get('MapLefthMenu');
        if(panel){
            panel.style.display = 'none';
            delete panel;
        }
    },
    setNavigationArrowPositions : function(){
        var left = map.GetLeft();
        var top = map.GetTop();
        var offsetx = 15;
        var offsety = 15;
        var w = this.__mapSize.MapWidth();
        var h = this.__mapSize.MapHeight();
        var elem = $get("NorthImg");
        if(elem){
            elem.style.top =  top + "px";
            elem.style.left = left + w/2 + "px";
     
            elem = $get("NorthWestImg");
            elem.style.top = top + "px";
            elem.style.left = left + "px";
     
            elem = $get("NorthEastImg");
            elem.style.top = top + "px";
            elem.style.left = left + w - offsetx  + "px";

            elem = $get("SouthImg");
            elem.style.top = top + h - offsety + "px";
            elem.style.left = left + w/2 + "px";

            elem = $get("SouthWestImg");
            elem.style.top =  top + h - offsety +  "px";
            elem.style.left =  left + "px";

            elem = $get("SouthEastImg");
            elem.style.top = top + h - offsety +  "px";
            elem.style.left = left + w - offsetx + "px";
           
            elem = $get("WestImg");
            elem.style.top =  top + h/2 - offsety +  "px";
            elem.style.left =  left + "px";

            elem = $get("EastImg");
            elem.style.top = top + h/2 - offsety +  "px";
            elem.style.left = left + w - offsetx + "px";
            elem = null;
        }
    },
    onZoomIn : function(){
        if(map)
            map.ZoomIn();
    },
    onZoomOut : function(){
        if(map)
            map.ZoomOut();
    },
    onMoveUp : function(){
        if(map)
            map.Pan(0,-this.__panXY);
    },
    onMoveDown : function(){
        if(map)
            map.Pan(0,this.__panXY);
    },
    onMoveLeft : function(){
        if(map)
            map.Pan(-this.__panXY,0);
    },
    onMoveRight : function(){
        if(map)
            map.Pan(this.__panXY,0);
    },
    onMoveNorth : function(){
        if(map)
            map.StartContinuousPan(0,-this.__panSpeed);
    },
    onMoveNorthWest : function(){
        if(map)
            map.StartContinuousPan(-this.__panSpeed,-this.__panSpeed);
    },
    onMoveNorthEast : function(){
        if(map)
            map.StartContinuousPan(this.__panSpeed, - this.__panSpeed);
    },
    onMoveSouth : function(){
        if(map)
            map.StartContinuousPan(0, this.__panSpeed);
    },
    onMoveSouthWest : function(){
        if(map)
            map.StartContinuousPan(-this.__panSpeed, this.__panSpeed);
    },
    onMoveSouthEast : function(){
        if(map)
            map.StartContinuousPan(this.__panSpeed, this.__panSpeed);
    },
    onMoveWest : function(){
        if(map)
            map.StartContinuousPan(-this.__panSpeed, 0);
    },
    onMoveEast : function(){
        if(map)
            map.StartContinuousPan(this.__panSpeed, 0);
    },
    EndContinuousPan : function () {
        if(map)
            map.EndContinuousPan();
    },
    SetMapStyleRoad : function(){
        if(map)
            map.SetMapStyle(VEMapStyle.Road);
    },
    SetMapStyleBirdseye : function(){
        if(map)
            map.SetMapStyle(VEMapStyle.Birdseye);
    },
    KeyboardHandler : function (e)
    {
        switch(e.keyCode){
            case 83: //s
                mapNav.EndContinuousPan();
            break;
            case 69: //e
                mapNav.onMoveNorthEast();
            break;
            case 81: //q
                mapNav.onMoveNorthWest();
            break;
            case 87: //w
                mapNav.onMoveNorth();
            break;
            case 68: //d
                mapNav.onMoveEast();
            break;
            case 65: //a
                mapNav.onMoveWest();
            break;
            case 88: //x
                mapNav.onMoveSouth();
            break;
            case 67: //c
                mapNav.onMoveSouthEast();
            break;
            case 90: //z
                mapNav.onMoveSouthWest();
            break;
            case 38: // arrow up
                if (map.IsBirdseyeAvailable()){
                    map.SetBirdseyeOrientation(VEOrientation.North);
                }
            break;
            case 40: // arrow down
                if (map.IsBirdseyeAvailable()){
                    map.SetBirdseyeOrientation(VEOrientation.South);
                }
            break;
            case 37: // arrow left
                if (map.IsBirdseyeAvailable()){
                    map.SetBirdseyeOrientation(VEOrientation.West);
                }
            break;
            case 39: // arrow rigth
                if (map.IsBirdseyeAvailable()){
                    map.SetBirdseyeOrientation(VEOrientation.East);
                }
            break;
            case 70: //f
                mapNav.onZoomIn();
            break;
            case 71: //g
                mapNav.onZoomOut();
            break;
            case 86: //v
                mapNav.setMapStyleRoad();
            break;
            case 66: //b
                mapNav.setMapStyleBirdseye();
            break;
            default:
                break;
        }
        return true;
    },
    SetNavControl : function()
    {
        this.ShowMiniMap();
        window.setTimeout(""+this.__mapNavVar+".NavArrows()", 200);
        var el  = $get('MSVE_minimap');

        var child = $get('MSVE_minimap_resize');
        if(child){
            el.removeChild(child);
        }

        el = $get('MSVE_minimap_style_div');
        while(el.firstChild){
            el.removeChild(el.firstChild);
        }
        el = null;
        child = null;
            
    },
    HideMiniMap : function(){
        var elem = $get("MSVE_minimap");
        if(elem){
            elem.style.visibility = "hidden";
            window.setTimeout(""+this.__mapNavVar+".ShowMiniMap()", 500);
        }
        elem = null;
    },
    ShowMiniMap : function(){
        //debugger
        var elem = $get("MSVE_minimap");
        var mapdiv = $get(this.__mapDivID); // geoMap elem
        this.__miniMapLeft = parseInt(mapdiv.style.width) - this.__miniMapOffsetX;
        this.__miniMapTop = parseInt(mapdiv.style.height) - this.__miniMapOffsetY;
        if(elem){
            elem.style.visibility = "visible";
            map.ShowMiniMap( this.__miniMapLeft, this.__miniMapTop, VEMiniMapSize.Small);
        }else{
            map.ShowMiniMap(this.__miniMapLeft, this.__miniMapTop, VEMiniMapSize.Small); // Create Mini Map
        }
        elem = null;
        mapdiv = null;
    },
    ShowFindControl : function ()
    {
        if(map) map.ShowFindControl();
    },
    HideFindControl : function ()
    {
        if(map) map.HideFindControl();
    },
    NavArrows : function()
    {
        var left = 0;
        var top = 0;
        var offsetx = 15;
        var offsety = 15;
        var m = this.__mapNavVar; //schorcut
        var path = '<img src="images/map_icons/';
        var control = document.createElement("div");
        control.id = "NorthImg";
        control.style.top = top + "px";
        control.style.left = left + this.__mapSize.MapWidth()/2 + "px";
        control.innerHTML = path + 'icon_pan_north.gif" onmouseover="'+m+'.onMoveNorth()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanUp.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "NorthWestImg";
        control.style.top = top + "px";
        control.style.left = left + "px";
        control.innerHTML = path + 'icon_pan_northwest.gif" onmouseover="'+m+'.onMoveNorthWest()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanLeftUp.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "NorthEastImg";
        control.style.top = top + "px";
        control.style.left = left + this.__mapSize.MapWidth() - offsetx  + "px";
        control.innerHTML = path + 'icon_pan_northeast.gif" onmouseover="'+m+'.onMoveNorthEast()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanRightUp.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "SouthImg";
        control.style.top = top + this.__mapSize.MapHeight() - offsety + "px";
        control.style.left = left + this.__mapSize.MapWidth()/2 + "px";
        control.innerHTML = path + 'icon_pan_south.gif" onmouseover="'+m+'.onMoveSouth()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanDown.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "SouthWestImg";
        control.style.top =  top + this.__mapSize.MapHeight() - offsety +  "px";
        control.style.left =  left + "px";
        control.innerHTML = path + 'icon_pan_southwest.gif" onmouseover="'+m+'.onMoveSouthWest()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanLeftDown.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "SouthEastImg";
        control.style.top = top + this.__mapSize.MapHeight() - offsety +  "px";
        control.style.left = left + this.__mapSize.MapWidth() - offsetx + "px";
        control.innerHTML = path + 'icon_pan_southeast.gif" onmouseover="'+m+'.onMoveSouthEast()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanRightDown.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "WestImg";
        control.style.top =  top + this.__mapSize.MapHeight()/2 - offsety +  "px";
        control.style.left =  left + "px";
        control.innerHTML = path + 'icon_pan_west.gif" onmouseover="'+m+'.onMoveWest()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanLeft.cur), pointer;"/>';
        map.AddControl(control);
        control = document.createElement("div");
        control.id = "EastImg";
        control.style.top = top + this.__mapSize.MapHeight()/2 - offsety +  "px";
        control.style.left = left + this.__mapSize.MapWidth() - offsetx + "px";
        control.innerHTML = path + 'icon_pan_east.gif" onmouseover="'+m+'.onMoveEast()" onmouseout="'+m+'.EndContinuousPan()" style="cursor: url(images/cursors/MapPanRight.cur), pointer;"/>';
        map.AddControl(control);
        control = null;
    }
}
Geolab.MapNav.registerClass('Geolab.MapNav');


/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.GeoRss = function(rssxml, png) {
    function onFeedLoad(feed){
        if(png){
            var lenght = feed.GetShapeCount();
            for(var i=0; i<lenght; i++)
            {
                var shp = feed.GetShapeByIndex(i);
                shp.SetCustomIcon("<img src=\"" + png +"\" />");
                shp = null;
            }
        }
    };
    try {
        var shapeLayer = new VEShapeLayer();
        var veLayerSpec = new VEShapeSourceSpecification(VEDataType.GeoRSS, rssxml, shapeLayer);
        map.ImportShapeLayerData(veLayerSpec, onFeedLoad, true);
        shapeLayer = null; veLayerSpec = null;
    }
    catch(error) {
        Sys.Debug.trace(error.message);
    }
};
Geolab.GeoRss.registerClass('Geolab.GeoRss');
/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
// IMPORTANT: 
//      The Geolab.PushPinLayer object self variable this.__ShapeNames will hold all Shapes
// and static member Geolab.PushPinLayer.Layers will track all PushPinShapeLayers in the map.
// The tho hastables allow quicly access VEMap Objects 
Geolab.PushPinLayer = function(layerID, isPinsNumeric){
    this.__webService = null;
    this.__layerID = layerID;
    this.__layer = null;
    this.PushPinCustomFormat = '<div class="pinStyle" style="background: url({0}) no-repeat 0 0;"><div class="text">{1}</div></div>';
    if(isPinsNumeric){  this.PushPinIsNumeric = isPinsNumeric;} else{ this.PushPinIsNumeric=true};
    this.ShapeDescriptionFormat = "<br /><p>{0}</p>";
    this.bestView = false;    // Flag which sets "Best View" after shapes are add in the map
    this.PushPinMouseOut = null; // Will be set at runtime
    this.shapesPoints = null;
};

// Static member to track all PushPin layers
Geolab.PushPinLayer.Layers = new Geolab.HashTable();

// Prototypes
Geolab.PushPinLayer.prototype = {
    
    // Public methods
    SetWebService : function(webService){
        this.__webService = webService;
    },
    SetBestView : function (flag){
        this.bestView = flag;
    },
    InitBestView : function(){
        if(this.bestView && this.shapesPoints) 
            map.SetMapView(this.shapesPoints);
    },
    DeleteAllShapes : function()
    {
        try
        {
           this.__layer.DeleteAllShapes();
        }
        catch (e)
        {
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    GetShapeByID : function(name){
        return this.__layer.GetShapeByID(name);
    },
    ToggleVisibility : function (){
        if(this.__layer){
                if(this.__layer.GetVisibility()){ this.__layer.Hide()} 
                else { 
                    this.InitBestView();
                    this.__layer.Show(); 
                };
        }
    },
    ToggleShapeVisibility : function (name){
        if(this.__layer){
            var id = this.GetShape(name);
            if(id){
                if(id.GetVisibility()){ id.Hide()} else { id.Show() };
                id = null;
            }
        }
    },
    
    AddPushpin : function(obj, id){
        // Assuming the incoming object is 
        // {'Type':'VEShapeType.Pushpin','Latitude':41.5519999,'Longitude':-70.6115,'Title':'Fire Department','Icon':'','PhotoURL':'','Description':'Falmouth Town Fire Department<br />399 Main St <br />Falmouth, MA 02540 <br />(508) 548 2325<br />'}
        try{
             //Add a pushpin to the new layer      
             var loc = new VELatLong(obj.Latitude,obj.Longitude);  
             var shape = new VEShape(VEShapeType.Pushpin, loc);  
             if(obj.Icon != '') {
                if(this.PushPinCustomFormat != '') { 
                    if(this.PushPinIsNumeric){
                        shape.SetCustomIcon(String.format(this.PushPinCustomFormat, obj.Icon, id));
                       }else{
                        shape.SetCustomIcon(String.format(this.PushPinCustomFormat, obj.Icon));
                       }
                }else{
                    shape.SetCustomIcon(obj.Icon);
                }
             }
             shape.SetTitle(obj.Title);         
             shape.SetDescription(String.format(this.ShapeDescriptionFormat,obj.Description ));   
             //shape.SetDescription(obj.Description); 
             this.__layer.AddShape(shape); 
             Array.add(this.shapesPoints, loc);
             shape = null; loc = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        obj = null;
    },
    Invoke: function(args){
        // Store variables to use after AJAX callback
        var self = this;
        function OnFailed(error)
        {
            // This is the callback function invoked if the Web service failed.
            // Display the error.    
            Sys.Debug.trace(error.get_message());
            error = null;
        };
        
        function OnSucceeded(results, eventArgs)
        {    
            // This the handler for the Web request completed event
            // that is used to display return data.
            try{

                var json = "var as=new Array();";
                //eval(json);
                if(collection)
                {   
                    // First time ever any PushPinLayer added on map  
//                    if(self.__layer == null){
//                        self.__layer = new VEShapeLayer();
//                        self.__layer.SetTitle(self.__layerID);
//                        self.__LayersIDIndex = self.__layer.iid;
//                        // Put key like PTown and MSVE unique id in hash
//                        Geolab.PushPinLayer.Layers.put(self.__layer.Name,self.__layer.iid);
//                        self.__ShapeLayerIndex = map.GetShapeLayerCount();
//                        map.AddShapeLayer(self.__layer);
//                    }
//                    //---------------------------------------

//                    // {'Type':'VEShapeType.Pushpin','LatLong':new VELatLong(41.5519999,-70.6115),'Title':'Fire Department','Icon':'','Description':'Falmouth Town Fire Department<br />399 Main St <br />Falmouth, MA 02540 <br />(508) 548 2325<br />','PhotoURL':''}
//                    for(var i in collection){
//                        self.AddPushpin(collection[i], ++i);                          
//                    }
//                    self.InitBestView();
//                    collection = null; 
                }
            }catch(e){
                Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
            }
            results = null; eventArgs = null; 
        }; 
    
        //    Usage of Ajax webservices
        //    <asp:ScriptManager ID="scriptManagerMap" runat="server">
        //    <services> // Add web service
        //        <asp:ServiceReference Path="~/MapWebService/ .... .asmx" />
        //    </services>
        //    Javascript call:
        //    var pin = new Geolab.PushPinLayer('CapeCode_Routes');
        //    pin.SetWebService('Geolab.CapeCod_FireDeptartment.FireStation');
        //    pin.Invoke('Fire_Cape');
        try{
            if(this.__layer == null){
                this.args = args; // Hold arg value for callback
                if(!this.shapesPoints) this.shapesPoints = new Array();
                //eval( this.__webService + "('"+ args + "',OnSucceeded,OnFailed)");
            }else{
                this.ToggleVisibility();
            }
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        
    }
};
Geolab.PushPinLayer.registerClass('Geolab.PushPinLayer');

/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
// IMPORTANT: 
//      The Geolab.PolyLineLayer object instance variable this.__ShapeNames will hold all Shapes
// and static member Geolab.PolyLineLayer.Layers will track all PolyLineShapeLayers in the map.
// The tho hastables allow quicly access VEMap Objects 
Geolab.PolyLineLayer = function(layerID){
    this.__webService = null;
    this.__layerID = layerID;
    this.__layer = null;
    this.__ShapeNames = new Geolab.HashTable();
};
// Static member to track all Polyline layers
Geolab.PolyLineLayer.Layers = new Geolab.HashTable();
// Prototypes
Geolab.PolyLineLayer.prototype = {
    
    // Public methods
    SetWebService : function(webService){
        this.__webService = webService;
    },
    DeleteAllShapes : function()
    {
        try
        {
           this.__layer.DeleteAllShapes();
           this.__ShapeNames.clear();
        }
        catch (e)
        {
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    __GetShape : function(name){
        return this.__layer.GetShapeByID(this.__ShapeNames.get(name))
    },
    
    ToggleShapeVisibility : function (name){
        if(this.__layer){
            var id = this.__GetShape(name);
            if(id){
                if(id.GetVisibility()){ 
                    id.Hide();
                    map.HideInfoBox();
                } 
                else {
                    id.Show();
                    id.GetPoints(); 
                    map.SetMapView(id.GetPoints());
                    map.ShowInfoBox(id);
                };
                id = null;
            }
        }
    },
    
    Invoke: function(args){
        // Store variables to use after AJAX callback
        var obj = this;
        function OnFailed(error)
        {
            // This is the callback function invoked if the Web service failed.
            // Display the error.    
            Sys.Debug.trace(error.get_message());
            error = null;
        };
        
        function OnSucceeded(results, eventArgs)
        {    
            // This the handler for the Web request completed event
            // that is used to display return data.
            try{
                var polyline = null;
                eval(results);
                if(polyline)
                {   
                    // First time ever any polyline added on map  
                    if(obj.__layer == null){
                        obj.__layer = new VEShapeLayer();
                        obj.__layer.SetTitle(obj.__layerID);
                        obj.__LayersIDIndex = obj.__layer.iid;
                        // Put key like PTown and MSVE unique id in hash
                        Geolab.PolyLineLayer.Layers.put(obj.__layer.Name,obj.__layer.iid);
                        obj.__ShapeLayerIndex = map.GetShapeLayerCount();
                        map.AddShapeLayer(obj.__layer);
                    }
                    //---------------------------------------
                    
                    obj.__layer.AddShape(polyline);
                    obj.__ShapeNames.put(obj.args, polyline.GetID());
                    map.SetMapView(polyline.GetPoints());
                    map.ShowInfoBox(polyline);
                    polyline = null; 
                }
            }catch(e){
                Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
            }
            results = null; eventArgs = null; 
        }; 
    
        //    Usage of Ajax webservices
        //    <asp:ScriptManager ID="scriptManagerMap" runat="server">
        //    <services> // Add web service
        //        <asp:ServiceReference Path="~/MapWebService/CapeCod_WebService.asmx" />
        //    </services>
        //    Javascript call:
        //    var CapeCodeRoutes = new Geolab.PolyLineLayer('CapeCode_Routes');
        //    CapeCodeRoutes.setWebService('Geolab.CapeCod_WebService.BusLine');
        //    CapeCodeRoutes.invoke('PTown'); 
        try{
            if(!this.__ShapeNames.containsKey(args)){
                this.args = args; // Hold arg value for callback
                eval( this.__webService + "('"+ args + "',OnSucceeded,OnFailed)");
            }else{
                this.ToggleShapeVisibility(args);
            }
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
        
    }
};

Geolab.PolyLineLayer.registerClass('Geolab.PolyLineLayer');
/* Author: JBaltikauskas */
Type.registerNamespace("Geolab");
Geolab.Vehicle = function(){
    this.__path = "";
    this.__pintitle = "";
    this.__icon = null;
    this.__layer = new VEShapeLayer();
    this.__layer.SetTitle('Vehicles');
    this.__reverseGeoCoding = true;
    this.__OnlyFirstAddress = true;
    this.timeoutID = null;
    this.refreshTime = 30000; //miliseconds
    map.AddShapeLayer(this.__layer);
    this.valueLabelID = null;

    
    Geolab.Vehicle.instance = this;
};
// The reference to instance for callabacks
Geolab.Vehicle.instance = null;
Geolab.Vehicle.prototype = {
    
    // Private methods
    __DeleteAllShapes : function()
    {
        try
        {
            this.__layer.DeleteAllShapes();
        }
        catch (e)
        {
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    __AddPushpin : function(obj){
        // Assuming the incoming object is 
        // [Date, Time, Latitude, Longitude, LatLonAccuracy, PositionSpeed, PositionHeading, Optional=>Address]
        try{
             //Add a pushpin to the new layer         
             var shape = new VEShape(VEShapeType.Pushpin, new VELatLong(obj.Latitude,obj.Longitude));  
             if(obj.CustomIcon != ""){
                shape.SetCustomIcon(obj.CustomIcon); 
             }else{
                shape.SetCustomIcon(Settings.VehicleIcon); 
             }
             
             //map.ClearInfoBoxStyles();
             var address = (obj.LocationInfo != "")? String.format(Geolab.Vehicle.AddressFormat,obj.LocationInfo) : ""; 
             if(obj.Title != ""){
                shape.SetTitle(obj.Title);
             }else {
                shape.SetTitle(this.__pintitle);  
             }
                 
             shape.SetDescription(String.format(Geolab.Vehicle.PinDescriptionFormat,
                obj.Date, 
                obj.Time, 
                obj.Latitude, 
                obj.Longitude, 
                obj.Accuracy, 
                obj.Speed, 
                obj.Heading, 
                obj.SatelliteNumber,
                obj.BatteryLevel,
                obj.SignalStrength,
                obj.GeolabID,
                address,
                obj.Froute
                )
             );   
             this.__layer.AddShape(shape); 
             shape = null; address = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    // Public methods
    setPath: function(path){
        this.__path = path;
    },
    setTitle: function(pushpinstitle){
        this.__pintitle = pushpinstitle;
    },    
    setIcon : function(icon){
        this.__icon = icon;
    },
    setGeoCoding: function(bool){
        this.__reverseGeoCoding = bool;
    },
    invoke: function(){
        var self = this;
        var __onWebRequestCompleted = function (executor, eventArgs)
            {    
                // This the handler for the Web request completed event
                // that is used to display return data.
                if(executor.get_responseAvailable())
                {
                    try{
                        var collection = new Array;

                        eval(executor.get_responseData());
                        self.__layer.DeleteAllShapes();
                        for(var i in collection){
                            //Sys.Debug.trace(collection[i]);
                            self.__AddPushpin(collection[i]);
                        }
                        collection = null;
                    }catch(e){
                        Sys.Debug.trace("__onWebRequestCompleted " + e.name + ": " + e.message + "\n" + e.stack);                
                    }
                }
                else
                {
                    if (executor.get_timedOut()){
                        Sys.Debug.trace("Timed Out");
                    }
                    else{
                        if (executor.get_aborted()){
                            Sys.Debug.trace("Aborted");
                        }
                    }
                }
            };
        
        try{
            var request = new Sys.Net.WebRequest();
            request.set_httpVerb("POST");// Set the request verb.
            //- note that the header is the magic key to the endpoint:
            request.get_headers()['Content-Type'] = 'application/json';
            request.add_completed(__onWebRequestCompleted);
            if(this.__reverseGeoCoding){
                request.set_url(String.format("{0}&GeoCoding={1}&OnlyFirstAddress={2}", this.__path,this.__reverseGeoCoding , this.__OnlyFirstAddress));
            }else{
                request.set_url(this.__path);
            }
            request.invoke();
            // Clean Up
            request = null; __onWebRequestCompleted = null;
        }catch(e){
            Sys.Debug.trace(e.name + ": " + e.message + "\n" + e.stack);
        }
    },
    setInterval : function (milisecods){
        this.refreshTime = milisecods;
        this.timeoutID = window.setInterval('Vehicle.invoke()', milisecods);
        if(this.valueLabelID){
            var el = $get(this.valueLabelID);
            if(el)
                el.innerHTML = milisecods/1000;
        }
    },
    clearInterval : function(){
        window.clearTimeout(this.timeoutID);
    },
    Refresh : function(){
        if(this.valueLabelID){
            window.clearTimeout(this.timeoutID);
            var time;
            var el = $get(this.valueLabelID);
            if(el) time = parseInt(el.innerHTML);
            if(!isNaN(time)){
                time = time * 1000;
            }
            else{
                time = 15000;
            }
            this.setInterval(time);
            el = null;
        }
    },
    InitSlider : function (){
        if(this.valueLabelID){
            var d = document.getElementsByTagName('div');
            for (var i = 0; i < d.length; i++) {
                if(d[i].getAttribute('class') == 'ajax__slider_h_rail')
                {
                    d[i].setAttribute('id', 'ajax__slider_h');
                    d[i].setAttribute('onmouseon', "Vehicle.clearInterval()");
                    d[i].setAttribute('onmouseout', "Vehicle.Refresh()");
                }
            }
            d = null;
        }
    }
};


Geolab.Vehicle.PinDescriptionFormat =
        '<table class="vehicle" cellpadding="2" cellspacing="2">'+
        '<tr>'+
        '<td align="right"><b>Date:</b></td>'+
        '<td>{0}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Time:</b></td>'+
        '<td>{1}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Latitude:</b></td>'+
        '<td>{2}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>Longitude:</b></td>'+
        '<td>{3}</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>LatLonAccuracy:</b></td>'+
        '<td>{4} feet</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>PositionSpeed:</b></td>'+
        '<td>{5} miles/hr</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>PositionHeading:</b></td>'+
        '<td>{6} degrees</td>'+
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>GPS Device Status:</b></td>'+
        '<td><img alt="Sattelite" src="images/map_icons/sat_{7}.gif" /><img alt="Signal" src="images/map_icons/sig_{8}.gif" /><img alt="Battery" src="images/map_icons/batt_{9}.gif" /></td>'+    
        '</tr>'+
        '<tr>'+
        '<td align="right"><b>ID:</b></td>'+
        '<td>{10}</td>'+
        '</tr>'+
        '{11}' +
        '<td align="right"><b>Route:</b></td>'+
        '<td>{12}</td>'+
        '</tr>'+
        '</table>';
        
Geolab.Vehicle.AddressFormat =
        '<tr>'+
        '<td align="center" colspan="2"><b>Nearest well-known address:</b>&nbsp;</td>'+
        '</tr>'+
        '<tr>'+
        '<td class="address" colspan="2"><ul>{0}</ul></td>'+
        '</tr>';
    
Geolab.Vehicle.registerClass('Geolab.Vehicle');

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();