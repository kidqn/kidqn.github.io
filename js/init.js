  var firebase;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAE_4kv3JEBYLMBtmgvbpZlT5XaH7P_eB0",
    authDomain: "rugged-weaver-485.firebaseapp.com",
    databaseURL: "https://rugged-weaver-485.firebaseio.com",
    projectId: "rugged-weaver-485",
    storageBucket: "rugged-weaver-485.appspot.com",
    messagingSenderId: "75115380018",
    appId: "1:75115380018:web:eb7198eed91e15ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const messaging = firebase.messaging();
  messaging.requestPermission()
      .then(() => {
          console.log('Have permission');
          return messaging.getToken();
      })
      .then((token) => {
          console.log(token);
      })
      .catch((err) => console.log('Err', err));
  
  
  messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // ...
    });
  //////
  navigator.geolocation.getAccurateCurrentPosition = function (geolocationSuccess, geolocationError, geoprogress, options) {
    var lastCheckedPosition,
        locationEventCount = 0,
        watchID,
        timerID;

    options = options || {};

    var checkLocation = function (position) {
        lastCheckedPosition = position;
        locationEventCount = locationEventCount + 1;
        // We ignore the first event unless it's the only one received because some devices seem to send a cached
        // location even when maxaimumAge is set to zero
        if ((position.coords.accuracy <= options.desiredAccuracy) && (locationEventCount > 1)) {
            clearTimeout(timerID);
            navigator.geolocation.clearWatch(watchID);
            foundPosition(position);
        } else {
            geoprogress(position);
        }
    };

    var stopTrying = function () {
        navigator.geolocation.clearWatch(watchID);
        foundPosition(lastCheckedPosition);
    };

    var onError = function (error) {
        clearTimeout(timerID);
        navigator.geolocation.clearWatch(watchID);
        geolocationError(error);
    };

    var foundPosition = function (position) {
        geolocationSuccess(position);
    };

    if (!options.maxWait)            options.maxWait = 10000; // Default 10 seconds
    if (!options.desiredAccuracy)    options.desiredAccuracy = 20; // Default 20 meters
    if (!options.timeout)            options.timeout = options.maxWait; // Default to maxWait

    options.maximumAge = 0; // Force current locations only
    options.enableHighAccuracy = true; // Force high accuracy (otherwise, why are you using this function?)

    watchID = navigator.geolocation.watchPosition(checkLocation, onError, options);
    timerID = setTimeout(stopTrying, options.maxWait); // Set a timeout that will abandon the location loop
};

  var  letsGeolocate = function(){
    var output = document.getElementById("output");  // the div where messages will appear
    var options = {
    };
    function geolocationSuccess(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        output.innerHTML = 'Latitude: ' + latitude + '<br/>Longitude: ' + longitude
    }

    function geolocationError() {
        output.innerHTML = "Unable to retrieve your location";
    }

    function geoprogress() {
        output.innerHTML = '<p>Locating in progress</p>';
    }
    navigator.geolocation.getAccurateCurrentPosition(geolocationSuccess, geolocationError, geoprogress, options);
}