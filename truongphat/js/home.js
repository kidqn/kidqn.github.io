$(function(){
  //set margin top for about section under background video
  var hBannerVideo = document.querySelectorAll('#banner-video')[0].clientHeight;
  var sectionAbout = document.querySelectorAll('#about')[0];
  if(hBannerVideo && hBannerVideo > 0){
    sectionAbout.style['margin-top'] = hBannerVideo +'px';
  }
  $("#khachhang-carousel").owlCarousel({
    loop:true,
    margin:73,
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
  ////////HANDLE scrolling top header ////////////
  var iScrollPos = 0;
  var heightHeader = $('#top-nav');
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        if( $('#top-nav').hasClass('fixed-top')){
          $('#top-nav').attr('style','top: -90px');
        }
      } else {
        //Scrolling Up
        if( $('#top-nav').hasClass('fixed-top')){
          $('#top-nav').addClass('open');
          $('#top-nav').attr('style','');
        }
      }
      
      iScrollPos = iCurScrollPos;
  });
  $('#about').waypoint(function(direction) {

    if(direction == 'down'){
      $('#top-nav').addClass('fixed-top');
    }else{
      $('#top-nav').removeClass('fixed-top open');
    }
  }, {
    offset:'50%'
  });

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

  //handle search home button
  $('#search-home-btn').on('click', function () {
    if( !$(this).hasClass('active') ){
      //show search
      $('#search-view-overlay')[0].appendChild($('#top-nav')[0]);
      $('#top-nav').addClass('fixed-top open');
      $('#top-nav #search-home-btn').addClass('active');
      $('#search-view-overlay').modal('show');
    }else{
      //close search
      var tmp = $(this).scrollTop();
      console.log(tmp)
      $('#top-nav').removeClass('open');
      $('#top-nav #search-home-btn').removeClass('active');
      $( "header" )[0].appendChild($('#top-nav')[0]);
      $('#search-view-overlay').modal('toggle');
    }
  });

  //when user input key search
    $('#home-search-field').keyup(function(event) {
      var textInput = $(this).val();
      delay(function(){
          //show result table
          if(textInput !== '' || textInput){
            //change color of icon enter keyboard
            $('#home-enter-search-btn').addClass('active');
          }else{
            $('#home-enter-search-btn').removeClass('active');
          }
      }, 100 );
    });
})