//chinh size banner video khi kick thuoc man hinh thay doi
function resetStyleHomePage(){
    if($('body').hasClass('home-p')){
      $('#banner-video').css('height',window.innerHeight + 'px');
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

$(function(){
  resetStyleHomePage();
  //set action header
  var iScrollPos = 0;
  var lastScrollTop = 0;
  var delta = 5;
  var heightHeaderBar = $('#top-nav').outerHeight();
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      // Make sure they scroll more than delta
      console.log(heightHeaderBar + 50)
      if(iCurScrollPos < heightHeaderBar + 50){
        //Note: different from homepage a bit
        $("#top-nav").removeClass('smart');
        return;
      }else {
        $("#top-nav").addClass('smart');
      }
      iScrollPos = iCurScrollPos;
  });

})
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}