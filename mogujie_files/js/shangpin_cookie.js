$(function(){
	// 点击是将图片src路径、商品名称、价格放到cookie里
	$(".like_1_1,.like_1_2").click(function(){
		var tupian=$(this).find(".like_1_tu img").attr("src");
		var title=$(this).find(".kaixue").html();
		var price=$(this).find(".like_1_di b").html();
		setCookie("src",tupian);
		setCookie("html",encodeURI(title));
		setCookie("html2",price);
		setCookie("html3",price);
		// console.log(price);
		open("index_shangpin.html");
	})
})