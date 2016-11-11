$(function(){
	$("#menu-mobile-btn").on("click", function() {
    var $elm = $("#main");
    if($elm.attr( 'style' ) && $elm.attr( 'style' ) !== ''){
      $elm.attr('style','');
      $('#menu-mobile-left').removeClass('slideout');
    }else{
      $elm.attr('style','transform: translate3d(256px, 0px, 0px);');
      $('#menu-mobile-left').addClass('slideout');
    }
  });
  $("#account-btn").on("click", function() {
    var $elm = $("#account-panel");
    if($elm.hasClass('open')){
      $elm.removeClass('open');
    }else{
      $elm.addClass('open');
    }
  });
})