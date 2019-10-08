var FB;
FB.login(['email', 'public_profile']).then((res) => {
    console.log(res);
});