  var firebase;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC2aT5ZxR4y3P-_141X-CYYrTQvU_K9VW4",
    authDomain: "react-firebase-26de0.firebaseapp.com",
    databaseURL: "https://react-firebase-26de0.firebaseio.com",
    projectId: "react-firebase-26de0",
    storageBucket: "react-firebase-26de0.appspot.com",
    messagingSenderId: "589639130157",
    appId: "1:589639130157:web:21ad3fa3f9c526196caca4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  messaging.usePublicVapidKey('BJg4xeVdl7UHHckQ9SK7hA2Ko20FWtbtgDkI0Gr2EwbMbMC5ICqr3hxKA7Fc4Yw_FB2OuGZiwBc39WKRw18aWkg');


  messaging.requestPermission()
  .then(() => {
      console.log('Have permissions');
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