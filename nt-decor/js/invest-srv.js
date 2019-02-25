$('.carousel-lead-image').each(function(index) {
    var carouselContainer = $(this);
    var owl = $(this).find('.owl-carousel');
    var listMenu = carouselContainer.find('.menu-link');
    owl.owlCarousel({
        dot:true,
        items: 1,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    owl.on('translate.owl.carousel', function (e) {
        listMenu.removeClass('active');
        carouselContainer.find('.menu-link[data-id=' + e.item.index + ']').addClass('active')
    })
      
    $(this).find('.menu-link').each(function(idx) {
        $(this).on("click", function(){
            // For the data-id value
            var indexSlide = $(this).attr('data-id'); 
            owl.trigger('to.owl.carousel', indexSlide)
        });
    });

})