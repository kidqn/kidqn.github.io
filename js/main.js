var FB;
FB.login(['public_profile']).then((res) => {
    console.log(res);
});