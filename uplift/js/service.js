$(function(){
  //set action header
  var iScrollPos = 0;
  var lastScrollTop = 0;
  var delta = 5;
  var heightHeaderBar = $('#top-nav').outerHeight();
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      console.log(iCurScrollPos)
      // Make sure they scroll more than delta
      if(iCurScrollPos < 300){
        //Note: different from homepage a bit
        $("#top-nav").removeClass('fixed-top open');
        $('#top-nav').attr('style','');
        return;
      }
      if(iCurScrollPos < 800 && iCurScrollPos >= 300){
          //Note: different from homepage a bit
          if($('body').hasClass('home-p')){
            $('#top-nav').addClass('fixed-top open');
          }
          return;
      }
      if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        $('#top-nav').addClass('fixed-top');
        $('#top-nav').attr('style','top: -90px');
      } else {
        //Scrolling Up
        if( $('#top-nav').hasClass('fixed-top')){
          $('#top-nav').addClass('open');
          $('#top-nav').attr('style','');
        }
      }
      iScrollPos = iCurScrollPos;
  });

})
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}