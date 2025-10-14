ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([300871.581487, 285002.182371, 301118.577077, 285154.598868]);
var wms_layers = [];


        var lyr_gg_hybrid_0 = new ol.layer.Tile({
            'title': 'gg_hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_GNU_arealsmd_adm_sect_umd_48_202509_1 = new ol.format.GeoJSON();
var features_GNU_arealsmd_adm_sect_umd_48_202509_1 = format_GNU_arealsmd_adm_sect_umd_48_202509_1.readFeatures(json_GNU_arealsmd_adm_sect_umd_48_202509_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
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
            {dataProjection: 'EPSG:4326', featureProjection: ''});
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
var format_naver_land_gajwamonth_3 = new ol.format.GeoJSON();
var features_naver_land_gajwamonth_3 = format_naver_land_gajwamonth_3.readFeatures(json_naver_land_gajwamonth_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_naver_land_gajwamonth_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naver_land_gajwamonth_3.addFeatures(features_naver_land_gajwamonth_3);
var lyr_naver_land_gajwamonth_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naver_land_gajwamonth_3, 
                style: style_naver_land_gajwamonth_3,
                popuplayertitle: 'naver_land_gajwa.month',
                interactive: true,
                title: '<img src="styles/legend/naver_land_gajwamonth_3.png" /> naver_land_gajwa.month'
            });
var format_naver_land_hotanmonth_4 = new ol.format.GeoJSON();
var features_naver_land_hotanmonth_4 = format_naver_land_hotanmonth_4.readFeatures(json_naver_land_hotanmonth_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_naver_land_hotanmonth_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naver_land_hotanmonth_4.addFeatures(features_naver_land_hotanmonth_4);
var lyr_naver_land_hotanmonth_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naver_land_hotanmonth_4, 
                style: style_naver_land_hotanmonth_4,
                popuplayertitle: 'naver_land_hotan.month',
                interactive: true,
                title: '<img src="styles/legend/naver_land_hotanmonth_4.png" /> naver_land_hotan.month'
            });
var format_naver_land_chillmonth_5 = new ol.format.GeoJSON();
var features_naver_land_chillmonth_5 = format_naver_land_chillmonth_5.readFeatures(json_naver_land_chillmonth_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_naver_land_chillmonth_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naver_land_chillmonth_5.addFeatures(features_naver_land_chillmonth_5);
var lyr_naver_land_chillmonth_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naver_land_chillmonth_5, 
                style: style_naver_land_chillmonth_5,
                popuplayertitle: 'naver_land_chill.month',
                interactive: true,
                title: '<img src="styles/legend/naver_land_chillmonth_5.png" /> naver_land_chill.month'
            });

