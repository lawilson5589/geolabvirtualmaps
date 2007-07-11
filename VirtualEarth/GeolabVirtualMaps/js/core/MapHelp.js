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
