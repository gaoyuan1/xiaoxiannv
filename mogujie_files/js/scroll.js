// 固定导航栏滚动监听和回到顶部

$(function(){
	var div=$("#aaa");
	$("#top").css("display","none");
	var div=$("#top");
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>=530){
			$("#aaa").css("display","block");
		}else{
			$("#aaa").css("display","none");
		}
		if(scrollTop>20){
			$("#top").css("display","block");
		}else{
			$("#top").css("display","none");
		}
	}
	div.click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	})
})