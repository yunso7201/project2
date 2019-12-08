$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("static");
		$("#GNB").addClass("active");
		$(".dim").addClass("show");
	});
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("static");
		$("#GNB").removeClass("active");
		$(".dim").removeClass("show");
	});

	$("#GNB .menu > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$("#GNB .menu > ul > li").removeClass("active");
			$(this).addClass("active");

			$(".sub").slideUp(300);
			$(this).find(".sub").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find(".sub").slideUp(300);
		}
	});

	var n=0;
	var pos=0;

	setInterval(function(){
		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}
		// console.log(n);

		pos=-1*n*100;
		$(".keyvisual ul").animate({"left" : pos+"%"}, 300, function(){
			if(n == 3){
				n=0;
				pos=0;
				$(".keyvisual ul").animate({"left" : 0}, 0);
			}
		});
	}, 3000);
});
