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
  $('#customer').waypoint(function(direction) {
    if (direction == 'down') {
      $('#top-nav').addClass('active');
    }
    else {
      $('#top-nav').removeClass('active');
    }
     $('#top-nav').toggleClass('active');
  }, { 
    offset: '0%' 
  });
})