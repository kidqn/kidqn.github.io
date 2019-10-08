var FB;
FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ', response);
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

var logout = function() {
    FB.logout(function(response) {
        // user is now logged out
        console.log('Logout successfully', response);
    });
}