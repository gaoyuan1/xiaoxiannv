//商品数量添加
$(function(){
	var value=parseInt($("#number_1").val());
	$("#add").click(function(){
		$("#minus").css("opacity","1");
		value+=1;
		$("#number_1").val(value)
	})
	$("#minus").click(function(){
		value-=1;
		if(value<=0){
			value=0;
			$("#minus").css("opacity","0.3");
		}else{

			$("#number_1").val(value);
		}
	})
})