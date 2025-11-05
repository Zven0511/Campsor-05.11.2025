ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([430798.183896, 475379.969816, 432370.246956, 476379.835094]);
var wms_layers = [];

var format_Terenuri_0 = new ol.format.GeoJSON();
var features_Terenuri_0 = format_Terenuri_0.readFeatures(json_Terenuri_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Terenuri_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terenuri_0.addFeatures(features_Terenuri_0);
var lyr_Terenuri_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terenuri_0, 
                style: style_Terenuri_0,
                popuplayertitle: 'Terenuri',
                interactive: true,
                title: '<img src="styles/legend/Terenuri_0.png" /> Terenuri'
            });
var format_TerenurideinteresCampsor_1 = new ol.format.GeoJSON();
var features_TerenurideinteresCampsor_1 = format_TerenurideinteresCampsor_1.readFeatures(json_TerenurideinteresCampsor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_TerenurideinteresCampsor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerenurideinteresCampsor_1.addFeatures(features_TerenurideinteresCampsor_1);
var lyr_TerenurideinteresCampsor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerenurideinteresCampsor_1, 
                style: style_TerenurideinteresCampsor_1,
                popuplayertitle: 'Terenuri de interes Campsor',
                interactive: true,
                title: '<img src="styles/legend/TerenurideinteresCampsor_1.png" /> Terenuri de interes Campsor'
            });
var format_Constructiimarginale_2 = new ol.format.GeoJSON();
var features_Constructiimarginale_2 = format_Constructiimarginale_2.readFeatures(json_Constructiimarginale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Constructiimarginale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constructiimarginale_2.addFeatures(features_Constructiimarginale_2);
var lyr_Constructiimarginale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constructiimarginale_2, 
                style: style_Constructiimarginale_2,
                popuplayertitle: 'Constructii marginale',
                interactive: true,
                title: '<img src="styles/legend/Constructiimarginale_2.png" /> Constructii marginale'
            });

lyr_Terenuri_0.setVisible(true);lyr_TerenurideinteresCampsor_1.setVisible(true);lyr_Constructiimarginale_2.setVisible(true);
var layersList = [lyr_Terenuri_0,lyr_TerenurideinteresCampsor_1,lyr_Constructiimarginale_2];
lyr_Terenuri_0.set('fieldAliases', {'fid': 'fid', 'CF sau TP': 'CF sau TP', 'Nr. Cadgen': 'Nr. Cadgen', 'Nr. Parcel': 'Nr. Parcel', });
lyr_TerenurideinteresCampsor_1.set('fieldAliases', {'fid': 'fid', 'CF sau TP': 'CF sau TP', 'Nr. Cadgen': 'Nr. Cadgen', 'Nr. Parcel': 'Nr. Parcel', 'Proprietar': 'Proprietar', });
lyr_Constructiimarginale_2.set('fieldAliases', {'fid': 'fid', });
lyr_Terenuri_0.set('fieldImages', {'fid': 'TextEdit', 'CF sau TP': 'TextEdit', 'Nr. Cadgen': 'TextEdit', 'Nr. Parcel': 'TextEdit', });
lyr_TerenurideinteresCampsor_1.set('fieldImages', {'fid': 'TextEdit', 'CF sau TP': 'TextEdit', 'Nr. Cadgen': 'TextEdit', 'Nr. Parcel': 'TextEdit', 'Proprietar': 'TextEdit', });
lyr_Constructiimarginale_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_Terenuri_0.set('fieldLabels', {'fid': 'no label', 'CF sau TP': 'no label', 'Nr. Cadgen': 'no label', 'Nr. Parcel': 'no label', });
lyr_TerenurideinteresCampsor_1.set('fieldLabels', {'fid': 'no label', 'CF sau TP': 'no label', 'Nr. Cadgen': 'no label', 'Nr. Parcel': 'no label', 'Proprietar': 'no label', });
lyr_Constructiimarginale_2.set('fieldLabels', {'fid': 'no label', });
lyr_Constructiimarginale_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});