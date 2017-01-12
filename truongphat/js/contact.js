$(window).load(function(){
      var center = new google.maps.LatLng(10.783104, 106.684053);
      function initialize() {

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
      }

      $('#loc-1').on('click', function () {
          console.log('sdasd')
          $('#modal').modal({
              backdrop: 'static',
              keyboard: true
          }).on('shown.bs.modal', function () {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
          });
      });

      initialize();
})