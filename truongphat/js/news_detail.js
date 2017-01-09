$(function(){
  var topAcitionBar = $('#icon-action-bar').offset().top;
  var leftAcitionBar = $('#icon-action-bar')[0].getBoundingClientRect().left.toFixed(0);
  $(window).scroll(function () {
      if ($(this).scrollTop() > topAcitionBar  - 150){ 
        $('#icon-action-bar').addClass('fixed');
        $('#icon-action-bar').attr('style','top:' + 150 +'px;' + 'left:'+ leftAcitionBar + 'px;');
      }
      else{
        $('#icon-action-bar').removeClass('fixed');
        $('#icon-action-bar').attr('style','');
      }
  });

})
