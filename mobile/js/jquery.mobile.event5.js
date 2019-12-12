(function($){
	$.fn.mobileDragEvent5=function(options){
		options=$.extend({
			total: 10,
			bannerw: 300
		}, options);

		return this.each(function(){
			var $keyvisual=$(this);
			var $total=$(options.total)[0];
			var $bannerw=$(options.bannerw)[0];
			var w;
			var amount=0;
			var canmove=0;
			var moving=false;
			var edge=0;
			var xDown=null;
			var yDown=null;

			$(window).resize(function(){
				$keyvisual.css({width:$bannerw*$total});
				var initw=$keyvisual.width();
				var marginw=initw-$(this).width();

				if(marginw >= 0){
					if(marginw >= $bannerw){
						canmove=Math.ceil(marginw/$bannerw);
						edge=initw-$bannerw*(canmove-1);
						edge=edge%$(this).width();
					}
					else{
						canmove=1;
						edge=initw%$(this).width();
					}
				}
			});
			$(window).trigger("resize");

			mobileDrag($keyvisual, amount, $bannerw, edge);

			function mobileDrag(target, amt, x1, x2){
				target.on("touchstart", function(e){
					var evt=e.originalEvent;
					xDown=evt.touches[0].clientX;
					yDown=evt.touches[0].clientY;
				});
				target.on("touchmove", function(e){
					var evt=e.originalEvent;
					e.stopPropagation();
					$target=$(this);

					if(!xDown || !yDown || moving){
						return;
					}

					var xUp=evt.touches[0].clientX;
					var yUp=evt.touches[0].clientY;
					var xDiff=xDown-xUp;
					var yDiff=yDown-yUp;

					if(Math.abs(xDiff) > Math.abs(yDiff)){
						if(xDiff > 0){
							// left swipe
							if(amt < canmove){
								moving=true;
								amt++;

								if(amt != canmove){
									$(this).css({left:amt*x1*(-1)});
								}else{
									$(this).css({left:"-="+x2+"px"});
								}
							}
						}else{
							// right swipe
							if(amt > 0){
								moving=true;
								amt--;

								if(amt != 0){
									$(this).css({left:amt*x1*(-1)});
								}else{
									$(this).css({left:0});
								}
							}
						}
					}else{
						if(yDiff > 0){
							// up swipe
						}else{
							// down swipe
						}
					}

					// reset values
					xDown=null;
					yDown=null;
				});
				target.on("transitionend", function(){
					moving=false;
				});
			}
		});
	}
})(jQuery);
