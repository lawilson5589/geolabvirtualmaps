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