var fixOwl = function(event){
    var $el = $('.owl-item');
    var newWidth;
    $el.each(function() {
        newWidth =  ( $(this).find('.item').height() / 60.33 ) * 100;
        $(this).find('.item').width(newWidth)
    });
    $('.home-p section#new-ideas > .container > .mask').width(newWidth - 130);
    var current = event.item.index;
    var authorData = $(event.target).find('.owl-item').eq(current).find('.info').html();
    $('#new-ideas #author').html(authorData);
}
var refreshOwl = function(event){
    fixOwl(event);
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
    }).trigger('refresh.owl.carousel').on('changed.owl.carousel', function (e) {
        var current = e.item.index;
        var authorData = $(e.target).find('.owl-item').eq(current).find('.info').html();
        $('#new-ideas #author').html(authorData);
    })
})