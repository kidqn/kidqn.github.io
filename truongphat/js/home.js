$(function(){
	$("#home-info-carousel").owlCarousel({
      loop:true,
      items: 1,
      nav:false,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      smartSpeed:450
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
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    slideSpeed : 300,
    paginationSpeed : 300,
    loop:true,
    items: 1,
    nav: false
  })
  $("#baochi-carousel").owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    slideSpeed : 300,
    paginationSpeed : 300,
    loop:true,
    items: 1,
    nav: false
  })
})