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

const messaging = firebase.messaging()
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
  
  messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
      console.log('Token refreshed.', refreshedToken);
    }).catch((err) => {
      console.log('Unable to retrieve refreshed token ', err);
    });
  });
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
  });
