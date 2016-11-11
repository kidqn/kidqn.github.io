$(function(){
	$("#menu-mobile-btn").on("click", function() {
    var $elm = $("#main");
    if($elm.attr( 'style' ) && $elm.attr( 'style' ) !== ''){
      $elm.attr('style','');
      $('#menu-mobile-left').removeClass('slideout');
      $('html').attr('style','');
      $('body').attr('style','');
    }else{
      $('#overlay').attr('style','display:block;');
      $elm.attr('style','transform: translate3d(256px, 0px, 0px);');
      $('#menu-mobile-left').addClass('slideout');
      setTimeout(function(){
        $('html').attr('style','overflow:hidden; height: 100%;');
        $('body').attr('style','overflow:hidden; height: 100%;');
      },100);
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
  $("#overlay").on("click", function() {
      var $elm = $("#main");
      $elm.attr('style','');
      $('#menu-mobile-left').removeClass('slideout');
      $('html').attr('style','');
      $('body').attr('style','');
      $(this).attr('style','');
  });
})