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

