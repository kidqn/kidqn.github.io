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
    $('#loc-hcm').on('click', function () {
      //initialize();
      center = new google.maps.LatLng(10.783357, 106.683961);
      $('#map-show').addClass('active'); 
        var marker = new google.maps.Marker({
          map: map,
          position: center
        });
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    $('#loc-hn').on('click', function () {
      //initialize();
      center = new google.maps.LatLng(21.006689, 105.850306);
      $('#map-show').addClass('active'); 
        var marker = new google.maps.Marker({
          map: map,
          position: center
        });
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    $('#map-show .close-popup').click(function(){
      $(this).parent().removeClass('active');
    })
});
