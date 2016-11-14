//账户名判断
$(function(){
    $("button").click(function(){
    	var name=$("input").val();
        var reg1=/^[^0-9][\w&]{5,19}$/ig;
        if(reg1.test(name)){
            $("span").text("用户名符合要求");
            var date= new Date();
			date.setDate(date.getDate()+10);
			setCookie("name",name,date);
            open("index_shouye.html","_self");
        }else{
            $("span").text("用户名不符合要求");
        }
    })
})