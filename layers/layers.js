var wms_layers = [];

var format_GNU_arealsmd_adm_sect_umd_48_202509_0 = new ol.format.GeoJSON();
var features_GNU_arealsmd_adm_sect_umd_48_202509_0 = format_GNU_arealsmd_adm_sect_umd_48_202509_0.readFeatures(json_GNU_arealsmd_adm_sect_umd_48_202509_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_0.addFeatures(features_GNU_arealsmd_adm_sect_umd_48_202509_0);
var lyr_GNU_arealsmd_adm_sect_umd_48_202509_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNU_arealsmd_adm_sect_umd_48_202509_0, 
                style: style_GNU_arealsmd_adm_sect_umd_48_202509_0,
                popuplayertitle: 'GNU_area — lsmd_adm_sect_umd_48_202509',
                interactive: true,
                title: '<img src="styles/legend/GNU_arealsmd_adm_sect_umd_48_202509_0.png" /> GNU_area — lsmd_adm_sect_umd_48_202509'
            });
var format_GNU_SCHOOL_1 = new ol.format.GeoJSON();
var features_GNU_SCHOOL_1 = format_GNU_SCHOOL_1.readFeatures(json_GNU_SCHOOL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GNU_SCHOOL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GNU_SCHOOL_1.addFeatures(features_GNU_SCHOOL_1);
var lyr_GNU_SCHOOL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GNU_SCHOOL_1, 
                style: style_GNU_SCHOOL_1,
                popuplayertitle: 'GNU_SCHOOL',
                interactive: true,
                title: '<img src="styles/legend/GNU_SCHOOL_1.png" /> GNU_SCHOOL'
            });
var format_naver_land_gajwamonth_2 = new ol.format.GeoJSON();
var features_naver_land_gajwamonth_2 = format_naver_land_gajwamonth_2.readFeatures(json_naver_land_gajwamonth_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naver_land_gajwamonth_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naver_land_gajwamonth_2.addFeatures(features_naver_land_gajwamonth_2);
var lyr_naver_land_gajwamonth_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naver_land_gajwamonth_2, 
                style: style_naver_land_gajwamonth_2,
                popuplayertitle: 'naver_land_gajwa.month',
                interactive: true,
                title: '<img src="styles/legend/naver_land_gajwamonth_2.png" /> naver_land_gajwa.month'
            });

lyr_GNU_arealsmd_adm_sect_umd_48_202509_0.setVisible(true);lyr_GNU_SCHOOL_1.setVisible(true);lyr_naver_land_gajwamonth_2.setVisible(true);
var layersList = [lyr_GNU_arealsmd_adm_sect_umd_48_202509_0,lyr_GNU_SCHOOL_1,lyr_naver_land_gajwamonth_2];
lyr_GNU_arealsmd_adm_sect_umd_48_202509_0.set('fieldAliases', {'fid': 'fid', 'EMD_CD': 'EMD_CD', 'COL_ADM_SE': 'COL_ADM_SE', 'EMD_NM': 'EMD_NM', 'SGG_OID': 'SGG_OID', });
lyr_GNU_SCHOOL_1.set('fieldAliases', {'fid': 'fid', '입구': '입구', '경도': '경도', '위도': '위도', });
lyr_naver_land_gajwamonth_2.set('fieldAliases', {'atclNo': 'atclNo', 'atclNm': 'atclNm', 'tradTpNm': 'tradTpNm', 'prc': 'prc', 'rentPrc': 'rentPrc', 'flrInfo': 'flrInfo', 'spc1': 'spc1', 'direction': 'direction', 'lat': 'lat', 'lng': 'lng', 'rltrNm': 'rltrNm', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_0.set('fieldImages', {'fid': 'TextEdit', 'EMD_CD': 'TextEdit', 'COL_ADM_SE': 'TextEdit', 'EMD_NM': 'TextEdit', 'SGG_OID': 'Range', });
lyr_GNU_SCHOOL_1.set('fieldImages', {'fid': 'TextEdit', '입구': 'TextEdit', '경도': 'Range', '위도': 'Range', });
lyr_naver_land_gajwamonth_2.set('fieldImages', {'atclNo': 'TextEdit', 'atclNm': 'TextEdit', 'tradTpNm': 'TextEdit', 'prc': 'Range', 'rentPrc': 'Range', 'flrInfo': 'TextEdit', 'spc1': 'TextEdit', 'direction': 'TextEdit', 'lat': 'TextEdit', 'lng': 'TextEdit', 'rltrNm': 'TextEdit', });
lyr_GNU_arealsmd_adm_sect_umd_48_202509_0.set('fieldLabels', {'fid': 'no label', 'EMD_CD': 'no label', 'COL_ADM_SE': 'no label', 'EMD_NM': 'no label', 'SGG_OID': 'no label', });
lyr_GNU_SCHOOL_1.set('fieldLabels', {'fid': 'no label', '입구': 'no label', '경도': 'no label', '위도': 'no label', });
lyr_naver_land_gajwamonth_2.set('fieldLabels', {'atclNo': 'hidden field', 'atclNm': 'no label', 'tradTpNm': 'no label', 'prc': 'no label', 'rentPrc': 'no label', 'flrInfo': 'no label', 'spc1': 'no label', 'direction': 'no label', 'lat': 'hidden field', 'lng': 'hidden field', 'rltrNm': 'no label', });
lyr_naver_land_gajwamonth_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});