$(function(){
	// 根据导航找内容
	$(".panel-box").eq(0).addClass('active');
	$(".list .list_title").click(function() {
		$(".list .list_title").removeClass("current");
		$(this).addClass("current");
		$(".active").removeClass("active");
		$(".panel-box").eq($(this).index()).addClass("active");
	}) 
	// 滚动监听、顶部固定导航栏、楼层导航
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >=1100){
        	$('.headline_shop').css("position","fixed").css("top",0).css("width",219);
        	$('.main-box').css("position","fixed").css("top",0);
        	$('.product_bottom_right').css("position","fixed").css("top",0).css("right",76);
        }
        else{
        	$('.headline_shop').css("position","relative").css("width",198);
        	$('.main-box').css("position","relative");
        	$('.product_bottom_right').css("position","absolute").css("right",0);
        } 
    	var $h3 = $(".panel-title");
		var $floorLi = $(".extranav-list li");
		var $exA = $floorLi.find("a");
		var x = $(window).scrollTop();	//当前的卷动高度
		if(scrollTop < $h3.eq(1).offset().top - 150){
			$floorLi.eq(0).addClass("active1").siblings().removeClass("active1");
			$(".active2").removeClass("active2");
			$floorLi.eq(0).find(".a1").addClass("active2").siblings().removeClass("active2");
		}else if(scrollTop < $h3.eq(2).offset().top - 150){
			$floorLi.eq(1).addClass("active1").siblings().removeClass("active1");
			$(".active2").removeClass("active2");
			$floorLi.eq(1).find(".a1").addClass("active2").siblings().removeClass("active2");
		}else if(scrollTop < $h3.eq(3).offset().top - 150){
			$floorLi.eq(2).addClass("active1").siblings().removeClass("active1");
			$(".active2").removeClass("active2");
			$floorLi.eq(2).find(".a1").addClass("active2").siblings().removeClass("active2");
		}else if(scrollTop < $h3.eq(4).offset().top - 150){
			$floorLi.eq(3).addClass("active1").siblings().removeClass("active1");
			$(".active2").removeClass("active2");
			$floorLi.eq(3).find(".a1").addClass("active2").siblings().removeClass("active2");
		}else if(scrollTop >= $h3.eq(4).offset().top - 150){
			$floorLi.eq(4).addClass("active1").siblings().removeClass("active1");
			$(".active2").removeClass("active2");
			$floorLi.eq(4).find(".a1").addClass("active2").siblings().removeClass("active2");
		} 

    });

    // 中心相册突出和放大镜

    // var oBox = $(".picture");
    // var oBig = $(".big").find("img");
    // var ali = $(".small_box ul li");
    // ali.mouseover(function(){
    // 	$(this).css("opacity",1);      
    //     ali.attr("class","");
    //     ali.eq($(this).index()).attr("class","small-active");
    //     oBig.css("opacity",0);
    //     oBig.eq($(this).index()).css("opacity",1);
    //     $(".datu").css("background","url(" + oBig.eq($(this).index()).attr('src') + ")");

    // })
    // ali.mouseout(function(){
    // 	$(this).css("opacity",0.5);      
    // })
	$.fn.magnifying = function(){
		var that = $(this),
		$imgCon = that.find('.big'),//正常图片容器
		$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
		$Drag = that.find('.fangdajing'),//拖动滑动容器
		$show = that.find('.datu'),//放大镜显示区域
		$showIMg = $show.find('#da'),//放大镜图片
		$ImgList = that.find('.small .small_box ul li img'),
		multiple = $show.width()/$Drag.width();

		$imgCon.mousemove(
			function(e){
				//计算盒子内的鼠标位置：
				var x = e.pageX - $("div.big").offset().left;
				var y = e.pageY - $("div.big").offset().top;
				//验收，保证放大镜，不能移出盒子
				if(x < 75){
					x = 75;
				}
				if(y < 75){
					y = 75;
				}
				if(x > 400 - 75){
					x = 400 - 75;
				}
				if(y > 600 - 75){
					y = 600 - 75;
				}
				//让放大镜跟随鼠标：
				$Drag.css(
					{
						"left":x - 75,
						"top":y - 75
					}	
				);
				//让大图的background-position，等比例变化
				var beijingx = -(400/150) * (x - 75);
				var beijingy = -(600/150) * (y - 75);
				$show.css("background","url(" + $Img.attr('src') + ")");
				$show.css("background-size","200% 200%");
				$show.css("background-position",beijingx + "px " + beijingy + "px");
			}
		);		
		$imgCon.mouseenter(
			function(){
				$(".fangdajing").show();
				$(".datu").show();
			}
		)		
		$imgCon.mouseleave(
			function(){
				$(".fangdajing").hide();
				$(".datu").hide();
			}
		)
		$ImgList.click(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src',NowSrc);
			$(this).parent().addClass('small-active').siblings().removeClass('small-active');
		});
	}
	$(".picture").magnifying();	
    //放大镜
 //    $(".big").mousemove(
	// 	function(e){
	// 		//计算盒子内的鼠标位置：
	// 		var x = e.pageX - $("div.big").offset().left;
	// 		var y = e.pageY - $("div.big").offset().top;
	// 		//验收，保证放大镜，不能移出盒子
	// 		if(x < 87.5){
	// 			x = 87.5;
	// 		}
	// 		if(y < 87.5){
	// 			y = 87.5;
	// 		}
	// 		if(x > 400 - 87.5){
	// 			x = 400 - 87.5;
	// 		}
	// 		if(y > 600 - 87.5){
	// 			y = 600 -87.5;
	// 		}
	// 		//让放大镜跟随鼠标：
	// 		$(".big .fangdajing").css(
	// 			{
	// 				"left":x - 87.5,
	// 				"top":y - 87.5
	// 			}	
	// 		);
	// 		//让大图的background-position，等比例变化
	// 		var beijingx = -(400/185) * (x - 87.5);
	// 		var beijingy = -(600/185) * (y - 87.5);
	// 		// $(".datu").css("background","url(" + oBig.attr('src') + ")");
	// 		$(".datu").css("background-position",beijingx + "px " + beijingy + "px");
	// 	}
	// );		
	// $(".big").mouseenter(
	// 	function(){
	// 		$(".fangdajing").show();
	// 		$(".datu").show();
	// 	}
	// )		
	// $(".big").mouseleave(
	// 	function(){
	// 		$(".fangdajing").hide();
	// 		$(".datu").hide();
	// 	}
	// )

	//从cookie拿商品属性出来
	var path=getCookie("src");
	var tt=getCookie("html");
	var pp=getCookie("html2");
	var p1=getCookie("html3");
	$(".big img").attr("src",path);
	$(".datu").css({"background-image":"url("+path+")"});
	$(".product_right h1").html(decodeURI(tt));
	$(".price_2").html(pp);
	$(".price_1").html(parseFloat(p1/0.8).toFixed(2));
})
