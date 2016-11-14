$(function(){
	// 商品选择
	$("#zzz").click(function(){
		var a=$("#zzz").is(":checked");
		if(a==true){
			var x=$("#sss").html();
			$("#asdd").html("¥ "+x);
			$("#payBtn").css("background-position","0 -216px");
		}else{
			$("#asdd").html("¥ 0.00");
			$("#payBtn").css("background-position","0 -800px");
		}
	})
	// 全选
	$("#s_all_h").click(function(){
		var b=$("#s_all_h").is(":checked");
		if(b==true){
			var x=$("#sss").html();
			$("#zzz").prop("checked",true);
			$("#dianpu").prop("checked",true);
			$("#asdd").html("¥ "+x);
			$("#payBtn").css("background-position","0 -216px");
		}else if(b==false){
			$("#zzz").prop("checked",false);
			$("#dianpu").prop("checked",false);
			$("#asdd").html("¥ 0.00");
			$("#payBtn").css("background-position","0 -800px");
		}
	})
	// 店铺选择
	$("#dianpu").click(function(){
		var c=$("#dianpu").is(":checked");
		if(c==true){
			var x=$("#sss").html();
			$("#zzz").prop("checked",true);
			$("#asdd").html("¥ "+x);
			$("#payBtn").css("background-position","0 -216px");
		}else if(c==false){
			$("#zzz").prop("checked",false);
			$("#asdd").html("¥ 0.00");
			$("#payBtn").css("background-position","0 -800px");
		}
	})

	// 商品个数加减
	$("#minus1").css("opacity","1");
	var t=parseInt($("#number_11").val());
	$("#add1").click(function(){
		t++;
		$("#number_11").val(t);
		$("#sss").html(96*t);
	})
	$("#minus1").click(function(){
		if(t<=1){
			t=1;
		}else{
			t--;
			$("#number_11").val(t);
			$("#sss").html(96*t);
		}	
	})
	$("#shanchu").click(function(){
		$(".g-wrap").css("display","none");
		$("#kong").css("display","block");
	})
	$("#payBtn").click(function(){
		open("index_dd.html");
	})

	//添加购物车	
    var imgSrc = getCookie("tupian");
    var color = getCookie("color");
    var cicun = getCookie("cicun");
    var tt = getCookie("tt");
    var price3 = getCookie("price3");
    var price4 = getCookie("price4");

    $(".cartImgTip").attr("src",imgSrc);
    $("#color").html(decodeURI(color));
    $("#size").html(cicun);
    $(".cart_goods_t").html(decodeURI(tt));
    $(".cart_throughline,.uuu1").html(price3);
    $(".cart_data_sprice,.cart_font16").html(price4);
})