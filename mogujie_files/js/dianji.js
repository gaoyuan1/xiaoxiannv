// 店铺优惠券、收藏点击事件
$(function(){
	$(".style button").click(function(){
		$(".style button .dui").css("display","none");
		$(this).find(".dui").css("display","block");
		$(".style button").css("border",0);
		$(this).css("border","2px solid #999");	
	});
	$(".size button").click(function(){
		$(".size button .dui").css("display","none");
		$(this).find(".dui").css("display","block");
		$(".size button").css("border",0);
		$(this).css("border","2px solid #999");
	});
	$(".btn").click(function() {
		confirm("领取成功");
	});
	$(".collect").click(function() {
		confirm("感谢亲的收藏(づ￣3￣)づ╭❤～");
	});
})