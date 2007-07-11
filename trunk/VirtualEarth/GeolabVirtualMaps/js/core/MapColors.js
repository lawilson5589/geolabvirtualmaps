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
