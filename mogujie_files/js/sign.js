onload=function(){
	var sub1=document.getElementById("sub1");
	var name1=document.getElementById("name1");
	var pass=document.getElementById("pass");
	sub1.onclick=function(){
		user=getCookie("user");
		name=getCookie("name");
		password=getCookie("password");
		var b=name1.value;
		var c=pass.value;

		if((b==user)&&(c==password) || (b==name)&&(c==password)){			
			open("index_shouye.html","_self");
		}else{
			alert("错误");
		}
	}
}