var num=0;
var timer = setInterval(teo,1000);
//呼吸轮播
function teo(){  
    if(!$(".banner .banner_center .banner_1").is(":animated")){  
        $(".banner .banner_center .banner_1").eq(num).fadeOut(1000);  
  
        if(num == $(".banner .banner_center .banner_1").length -1){  
            num = 0;  
        }  
        else{  
            num++;  
        }  
  
        $(".banner .banner_center .banner_1").eq(num).fadeIn(1000);  
  
        $(".banner .banner_center .banner_1").eq(num).addClass("current").siblings().removeClass("current");  
    }  
}  

//透明轮播

// function teo(){
// 	if(num < $(".banner a").length-1){
// 		$(".banner a").hide();
// 		$(".banner a").eq(num+1).fadeTo(300,1);
// 		num++;
// 	}
// 	else{
// 		$(".banner a").hide();
// 		$(".banner a").eq(0).fadeTo(300,1);
// 		num = 0;
// 	}
// }
$(function(){
	$(".banner .banner_center a img").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(teo,1000);
	})
})

