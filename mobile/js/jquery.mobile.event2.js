(function($){
	$.fn.mobileDragEvent2=function(options){
		options=$.extend({
			total: 10
		}, options);

		return this.each(function(){
			var $keyvisual=$(this);
			var $total=$(options.total)[0];
			var w;
			var h;
			var previmgw;
			var previmgh;
			var imgw;
			var n=0;
			var amount=0;
			var moving=false;
			var xDown=null;
			var yDown=null;
			var direction="";

			$(window).resize(function(){
				w=$(window).width();
				h=$(window).height();
				previmgw=$(".gallery img").width();
				previmgh=$(".gallery img").height();
				imgw=previmgw*h/previmgh;
				$(".gallery").css({width:w*$total});
				$(".gallery li").css({width:$(".gallery").width()/$total, height:h});
				$(".gallery img").css({width:imgw, height:h, marginLeft:-(imgw/2)});
			});
			$(window).trigger("resize");

			$(".left").click(function(e){
				e.preventDefault();
				if(moving){
					return;
				}
				amount-=w;
				moving=true;

				if(n > 0){
					n--;
				}
				else{
					n=($total-1);
				}

				$(".gallery").css({left:amount});
				$(".gallery").prepend($(".gallery li").last());
				amount+=w;

				$(".gallery").animate({left:amount}, 500, function(){
					moving=false;
				});
			});
			$(".right").click(function(e){
				e.preventDefault();
				if(moving){
					return;
				}
				amount-=w;
				moving=true;

				if(n < ($total-1)){
					n++;
				}
				else{
					n=0;
				}

				$(".gallery").animate({left:amount}, 500, function(){
					moving=false;
					amount+=w;
					$(this).css({left:amount});
					$(this).append($(".gallery li").first());
				});
			});
			$keyvisual.on("touchstart", function(e){
				var evt=e.originalEvent;
				clearInterval(id);
				xDown=evt.touches[0].clientX;
				yDown=evt.touches[0].clientY;
			});
			$(".keyvisual").on("touchend", function(e){
				id=setInterval(function(){
					$(".right").trigger("click");
				}, 6000);
			});
			$keyvisual.on("touchmove", function(e){
				if(moving){
					return;
				}
				var evt=e.originalEvent;
				swipe(evt);

				if(direction == "left"){
					$(".right").trigger("click");
				}
				else if(direction == "right"){
					$(".left").trigger("click");
				}
			});
			var id=setInterval(function(){
				$(".right").trigger("click");
			}, 6000);

			// swipe API
			function swipe(evt){
				if(!xDown || !yDown){
					return;
				}
				var xUp=evt.touches[0].clientX;
				var yUp=evt.touches[0].clientY;
				var xDiff=xDown-xUp;
				var yDiff=yDown-yUp;

				if(Math.abs(xDiff) > Math.abs(yDiff)){
					if(xDiff > 0){
						direction="left";
					}else{
						direction="right";
					}
				}else{
					if(yDiff > 0){
					}else{
					}
				}
				xDown=null;
				yDown=null;
			}
		});
	}
})(jQuery);
