
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);23.27'03.54"N 91.11'04.75"E
    var myLatlng = new google.maps.LatLng(23.45112, 91.184702 ); //23.45112, 91.184702
    // 39.399872
    // -8.224454
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 18,

        // The latitude and longitude to center the map (always required)
        center: myLatlng,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#fff"
                    }
                ]
            }
        ]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = ['Bangladesh'];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('https://www.google.com/maps/place/It+Garden+Ltd/@23.4510085,91.1824921,17z/data=!3m1!4b1!4m5!3m4!1s0x37547fb311ad7b8f:0x7102dfa385b1d587!8m2!3d23.4510036!4d91.1846808?key='+addresses[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                position: latlng,
                map: map,
                icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);