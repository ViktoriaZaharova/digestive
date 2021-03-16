$(document).ready(function () {
    ymaps.ready(function () {
        var t = new ymaps.Map("map", {center: [55.653165, 37.722857], zoom: 18, controls: []});
        _mapIcon = new ymaps.Placemark(t.getCenter(), {
            hintContent: "Москва",
            balloonContent: "ул.Перерва, вл. 31Б, ТК “Марьино”"
        }, {
            iconLayout: "default#image",
            iconImageHref: "images/icon-location.svg",
            iconImageSize: [32, 32],
            iconImageOffset: [-25, -50]
        });
        t.geoObjects.add(_mapIcon);
        t.behaviors.disable("drag");
        t.behaviors.disable("scrollZoom")
    })
});
