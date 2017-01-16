$(function(){
  //set margin top for about section under background video
  var hBannerVideo = document.querySelectorAll('#banner-video')[0].clientHeight;
  var sectionAbout = document.querySelectorAll('#about')[0];
  if(hBannerVideo && hBannerVideo > 0){
    sectionAbout.style['margin-top'] = hBannerVideo +'px';
  }
  $("#khachhang-carousel").owlCarousel({
    loop:true,
    margin: 33,
    nav:true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
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
  //chinh size banner video khi kick thuoc man hinh thay doi
  function resetStyleHomePage(){
    $('#banner-video').css('height',window.innerHeight + 'px');
    $('#about').css('margin-top',window.innerHeight + 'px');
  }
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
})