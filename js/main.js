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

var FB;
var accessTokenFB = '';
FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ', response);
     accessTokenFB = response.authResponse.accessToken;
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
}, {
    scope: 'email', 
    return_scopes: true
});

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    
    }
}

function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
        statusChangeCallback(response);
    });
}
var logout = function() {
    FB.logout(function(response) {
        // user is now logged out
        console.log('Logout successfully', response);
    });
}

var authByFirebase = function() {
    console.log(firebase)
    var credential = firebase.auth.FacebookAuthProvider.getCredential({
        accessToken: accessTokenFB
    });
    firebase.auth().signInWithCredential(credential).then((userData) => { 
        console.log('validate by firebase', userData);
    })
    .catch((err) => console.log(err));
}