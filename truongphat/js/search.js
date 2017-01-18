//check in mobile view
function isMobile(){
  if ($('#menu-mobile-btn').css('display') != 'none'){
    return true;
  }else{
    return false;
  }
}
//chinh size banner video khi kick thuoc man hinh thay doi
function resetStyleHomePage(){
  if(isMobile()){
    if($('body').hasClass('home-p')){
      $('#about').attr('style','');
      $('#banner-video').attr('style','');
    }
    $('#top-nav')[0].appendChild($('#search-home-btn')[0]);
  }else{
    if($('body').hasClass('home-p')){
      $('#banner-video').css('height',window.innerHeight + 'px');
      $('#about').css('margin-top',window.innerHeight + 'px');
    }
    $('#menu-home')[0].appendChild($('#search-home-btn')[0]);
  }
}
function openSearchView(){
    var objHeader = {};
    objHeader.className = $('#top-nav')[0].getAttribute('class');
    objHeader.styleName = $('#top-nav')[0].getAttribute('style');
    //show search
    $('#search-view-overlay')[0].appendChild($('#top-nav')[0]);
    $('#top-nav').addClass('fixed-top open');
    $('#top-nav #search-home-btn').addClass('active');
    $('#search-view-overlay').modal('show');
}
function closeSearchView(){
    var objHeader = {};
    objHeader.className = $('#top-nav')[0].getAttribute('class');
    objHeader.styleName = $('#top-nav')[0].getAttribute('style');
    //close search
    $('#top-nav').attr('class',objHeader.className);
    $('#top-nav').attr('style',objHeader.styleName);
    $('#top-nav #search-home-btn').removeClass('active');
    $( "header" )[0].appendChild($('#top-nav')[0]);
}

$(function(){
  ///----------------HANDLE SEARCH EVENT ------------------///
    //handle search home button
  $('#search-home-btn').on('click', function (e) {
    e.stopPropagation(e);
    if( !$('#search-home-btn').hasClass('active')){
      openSearchView();
    }else{
      closeSearchView();
      $('#search-view-overlay').modal('toggle');
    }
  });
  $('#search-view-overlay').on('hidden.bs.modal', function () {
    closeSearchView();
  })
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
    $('#clear-search-btn').on('click', function () {
      $('#home-search-field').attr('value',"");
    });
})