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


	$("#sendMsg").click(function(){
		
		var spinner = createSpinner();

		$('#formHolder').append(spinner);
		//collectiong form data

		var formData = $('.form').serializeArray();

		console.log(formData);

		


		setTimeout(function() {

			fadeSpinner();

		}, 1000);


		return false;
	});//click sendMsg
	
	
   
});


function checkPos(){
	if($(window).scrollTop() > 5){
		$('#nav-holder').addClass('move');
	}else{
		$('#nav-holder').removeClass('move');
	}
}//checkPos


function createSpinner(){
	
	var spinnerHolder = $("<div/>").attr('id','spinner-holder');	
	var spinsHolder = $("<div/>").attr('id','circularG');
	
	for(i=1;i < 9; i++){
	
		var el = $("<div/>").attr('id', ("circularG_" + i)).addClass("circularG");	
		spinsHolder.append(el);				
	}
	var td = $("<td/>").append(spinsHolder); 
	var tr = $("<tr>").append(td);
	var table = $("<table/>").append(tr);
	
	spinnerHolder.append(table);
	console.log(spinnerHolder)
	return spinnerHolder;
}//createspinner


function fadeSpinner()
{
	console.log("fade")
	$("#spinner-holder").fadeIn('slow',function(){
		console.log($(this));
		$(this).remove();
	});
}

