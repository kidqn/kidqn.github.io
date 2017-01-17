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
    $('#about').attr('style','');
    $('#banner-video').attr('style','');
    $('#top-nav')[0].appendChild($('#search-home-btn')[0]);
  }else{
    $('#banner-video').css('height',window.innerHeight + 'px');
    $('#about').css('margin-top',window.innerHeight + 'px');
    $('#menu-home')[0].appendChild($('#search-home-btn')[0]);
  }
}

//on ready
$(function(){
  //initialize UI for homepage
  if(!isMobile()){
    //set margin top for about section under background video
    var hBannerVideo = document.querySelectorAll('#banner-video')[0].clientHeight;
    var sectionAbout = document.querySelectorAll('#about')[0];
    if(hBannerVideo && hBannerVideo > 0){
      sectionAbout.style['margin-top'] = hBannerVideo +'px';
    }
  }else{
    //move search icon to top nav bar//
    $('#top-nav')[0].appendChild($('#search-home-btn')[0]);
  }
  //initialize carousel
  $("#khachhang-carousel").owlCarousel({
    loop:true,
    //margin: 33,
    nav:true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:4
        },
        1200:{
            items:4
        }
    }
  })
  $("#truyenthong-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    slideSpeed : 500,
    paginationSpeed : 500,
    loop:true,
    items: 1,
    nav:true,
    navText: ["",""],
  })
  $("#baochi-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    slideSpeed : 500,
    paginationSpeed : 500,
    loop:true,
    items: 1,
    nav:true,
    navText: ["",""],
  })

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
      $('#menu-mobile-left').attr('style','transform: translate3d(100%, 0px, 0px);');
      //$('#menu-mobile-left').addClass('slideout');
      setTimeout(function(){
        $('html').attr('style','overflow:hidden; height: 100%;');
        $('body').attr('style','overflow:hidden; height: 100%;');
      },100);
    }
  });
})