$(function(){
  ///----------------HANDLE SEARCH EVENT ------------------///
    //handle search home button
  $('#search-home-btn').on('click', function () {
    var objHeader = {};
    objHeader.className = $('#top-nav')[0].getAttribute('class');
    objHeader.styleName = $('#top-nav')[0].getAttribute('style');
    if( !$(this).hasClass('active') ){
      //show search
      $('#search-view-overlay')[0].appendChild($('#top-nav')[0]);
      $('#top-nav').addClass('fixed-top open');
      $('#top-nav #search-home-btn').addClass('active');
      $('#search-view-overlay').modal('show');
    }else{
      //close search
      $('#top-nav').attr('class',objHeader.className);
      $('#top-nav').attr('style',objHeader.styleName);
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
    $('#clear-search-btn').on('click', function () {
      $('#home-search-field').attr('value',"");
    });
})