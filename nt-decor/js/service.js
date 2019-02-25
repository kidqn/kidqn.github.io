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
  var carouselFs = $('#carousel-fullscreen .owl-carousel');
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(iCurScrollPos < heightHeaderBar + 50){
        //Note: different from homepage a bit
        $("#top-nav").removeClass('smart');
        return;
      } 
        
      if(iCurScrollPos > 80) {
          if(carouselFs.length) {
            if(iCurScrollPos < (carouselFs.offset().top - 300) ||  iCurScrollPos > (carouselFs.height() + carouselFs.offset().top)) {
              $("#top-nav").show();
              $("#top-nav").addClass('smart');
            }else {
              $("#top-nav").hide();
              $("#top-nav").removeClass('smart');
            }
          } else {
            $("#top-nav").addClass('smart');
          }
        }else {
          $("#top-nav").removeClass('smart');
      }

      iScrollPos = iCurScrollPos;
      // console.log('scrollTop',iCurScrollPos)
      // console.log($('.owl-carousel').offset().top);
  });

  //---------//
})
