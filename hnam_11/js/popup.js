$(function(){
	$('#close').click(function(){
		$(this).parent().modal('toggle');
	})
});
$(window).load(function(){
    setTimeout(function(){ 
    	$('#popup-detail-01').modal('show');
    }, 1000);
})