$(function(){
	//init dropdown select
	[].slice.call( document.querySelectorAll( 'select.tp-dropdown-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
	$('.tp-popup .close-popup').click(function(){
		$(this).parent().modal('toggle');
	})
});
$(window).load(function(){
    setTimeout(function(){ 
    	$('#baogia-popup').modal('show');
    }, 3000);
})