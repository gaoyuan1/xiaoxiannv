$(function(){

	//手机号登录
	var name = getCookie("name");
	var password = getCookie("password");
	var nameE = getCookie("nameE");
	var passwordE = getCookie("passwordE");
	$("#login-login").click(function(){
		var iphone = $("#phone").val();
		var pwdd = $("#pwd").val();
		if(iphone=="" || pwdd==""){
			alert("用户名或密码为空");
		}else{
			if((iphone==name && pwdd==password) || (nameE==nameE && passwordE==passwordE)){
				window.open("index.html");
			}else{
				alert("用户名或密码错误");
			}
		}		
	})

	//退出
	$("#tuichu").click(function(){
		removeCookie("name");
	})
})