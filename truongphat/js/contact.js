/*var contactGEO = {};
function initialize() {
    contactGEO.uluru = {lat: 10.783098, lng: 106.683978};
    contactGEO.map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: contactGEO.uluru
    });
    var marker = new google.maps.Marker({
        position: contactGEO.uluru,
        map: contactGEO.map
    });
}
$(function() {

    $('#loc-1').on('click', function () {
        $('#modal').modal({
            backdrop: 'static',
            keyboard: true
        }).on('shown.bs.modal', function () {
            google.maps.event.trigger(contactGEO.map, 'resize');
            contactGEO.map.setCenter(contactGEO.uluru);
        });
    });
});*/
// global variables
var map;
var center;

function loadScript() {
    var myKey = "AIzaSyBROYPNa_1AhfRS-GXn5l8j9sb_exQhRhs";
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=" + myKey + "&callback=initialize";
    document.body.appendChild(script);
}
window.onload = loadScript;


function initialize() {
    center = new google.maps.LatLng(59.76522, 18.35002);
    var mapOptions = {
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: center
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var marker = new google.maps.Marker({
        map: map,
        position: center
    });
    marker.setMap(map);
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
}

$(function() {
    $('#loc-1').on('click', function () {
      //initialize();
      center = new google.maps.LatLng(10.783357, 106.683961);
      $('#map-canvas').addClass('active'); 
        var marker = new google.maps.Marker({
          map: map,
          position: center
        });
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});