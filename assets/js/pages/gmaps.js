var GmapsJS = function() {
    'use strict';
    //function to initiate GMaps
    //For more information, please visit http://hpneo.github.io/gmaps/documentation.html
    function initMaps() {
    	// Basic
        var basicMap = new GMaps({
            el: '#map-1',
            lat: -12.043333,
            lng: -77.028333
        });
        // Street View
        var streetViews = GMaps.createPanorama({
            el: '#map-2',
            lat: 38.787638,
            lng: -9.390717
        });
        // Search Address
        var searchAddress = new GMaps({
            el: '#map-3',
            lat: 51.17889,
            lng: -1.826215
        });
        $('#geo-form').submit(function (e) {
            e.preventDefault();
            GMaps.geocode({
                address: $('#address').val().trim(),
                callback: function (results, status) {
                    if (status == 'OK') {
                        var latlng = results[0].geometry.location;
                        searchAddress.setCenter(latlng.lat(), latlng.lng());
                        searchAddress.addMarker({
                            lat: latlng.lat(),
                            lng: latlng.lng()
                        });
                    }
                }
            });
        });
        //Markers
        var markers = new GMaps({
            el: '#map-4',
            lat: -12.043333,
            lng: -77.028333
        });
        markers.addMarker({
            lat: -12.043333,
            lng: -77.03,
            title: 'Lima',
            details: {
                database_id: 42,
                author: 'HPNeo'
            },
            click: function (e) {
                if (console.log)
                    console.log(e);
                alert('You clicked in this marker');
            }
        });
        markers.addMarker({
            lat: -12.042,
            lng: -77.028333,
            title: 'Marker with InfoWindow',
            height: '200px',
            infoWindow: {
                content: '<p>HTML Content</p>'
            }
        });

    }
    return {
        initMaps: initMaps
    }
}();
