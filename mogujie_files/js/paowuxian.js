// 加入购物车抛物线

$(function(){
    var bool = new Parabola({
        el: "#gouwuche1",
        //速率和
        offset: [500, 50],
        curvature: 0.005,
        duration: 1000,
        callback:function(){
            // alert("完成后回调")
        },
        stepCallback:function(x,y){
            // console.log(x,y);
            $("<div>").appendTo("body").css({
                "position": "absolute",
                "top": this.elOriginalTop + y,
                "left":this.elOriginalLeft + x,
                "background-color":"#CDCDCD",
                "width":"5px",
                "height":"5px",
                "border-radius": "5px"
            });
        }
      })
	$("#gouwuche1").css({"width":"20px",
			"height":"20px",
			"position":"absolute",
			"top":"15px",
			"left":"10px",
			"opacity":"0"

	})
    $("#gouwuche1").find("img").css({"height":"100%","width":"100%"});
	
    $("#gouwuche").click(function(event){
		$("#gouwuche1").css("opacity","1");
		event.preventDefault();
        bool.start(); 
	})



    $(".style button").click(function() {
        // 获取商品src颜色
        var color = $(this).find("img").attr("alt");
        var imgSrc = $(".big").find("img").attr("src")
        setCookie("color",encodeURI(color));
        setCookie("tupian",imgSrc);
        // console.log(imgSrc);
    });
    $(".size button").click(function(){
        // 获取商品尺寸、名称、原价、促销价
        var cicun = $(this).find("i").html();
        var tt = $(".product_right").find("h1").html();
        var price3 = $(".price p").find(".price_1").html();
        var price4 = $(".price p").find(".price_2").html();
        setCookie("cicun",cicun);
        setCookie("tt",encodeURI(tt));
        setCookie("price3",price3);
        setCookie("price4",price4);
    })
})
