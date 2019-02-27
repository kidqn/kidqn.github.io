//chinh size banner video khi kick thuoc man hinh thay doi
function resetStyleHomePage(){
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
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

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
      if(iCurScrollPos < heightHeaderBar + 20){
        //Note: different from homepage a bit
        $("#top-nav").removeClass('smart');
        return;
      } 
        
      if(iCurScrollPos > 20) {
        $("#top-nav").addClass('smart');
      }

      iScrollPos = iCurScrollPos;
  });

  //---------//
})
