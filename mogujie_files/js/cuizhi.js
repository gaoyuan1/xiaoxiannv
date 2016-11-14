// 首页轮播的垂直导航
$(document).ready(
	function(){
		$(".banner_nav ul li").mouseenter(function(){
			$(this).children(".banner_nav_2").show();
		});
		$(".banner_nav ul li").mouseleave(function(){
			$(this).children(".banner_nav_2").hide();
		});
	}
);