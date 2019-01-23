//on ready
$(function(){
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
})