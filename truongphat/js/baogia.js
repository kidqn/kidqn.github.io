$(function(){
	$('.tp-popup .close-popup').click(function(){
		$(this).parent().modal('toggle');
	})
});
$(window).load(function(){
    setTimeout(function(){ 
    	$('#baogia-popup').modal('show');
    }, 3000);
})