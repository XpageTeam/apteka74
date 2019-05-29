function yandexMapInit(zoomMap, centerMap, jsonPoints)
{
    var pointsMap = new ymaps.Map("map", {center: [centerMap[0], centerMap[1]], zoom: zoomMap, controls: ['fullscreenControl', 'zoomControl']});
    
    pointsMap.behaviors.disable('scrollZoom');
    
    var mapGeoObjects = [];
    for (var i = 0; i < jsonPoints.length; i++){
        mapGeoObjects[i] = new ymaps.Placemark(           
            [jsonPoints[i].coordinaty[0], jsonPoints[i].coordinaty[1]],
            {
                balloonContentBody: '<p><b>'+jsonPoints[i].name+'</b></p><p>'+jsonPoints[i].address+'</p><p><b>Телефон:</b> '+jsonPoints[i].phone+'</p><p><b>Наличие: </b>'+jsonPoints[i].statusText+'</p>'+jsonPoints[i].otherText,
            },
            {
                iconLayout: 'default#image',
                iconImageHref: jsonPoints[i].icon,
                iconImageSize: [31, 31],
                iconImageOffset: [-15, -15]
            }
        );
                               
    }
    
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: true,
        clusterBalloonPanelMaxMapArea: 0,
        clusterBalloonContentLayoutWidth: 300,
        clusterBalloonContentLayoutHeight: 200,
        clusterBalloonPagerSize: 5
    });
    clusterer.options.set({ preset: 'islands#darkGreenClusterIcons' }); 
    clusterer.add(mapGeoObjects);
    pointsMap.geoObjects.add(clusterer);
}