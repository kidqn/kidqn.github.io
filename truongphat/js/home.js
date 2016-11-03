$(function(){
	$("#home-info-carousel").owlCarousel({
      loop:true,
      items: 1,
      nav:false  	
    })

  $("#best-customer-carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:6
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
    nav: false
  })
  $("#baochi-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    slideSpeed : 500,
    paginationSpeed : 500,
    loop:true,
    items: 1,
    nav: false
  })
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
                offset: '85%'
          });
          //tpElement.removeAttr('data-tp-animation data-tp-animation-delay style').removeClass('tp-animation');
    });
  }
  onScrollAnimationInit( $('.tp-animation') );

  var iScrollPos = 0;
  var heightHeader = $('#top-nav');
  $(window).scroll(function () {
      var iCurScrollPos = $(this).scrollTop();
      if (iCurScrollPos > iScrollPos) {
        //Scrolling Down
        console.log('scroll down',iCurScrollPos);
        $('#top-nav').removeClass('open');
      } else {
        //Scrolling Up
        console.log('scroll up',iCurScrollPos)
        $('#top-nav').addClass('open');
      }
      
      iScrollPos = iCurScrollPos;
  });
  $('#customer').waypoint(function(direction) {
    if(direction == 'down'){
      $('#top-nav').addClass('fixed-top');
    }else{
      $('#top-nav').removeClass('fixed-top');
    }
  }, {
    offset:'50%'
  });
})