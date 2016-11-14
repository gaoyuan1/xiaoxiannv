function generate4() {
	var arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var result = [];
	for(var i=1;i<=4;i++){
		var index = Math.floor(Math.random()*arr.length);
		result.push(arr[index]);
	}
	var sum = "";
	for(var i=0;i<result.length;i++){
		sum += result[i];
	}
	return sum;
}
onload = function(){
	var phone = document.getElementById("tel");
	var tixing = document.getElementById("tixing");
	var yanzheng = document.getElementById("yanzheng");
	var btn = document.getElementById("btn");
	var btn1 = document.getElementsByClassName("btn1")[0];
	var pwd = document.getElementsByClassName("password")[0];
	var contentRight2 = document.getElementsByClassName("contentRight2")[0];
	var tishi = document.getElementsByClassName("tishi")[0];
	var password = document.getElementById("mima");
	var sub=document.getElementById("sub");
	var flag0 = false;
	var flag1 = false;
	var flag2 = false;
	phone.onblur = function(){
		var ph = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		if(phone.value.match(ph)){
			tixing.style.display="none";
			flag0 = true;
		}else{
			tixing.style.display="block";
			tixing.innerHTML = "请填写正确的手机号";
			flag0 = false;
		}
		if(phone.value==""){
			tixing.style.display="block";
			tixing.innerHTML = "请输入手机号码";
		}
	}
	phone.onfocus = function(){
		tixing.style.display="none";
		if(phone.value!=""){
			tixing.style.display="none";
		}
	}
	btn.value = generate4();
    btn.onclick = function(){
        btn.value = generate4();
    }
	yanzheng.onblur = function(){
		if(yanzheng.value == btn.value){
			tixing.style.display = "none";
		    flag1 = true;
		}else{
		    tixing.style.display = "block";
		    tixing.innerHTML = "请输入正确的验证码";
		    flag1 = false;
		}
    }
    sub.onclick = function(){
        if(flag0&&flag1){
            contentRight2.style.display="none";
            var xxx=phone.value;
            pwd.style.display="block";
            var date= new Date();
          	date.setDate(date.getDate()+10);
			setCookie("user",xxx,date);
        }else{
            tixing.style.display = "block";
            tixing.innerHTML = "信息有误，请检查后重新输入";
        }
    }
    password.onkeyup=function(){
        var val=password.value;
        var reg=/^\w{6,20}$/i;
        var regd1=/^\w{6,12}$/i;
        var regd2=/^\d{13,20}$/;
        var reg9 = /\d{1,}/i;
        var reg91 = /[a-zA-Z]{1,}/i;
        var reg92 = /_{1,}/i;
        var reg93 = /^\w{15,20}$/i;
        if(reg.test(val)){
            if(regd1.test(val)||regd2.test(val)){
                tishi.style.display = "none";
             }else if(reg9.test(val)&&reg91.test(val)&&reg92.test(val)&&reg93.test(val)){
                tishi.style.display = "none";
            }else{
                tishi.style.display = "none";
            }
            flag2=false;
        }else{
            tishi.innerHTML = "密码不符合要求";
            tishi.style.color = "red";
            flag2=true;
        }
    }
    btn1.onclick=function(){
    	if(flag2=true){
    		var pas=password.value;
    		var date= new Date();
          	date.setDate(date.getDate()+10);
			setCookie("password",pas,date);
    		open("index_login_name.html","_self");
    	}else{
    		tishi.innerHTML = "密码不符合要求";
    	}
    }
}