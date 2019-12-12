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

	$(".keyvisual").mobileDragEvent2({total: 3});

	$(".slide").mobileDragEvent5({total: 6, bannerw: 150});
	$(".cont").mobileDragEvent5({total: 8, bannerw: 110});
	$(".sub").mobileDragEvent5({total: 3, bannerw: 160});
});
