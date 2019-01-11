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
owl.on('mousewheel', '.owl-stage', function (e) {
  e.preventDefault();
  console.log('scrollY', e.deltaY)
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
}).on('translate.owl.carousel', function (e) {
  console.log(e.item.index);
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