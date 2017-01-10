$(function(){
	//init dropdown select
	[].slice.call( document.querySelectorAll( 'select.tp-dropdown-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})