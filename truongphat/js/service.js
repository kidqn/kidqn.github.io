//define a delay function
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
//check in mobile view
function isMobile(){
  if ($('#menu-mobile-btn').css('display') != 'none'){
    return true;
  }else{
    return false;
  }
}
//chinh size banner video khi kick thuoc man hinh thay doi
function resetStyleHomePage(){
  if(isMobile()){
    if($('body').hasClass('home-p')){
      $('#about').attr('style','');
      $('#banner-video').attr('style','');
    }
    $('#top-nav')[0].appendChild($('#search-home-btn')[0]);
  }else{
    if($('body').hasClass('home-p')){
      $('#banner-video').css('height',window.innerHeight + 'px');
      $('#about').css('margin-top',window.innerHeight + 'px');
    }
    $('#menu-home')[0].appendChild($('#search-home-btn')[0]);
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
        actualResizeHandler();
     
       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
}

function actualResizeHandler() {
    resetStyleHomePage();
}

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

  //initialize UI for homepage
  if(!isMobile()){
    if($('body').hasClass('home-p')){
      //set margin top for about section under background video
      var hBannerVideo = document.querySelectorAll('#banner-video')[0].clientHeight;
      var sectionAbout = document.querySelectorAll('#about')[0];
      if(hBannerVideo && hBannerVideo > 0){
        sectionAbout.style['margin-top'] = hBannerVideo +'px';
      }
    }
  }else{
    //move search icon to top nav bar//
    $('#top-nav')[0].appendChild($('#search-home-btn')[0]);
  }


    //init all dropdown select
  [].slice.call( document.querySelectorAll( 'select.tp-dropdown-select' ) ).forEach( function(el) { 
    new SelectFx(el);
  } );

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
        if($('body').hasClass('home-p')){
          $('#top-nav').removeClass('fixed-top open');
        }else{
          $("#header").removeClass('fixed-top');
        }
        $('#header').attr('style','');
        return;
      }
      if(iCurScrollPos < 800 && iCurScrollPos >= 300){
        if(!isMobile()){
          //Note: different from homepage a bit
          if($('body').hasClass('home-p')){
            $('#top-nav').addClass('fixed-top open');
          }
          return;
        }
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
  $("#menu-mobile-btn").on("click", function() {
    var $elm = $("#main");
    if($("#menu-mobile-btn").hasClass('close-active')){
      $("#menu-mobile-btn").removeClass('close-active');
      $('#menu-mobile-left').attr('style','');
      //$('#menu-mobile-left').removeClass('slideout');
      $('html').attr('style','');
      $('body').attr('style','');
    }else{
      $("#menu-mobile-btn").addClass('close-active');
      
      //$('#menu-mobile-left').addClass('slideout');
        $('html').attr('style','overflow:hidden; height: 100%;');
        $('body').attr('style','overflow:hidden; height: 100%;');
        $('#menu-mobile-left').attr('style','transform: translate3d(0, 0px, 0px);');
    }
  });
})
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$(window).load(function(){
  //initialize animation
  onScrollAnimationInit( $('.tp-animation') );
})