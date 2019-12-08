$(function(){
	$("#nav > .menu > ul > li").hover(
		function(){
			$("#nav > .menu > ul").addClass("over");
		},
		function(){
			$("#nav > .menu > ul").removeClass("over");
		}
	);

	$("#nav > .menu > ul > li:first-child > a").focusin(function(){
		$("#nav > .menu > ul").addClass("over");
	});
	$("#nav li:last-child li:last-child ").focusout(function(){
		$("#nav > .menu > ul").removeClass("over");
	});

	$("#nav > .menu > ul > li > a").focusin(function(){
		$(this).addClass("over");
	});
	$("#nav li li:last-child").focusout(function(){
		$(this).parent().prev("a").removeClass("over");
	});

	var n=0;
	var targetx=0;

	$(".right").click(function(e){
		e.preventDefault();

		if(n < 5){
			n=n+1;
		}
		targetx=n * -1 * 100;
		$(".keyvisual .keyimage").css({ "left" : targetx+"%" });
	});

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
			console.log(n);
		}
		targetx=n * -1 * 100;
		$(".keyvisual .keyimage").css({ "left" : targetx+"%" });
	});
});
