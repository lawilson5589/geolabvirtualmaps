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

        //el = $get('MSVE_minimap_style_div');
        //while(el.firstChild){
        //    el.removeChild(el.firstChild);
        //}
        //el = null;
        //child = null;
            
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


