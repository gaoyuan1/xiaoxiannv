$(function(){
	var name=getCookie("name");
	if(name==""){
		$(".cenav_2,.nav_4").click(function() {
			open("index_kong_gouwuche.html","_self");
		});
		$(".nav_2").text("注册");
		$(".hh").text("登录");
		$(".nav_2").click(function() {
			open("index_login.html","_self");
		});
		$(".hh").click(function() {
			open("index_sign.html","_self");
		});
	}else{
		$(".cenav_2,.nav_4").click(function() {
			open("gouwuche.html","_self");
		});
		$(".hh").click(function(){
			$(".nav_2").text("注册");
			$(".hh").text("登录");
			$(".nav_2").click(function() {
				open("index_login.html","_self");
			});
			$(".hh").click(function() {
				open("index_sign.html","_self");
			});
		})
		if(name=="null"){
			$(".nav_2").text("注册");
			$(".hh").text("登录");
			$(".nav_2").click(function() {
				open("index_login.html","_self");
			});
			$(".hh").click(function() {
				open("index_sign.html","_self");
			});
			$(".cenav_2,.nav_4").click(function() {
				open("index_kong_gouwuche.html","_self");
			});
		}else{
			$(".hh").text("退出登录");
			$(".nav_2").text("您好："+name);
			$(".cenav_2,.nav_4").click(function() {
				open("gouwuche.html","_self");
			});
		}
	}
})