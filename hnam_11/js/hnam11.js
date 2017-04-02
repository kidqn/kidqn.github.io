$("#play").click(function() {
    $('html, body').animate({
        scrollTop: $("#playnow").offset().top
    }, 2000);
});