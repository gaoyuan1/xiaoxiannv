
$(function(){
    var oBox = $(".thing-main-top-img");
    var oBig = $(".img-big img");
    var ali = $(".img-small-ul li");
 	console.log("123");
    ali.mouseover(function(){
       
        ali.attr("class","");
        as.eq($(this).index()).attr("class","small-active");
        oBig.src = as.eq($(this).index()).src;
    })
})