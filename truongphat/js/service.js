//define a delay function
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
// set scrolling animation function
function onScrollAnimationInit( items, trigger ) {
  items.each( function() {
    var tpElement = $(this),
        tpAnimationClass = tpElement.attr('data-tp-animation'),
        tpAnimationDelay = tpElement.attr('data-tp-animation-delay');
      
        tpElement.css({
          '-webkit-animation-delay':  tpAnimationDelay,
          '-moz-animation-delay':     tpAnimationDelay,
          'animation-delay':          tpAnimationDelay
        });

        var tpTrigger = ( trigger ) ? trigger : tpElement;
        
        tpTrigger.waypoint(function() {
          tpElement.addClass('animated').addClass(tpAnimationClass);
          tpElement.removeAttr('data-tp-animation data-tp-animation-delay style').removeClass('tp-animation');
          },{
              triggerOnce: true,
              offset: '90%'
        });
        //tpElement.removeAttr('data-tp-animation data-tp-animation-delay style').removeClass('tp-animation');
  });
}

$(function(){
  var iScrollPos = 0;
  var lastScrollTop = 0;
  var delta = 5;
  var heightHeaderBar = $('#top-nav').outerHeight();
  $(window).scroll(function () {
      ///
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
$(window).load(function(){
  //initialize animation
  onScrollAnimationInit( $('.tp-animation') );
})