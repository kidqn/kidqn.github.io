//chinh size banner video khi kick thuoc man hinh thay doi
function resetStyleHomePage(){
    if($('section#banner-video')){
      $('section#banner-video').css('height',window.innerHeight + 'px');
    }
    if($('section#carousel-fullscreen')){
      $('section#carousel-fullscreen').css('height',window.innerHeight + 'px');
    }
}
//handle resize event//
window.addEventListener("resize", resizeThrottler, false);
var resizeTimeout;
function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        resetStyleHomePage();
     
       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(function(){
  resetStyleHomePage();
  //set action header
  var iScrollPos = 0;
  var oneTime = 0;
  var delta = 5;
  var heightHeaderBar = $('#top-nav').outerHeight();
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(iCurScrollPos < heightHeaderBar + 50){
        //Note: different from homepage a bit
        $("#top-nav").removeClass('smart');
        return;
      }else {
        if(iCurScrollPos < ($('.owl-carousel').offset().top - 300) ||  iCurScrollPos > ($('.owl-carousel').height() + $('.owl-carousel').offset().top)) {
          $("#top-nav").show();
          $("#top-nav").addClass('smart');
        }else {
          $("#top-nav").hide();
          $("#top-nav").removeClass('smart');
        }
      }

      // if scroll down
      if(iCurScrollPos > iScrollPos){
        console.log('scroll down');
        if(iCurScrollPos > 0 && oneTime === 0) {
          $('html, body').animate({
            scrollTop: $("#carousel-fullscreen").offset().top
            }, 1000);
          oneTime = 1;
        }
      }

      iScrollPos = iCurScrollPos;
      console.log('scrollTop',iCurScrollPos)
      console.log($('.owl-carousel').offset().top);
      if(iCurScrollPos >= $('.owl-carousel').offset().top){

      }
  });

  //---------//
})

var owl = $('.owl-carousel');
var currentSlideIndex = 0;
var total = 4;
owl.owlCarousel({
    dot:true,
    items: 1,
    slideSpeed : 400,
    paginationSpeed : 400,
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
}).on('translated.owl.carousel', function (e) {
  currentSlideIndex = e.item.index;
  console.log(e.item.index);
  $('#carousel-fullscreen-menu .menu-link').removeClass('active');
  $('#carousel-fullscreen-menu .menu-link[data-id=' + e.item.index + ']').addClass('active')
});

$('#carousel-fullscreen-menu .menu-link').each(function(index) {
  $(this).on("click", function(){
      // For the data-id value
      var indexSlide = $(this).attr('data-id'); 
      $('.owl-carousel').trigger('to.owl.carousel', indexSlide)
  });
});