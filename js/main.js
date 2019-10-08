var FB;
var accessTokenFB = '';

var login = function() {
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
}
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
    // console.log(firebase.auth)
    // var credential = firebase.auth.FacebookAuthProvider.credential(accessTokenFB)
    // firebase.auth().signInWithCredential(credential).then((userData) => { 
    //     console.log('validate by firebase', userData);
    // })
    // .catch((err) => console.log(err));
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
        console.log('data tu firebase', result)
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}