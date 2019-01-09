var owl = $('.owl-carousel');
var currentSlideIndex = 0;
var total = 4;
owl.owlCarousel({
    dot:true,
    items: 1
});
owl.on('mousewheel', '.owl-stage', function (e) {
  e.preventDefault();
  if (e.deltaY < 0) {
    if(currentSlideIndex === total){
      owl.off('mousewheel');
      return;
    }
    owl.trigger('next.owl');
  } else {
    owl.trigger('prev.owl');
  }
}).on('translate.owl.carousel', function (e) {
  currentSlideIndex = e.item.index;
  console.log(e.item.index);
  $('#carousel-fullscreen-menu .menu-link').removeClass('active');
  $('#carousel-fullscreen-menu .menu-link[data-id=' + e.item.index + ']').addClass('active')
})

$('#carousel-fullscreen-menu .menu-link').each(function(index) {
  $(this).on("click", function(){
      // For the data-id value
      var indexSlide = $(this).attr('data-id'); 
      $('.owl-carousel').trigger('to.owl.carousel', indexSlide)
  });
});