var wms_layers = [];


        var lyr_gg_hybrid_0 = new ol.layer.Tile({
            'title': 'gg_hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_GNU_arealsmd_adm_sect_umd_48_202509_1 = new ol.format.GeoJSON();
var features_GNU_arealsmd_adm_sect_umd_48_202509_1 = format_GNU_arealsmd_adm_sect_umd_48_202509_1.readFeatures(json_GNU_arealsmd_adm_sect_umd_48_202509_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_1.addFeatures(features_GNU_arealsmd_adm_sect_umd_48_202509_1);
var lyr_GNU_arealsmd_adm_sect_umd_48_202509_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_1, 
                style: style_GNU_arealsmd_adm_sect_umd_48_202509_1,
                popuplayertitle: 'GNU_area — lsmd_adm_sect_umd_48_202509',
                interactive: true,
                title: '<img src="styles/legend/GNU_arealsmd_adm_sect_umd_48_202509_1.png" /> GNU_area — lsmd_adm_sect_umd_48_202509'
            });
var format_GNU_SCHOOL_2 = new ol.format.GeoJSON();
var features_GNU_SCHOOL_2 = format_GNU_SCHOOL_2.readFeatures(json_GNU_SCHOOL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNU_SCHOOL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNU_SCHOOL_2.addFeatures(features_GNU_SCHOOL_2);
var lyr_GNU_SCHOOL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNU_SCHOOL_2, 
                style: style_GNU_SCHOOL_2,
                popuplayertitle: 'GNU_SCHOOL',
                interactive: true,
                title: '<img src="styles/legend/GNU_SCHOOL_2.png" /> GNU_SCHOOL'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '가좌',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 가좌'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: '호탄',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 호탄'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: '칠암',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 칠암'
            });

lyr_gg_hybrid_0.setVisible(true);lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.setVisible(true);lyr_GNU_SCHOOL_2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_gg_hybrid_0,lyr_GNU_arealsmd_adm_sect_umd_48_202509_1,lyr_GNU_SCHOOL_2,lyr__3,lyr__4,lyr__5];
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldAliases', {'fid': 'fid', 'EMD_CD': 'EMD_CD', 'COL_ADM_SE': 'COL_ADM_SE', 'EMD_NM': 'EMD_NM', 'SGG_OID': 'SGG_OID', });
lyr_GNU_SCHOOL_2.set('fieldAliases', {'fid': 'fid', '입구': '입구', '경도': '경도', '위도': '위도', });
lyr__3.set('fieldAliases', {'보증금': '보증금', '월세': '월세', '층수': '층수', '면적': '면적', '방향': '방향', '위도': '위도', '경도': '경도', '중개사': '중개사', });
lyr__4.set('fieldAliases', {'보증금': '보증금', '월세': '월세', '층수': '층수', '면적': '면적', '방향': '방향', '위도': '위도', '경도': '경도', '중개사': '중개사', });
lyr__5.set('fieldAliases', {'보증금': '보증금', '월세': '월세', '층수': '층수', '면적': '면적', '방향': '방향', '위도': '위도', '경도': '경도', '중개사': '중개사', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldImages', {'fid': 'TextEdit', 'EMD_CD': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'EMD_NM': 'TextEdit', 'SGG_OID': 'Range', });
lyr_GNU_SCHOOL_2.set('fieldImages', {'fid': 'Hidden', '입구': 'TextEdit', '경도': 'Hidden', '위도': 'Hidden', });
lyr__3.set('fieldImages', {'보증금': 'Range', '월세': 'Range', '층수': 'TextEdit', '면적': 'TextEdit', '방향': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '중개사': 'TextEdit', });
lyr__4.set('fieldImages', {'보증금': 'Range', '월세': 'Range', '층수': 'TextEdit', '면적': 'TextEdit', '방향': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '중개사': 'TextEdit', });
lyr__5.set('fieldImages', {'보증금': 'Range', '월세': 'Range', '층수': 'TextEdit', '면적': 'TextEdit', '방향': 'TextEdit', '위도': 'TextEdit', '경도': 'TextEdit', '중개사': 'TextEdit', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'EMD_CD': 'inline label - visible with data', 'COL_ADM_SE': 'inline label - visible with data', 'EMD_NM': 'inline label - visible with data', 'SGG_OID': 'inline label - visible with data', });
lyr_GNU_SCHOOL_2.set('fieldLabels', {'입구': 'inline label - visible with data', });
lyr__3.set('fieldLabels', {'보증금': 'inline label - visible with data', '월세': 'inline label - visible with data', '층수': 'inline label - visible with data', '면적': 'inline label - visible with data', '방향': 'inline label - visible with data', '위도': 'inline label - visible with data', '경도': 'inline label - visible with data', '중개사': 'inline label - visible with data', });
lyr__4.set('fieldLabels', {'보증금': 'inline label - visible with data', '월세': 'inline label - visible with data', '층수': 'inline label - visible with data', '면적': 'inline label - visible with data', '방향': 'inline label - visible with data', '위도': 'inline label - visible with data', '경도': 'inline label - visible with data', '중개사': 'inline label - visible with data', });
lyr__5.set('fieldLabels', {'보증금': 'inline label - visible with data', '월세': 'inline label - visible with data', '층수': 'inline label - visible with data', '면적': 'inline label - visible with data', '방향': 'inline label - visible with data', '위도': 'inline label - visible with data', '경도': 'inline label - visible with data', '중개사': 'inline label - visible with data', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});