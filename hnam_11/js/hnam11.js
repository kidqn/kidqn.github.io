$("#play").click(function() {
    $('html, body').animate({
        scrollTop: $("#playnow").offset().top
    }, 1000);
});