lyr_gg_hybrid_0.setVisible(true);lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.setVisible(true);lyr_GNU_SCHOOL_2.setVisible(true);lyr_naver_land_gajwamonth_3.setVisible(true);lyr_naver_land_hotanmonth_4.setVisible(true);lyr_naver_land_chillmonth_5.setVisible(true);
var layersList = [lyr_gg_hybrid_0,lyr_GNU_arealsmd_adm_sect_umd_48_202509_1,lyr_GNU_SCHOOL_2,lyr_naver_land_gajwamonth_3,lyr_naver_land_hotanmonth_4,lyr_naver_land_chillmonth_5];
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldAliases', {'fid': 'fid', 'EMD_CD': 'EMD_CD', 'COL_ADM_SE': 'COL_ADM_SE', 'EMD_NM': 'EMD_NM', 'SGG_OID': 'SGG_OID', });
lyr_GNU_SCHOOL_2.set('fieldAliases', {'fid': 'fid', '입구': '입구', '경도': '경도', '위도': '위도', });
lyr_naver_land_gajwamonth_3.set('fieldAliases', {'atclNo': 'atclNo', 'atclNm': 'atclNm', 'tradTpNm': 'tradTpNm', 'prc': 'prc', 'rentPrc': 'rentPrc', 'flrInfo': 'flrInfo', 'spc1': 'spc1', 'direction': 'direction', 'lat': 'lat', 'lng': 'lng', 'rltrNm': 'rltrNm', });
lyr_naver_land_hotanmonth_4.set('fieldAliases', {'atclNo': 'atclNo', 'atclNm': 'atclNm', 'tradTpNm': 'tradTpNm', 'prc': 'prc', 'rentPrc': 'rentPrc', 'flrInfo': 'flrInfo', 'spc1': 'spc1', 'direction': 'direction', 'lat': 'lat', 'lng': 'lng', 'rltrNm': 'rltrNm', });
lyr_naver_land_chillmonth_5.set('fieldAliases', {'atclNo': 'atclNo', 'atclNm': 'atclNm', 'tradTpNm': 'tradTpNm', 'prc': 'prc', 'rentPrc': 'rentPrc', 'flrInfo': 'flrInfo', 'spc1': 'spc1', 'direction': 'direction', 'lat': 'lat', 'lng': 'lng', 'rltrNm': 'rltrNm', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldImages', {'fid': 'TextEdit', 'EMD_CD': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'EMD_NM': 'TextEdit', 'SGG_OID': 'Range', });
lyr_GNU_SCHOOL_2.set('fieldImages', {'fid': 'TextEdit', '입구': 'TextEdit', '경도': 'Range', '위도': 'Range', });
lyr_naver_land_gajwamonth_3.set('fieldImages', {'atclNo': 'Hidden', 'atclNm': 'TextEdit', 'tradTpNm': 'TextEdit', 'prc': 'Range', 'rentPrc': 'Range', 'flrInfo': 'TextEdit', 'spc1': 'TextEdit', 'direction': 'TextEdit', 'lat': 'Hidden', 'lng': 'Hidden', 'rltrNm': 'TextEdit', });
lyr_naver_land_hotanmonth_4.set('fieldImages', {'atclNo': 'TextEdit', 'atclNm': 'TextEdit', 'tradTpNm': 'TextEdit', 'prc': 'Range', 'rentPrc': 'Range', 'flrInfo': 'TextEdit', 'spc1': 'TextEdit', 'direction': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'rltrNm': 'TextEdit', });
lyr_naver_land_chillmonth_5.set('fieldImages', {'atclNo': 'TextEdit', 'atclNm': 'TextEdit', 'tradTpNm': 'TextEdit', 'prc': 'Range', 'rentPrc': 'Range', 'flrInfo': 'TextEdit', 'spc1': 'TextEdit', 'direction': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'rltrNm': 'TextEdit', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_1.set('fieldLabels', {'fid': 'no label', 'EMD_CD': 'no label', 'COL_ADM_SE': 'no label', 'EMD_NM': 'no label', 'SGG_OID': 'no label', });
lyr_GNU_SCHOOL_2.set('fieldLabels', {'fid': 'no label', '입구': 'no label', '경도': 'no label', '위도': 'no label', });
lyr_naver_land_gajwamonth_3.set('fieldLabels', {'atclNm': 'no label', 'tradTpNm': 'no label', 'prc': 'no label', 'rentPrc': 'no label', 'flrInfo': 'no label', 'spc1': 'no label', 'direction': 'no label', 'rltrNm': 'no label', });
lyr_naver_land_hotanmonth_4.set('fieldLabels', {'atclNo': 'hidden field', 'atclNm': 'no label', 'tradTpNm': 'no label', 'prc': 'no label', 'rentPrc': 'no label', 'flrInfo': 'no label', 'spc1': 'no label', 'direction': 'no label', 'lat': 'no label', 'lng': 'no label', 'rltrNm': 'no label', });
lyr_naver_land_chillmonth_5.set('fieldLabels', {'atclNo': 'no label', 'atclNm': 'no label', 'tradTpNm': 'no label', 'prc': 'no label', 'rentPrc': 'no label', 'flrInfo': 'no label', 'spc1': 'no label', 'direction': 'no label', 'lat': 'no label', 'lng': 'no label', 'rltrNm': 'no label', });
lyr_naver_land_chillmonth_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});