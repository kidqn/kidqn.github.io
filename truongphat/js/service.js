$(function(){

  var iScrollPos = 0;
  var lastScrollTop = 0;
  var delta = 5;
  var heightHeaderBar = $('#top-nav').outerHeight();
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      // Make sure they scroll more than delta
      if(Math.abs(iScrollPos - iCurScrollPos) <= delta)
          {return;}
      if(iCurScrollPos < heightHeaderBar){
          $("#header").removeClass('fixed-top');
          $('#header').attr('style','');
      }
      if (iCurScrollPos >= heightHeaderBar && iCurScrollPos > iScrollPos) {
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