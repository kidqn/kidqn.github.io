
if($('#mobile-right-nav-menu-btn').is(":visible")) {
  $( "#our-team-carousel" ).removeClass( "owl-carousel owl-theme" );
  $("#our-team-carousel").find('.image').each(function(){
    let tempWidth =  $(this).width();
    $(this).css('height', tempWidth);
  })  
} else {
  $('#our-team-carousel').owlCarousel({
    loop: true,
    dot:true,
    items: 1,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
  });
}