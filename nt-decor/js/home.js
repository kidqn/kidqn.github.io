var fixOwl = function(event){
    if(!$('#mobile-right-nav-menu-btn').is(":visible")) {
        var $el = $('.owl-item');
        var newWidth;
        $el.each(function() {
            newWidth =  ( $(this).find('.item').height() / 60.33 ) * 100;
            $(this).find('.item').width(newWidth)
        });
    
        // set left for mask author info displaying beside nav-button of carousel
        var container = $('.home-p section#new-ideas > .container');
        var leftMask = parseInt(container.css('padding-left').slice(0,2),0);
        var widthNavCarousel = $('#home-carousel .owl-nav .owl-prev').width();
        leftMask = leftMask + (widthNavCarousel * 2);
        $('.home-p section#new-ideas > .container > .mask').width(newWidth - 130);
        $('.home-p section#new-ideas > .container > .mask').css('left', leftMask);
    }

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
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav:true,
        dots: false,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        onInitialized: fixOwl,
        onResized: refreshOwl,
        responsive : {
            // breakpoint from 480 up
            0 : {
                items: 1,
                autoWidth: false,
                margin:0
            },
            // breakpoint from 768 up
            992 : {
                items: 2,
                autoWidth:true,
            }
        }
    }).trigger('refresh.owl.carousel').on('changed.owl.carousel', function (e) {
        var current = e.item.index;
        var authorData = $(e.target).find('.owl-item').eq(current).find('.info').html();
        $('#new-ideas #author').html(authorData);
    })
})