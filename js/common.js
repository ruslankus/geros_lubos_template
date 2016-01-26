$(function() {
	
	checkPos();
	
	$(window).scroll(function(){
		
		checkPos();
	});
	
	$(".menu-list > li > a, #logo-link").click(function(){	
		
		var posY = 0;
		var target = $(this).attr('href');
		
		if(target !== '/'){
			
			var posY = $(target).offset().top;
		}
		
		$("html,body").animate({scrollTop:(posY)},1000,function(){});
		
		return false;
	});//click
	
	
	
   
});


function checkPos(){
	if($(window).scrollTop() > 5){
		$('#nav-holder').addClass('move');
	}else{
		$('#nav-holder').removeClass('move');
	}
}//checkPos

