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
