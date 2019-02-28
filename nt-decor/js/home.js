var fixOwl = function(){
    var $el = $('.owl-item')
    $el.each(function() {
        var newWidth =  ( $(this).find('.item').height() / 60.33 ) * 100;
        $(this).find('.item').width(newWidth)
    });
}
var refreshOwl = function(){
    fixOwl();
    $('#home-carousel').trigger('refresh.owl.carousel');
}
$(function(){
    $('#home-carousel').owlCarousel({
        slideSpeed : 500,
        items: 2,
        margin:18,
        loop:true,
        autoWidth:true,
        nav:true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        onInitialized: fixOwl,
        onResized: refreshOwl
    }).trigger('refresh.owl.carousel');
})