var owl = $('.owl-carousel');
var currentSlideIndex = 0;
var total = 4;
var isPending = false;

owl.owlCarousel({
    dot:true,
    items: 1,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
});
owl.on('translate.owl.carousel', function (e) {
  // console.log(e.item.index);
  $('#carousel-fullscreen-menu .menu-link').removeClass('active');
  $('#carousel-fullscreen-menu .menu-link[data-id=' + e.item.index + ']').addClass('active')
}).on('translated.owl.carousel', function (e) {
  currentSlideIndex = e.item.index;
  isPending = false;
})

$('#carousel-fullscreen-menu .menu-link').each(function(index) {
  $(this).on("click", function(){
      // For the data-id value
      var indexSlide = $(this).attr('data-id'); 
      $('.owl-carousel').trigger('to.owl.carousel', indexSlide)
  });
});

var waypointCarouselFullscreen = new Waypoint({
  element: document.getElementById('carousel-fullscreen'),
  handler: function(direction) {
    console.log('direction', direction);
    if(direction === 'down') {
      owl.on('mousewheel', '.owl-stage', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY < 0) {
          if(currentSlideIndex === total){
            owl.off('mousewheel');
            isPending = false;      
            return;
          }
          if(!isPending) { owl.trigger('next.owl')};
        } else {
          if(!isPending) { owl.trigger('prev.owl')};
        }
        isPending = true;
      })
      $('html, body').animate({
        scrollTop: $("#carousel-fullscreen").offset().top
        }, 700);
    }
  },
   offset: 300 
})

var waypointContactus = new Waypoint({
  element: document.getElementById('contact-us'),
  handler: function(direction) {
    console.log('direction', direction);
    if(direction === 'up') {
      owl.on('mousewheel', '.owl-stage', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY < 0) {
          if(currentSlideIndex === total){
            owl.off('mousewheel');
            isPending = false;      
            return;
          }
          if(!isPending) { owl.trigger('next.owl')};
        } else {
          if(currentSlideIndex === 0){
            owl.off('mousewheel');
            isPending = false;      
            return;
          }
          if(!isPending) { owl.trigger('prev.owl')};
        }
        isPending = true;
      })
      $('html, body').animate({
        scrollTop: $("#carousel-fullscreen").offset().top
        }, 700);
    }
  },
   offset: 300 
})

