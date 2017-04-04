$(function(){
	$('#thele-01 #close').click(function(e){
		e.stopPropagation() 
		$(this).parent().modal('toggle');
	})
	$('#thele-02 #close').click(function(e){
		e.stopPropagation() 
		$(this).parent().modal('toggle');
	})
});