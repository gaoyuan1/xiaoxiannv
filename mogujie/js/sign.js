onload = function(){
        var phone1 = document.getElementsByClassName("phone1")[0];
        var email1 = document.getElementsByClassName("email1")[0];
        var phone2 = document.getElementsByClassName("phone")[0];
        var email2 = document.getElementsByClassName("email")[0]; 
        var tixing = document.getElementById("tixing");
        var phone = document.getElementById("phone");
        var pwd = document.getElementById("pwd");
        var pwd2 = document.getElementById("pwd2");
        var yzm1 = document.getElementById("yzm1");
        var yzm2 = document.getElementById("yzm2");
        var yz = document.getElementById("yz"); 
        var sign = document.getElementById("join");
        var remember = document.getElementById("remember");
        var a,b,c,d,e,f,g = false;     
        phone1.onclick = function(){
            phone2.style.display = "block";
            email2.style.display = "none";
            email1.style.background = "#f5f5f5";
            email1.style.borderBottom = "1px solid #d2d5d7";
            email1.style.borderRight = "1px solid #d2d5d7";
            phone1.style.background = "none";
            phone1.style.borderBottom = "none";
            phone1.style.borderLeft = "none";
        }
        email1.onclick = function(){
            email2.style.display = "block";
            phone2.style.display = "none";
            phone1.style.background = "#f5f5f5";
            phone1.style.borderBottom = "1px solid #d2d5d7";
            phone1.style.borderRight = "1px solid #d2d5d7";
            email1.style.background = "none";
            email1.style.borderBottom = "none";
            email1.style.borderLeft = "none";
        } 
        // 验证手机号
        phone.onblur = function () {
            var reg = /^1[0-9]{10}$/ig;
            if(phone.value.match(reg)){
                tixing.style.display = "none";
                a =true;
            }else{
                tixing.innerHTML = "手机号码格式错误 请重新输入！";
                tixing.style.display = "block";
                a = false;
            }
        }
        // 验证密码
        pwd.onblur = function () {
            if(pwd.value.match(/^\w{6,20}$/ig)){
                tixing.style.display = "none";
                b = true;
            }else{
                tixing.innerHTML = "请输入长度为6-20位的密码";
                tixing.style.display = "block";
                b = false;
            }
        }
        pwd2.onblur = function () {
            if(pwd2.value == pwd.value){
                tixing.style.display = "none";
                c = true;
            }else{
                tixing.innerHTML = "密码与确认密码不一致 请重新输入！";
                tixing.style.display = "block";
                c = false;
            }
        }
        //验证码        
        yz.onclick = function () {
            yzcode();
        }
        yzm1.onblur = function () {
            if(yzm1.value == yz.innerHTML){
                tixing.style.display = "none";
                d= true;
            }else{
                tixing.innerHTML = "验证码错误";
                tixing.style.display = "block";
                yzcode();
                d = false;
            }
        }
        yzm2.onblur = function () {
            if(yzm2.value == yz.innerHTML){
                tixing.style.display = "none";
                e= true;
            }else{
                tixing.innerHTML = "验证码错误";
                tixing.style.display = "block";
                yzcode();
                e = false;
            }
        }       
        /*
        提交表单
         */
        sign.onclick = function () {
            /*
                b1-b7 都为true才符合条件
             */
            if(a && b && c && d && e && remember.checked){
                setCookie("name",phone.value);
                setCookie("password",pwd2.value);
                window.open("index.html");
            }else{
                tixing.innerHTML = "信息有误，请查证后提交";
                tixing.style.display = "block";
            }
        }
        //邮箱注册开始
        var email = document.getElementById("email");
        var tixingE = document.getElementById("tixing-e"); 
        var pwdE = document.getElementById("pwde");
        var pwdE2 = document.getElementById("pwde2");
        var yzmE2 = document.getElementById("yzme2");
        var yzE = document.getElementById("yze");
        var rememberE = document.getElementById("remembere");
        var signE = document.getElementById("joine"); 
        //邮箱验证       
        email.onblur = function () {
            var reg = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,4})$/;
            if(email.value.match(reg)){
                tixingE.style.display = "none";
                f = true ;
            }else{
                tixingE.innerHTML = "邮箱格式错误 请重新输入！";
                tixingE.style.display = "block";
                f = false;
            }
        }
        //密码验证
        pwdE.onblur = function () {
            if(pwdE.value.match(/^\w{6,20}$/ig)){
                tixingE.style.display = "none";
                g = true;
            }else{
                tixingE.innerHTML = "请输入长度为6-20位的密码";
                tixingE.style.display = "block";
                g = false;
            }
        }
        pwdE2.onblur = function () {
            if(pwdE2.value == pwdE.value){
                tixingE.style.display = "none";
                h = true;
            }else{
                tixingE.innerHTML = "密码与确认密码不一致 请重新输入！";
                tixingE.style.display = "block";
                h = false;
            }
        }
        //验证码
        yzE.onclick = function () {
            yzcode();
        }
        yzmE2.onblur = function () {
            if(yzmE2.value == yzE.innerHTML){
                tixingE.style.display = "none";
                i= true;
            }else{
                tixingE.innerHTML = "验证码错误";
                tixingE.style.display = "block";
                yzcode();
                i = false;
            }
        }
        signE.onclick = function () {
            /*
                b1-b7 都为true才符合条件
             */
            if(f && g && h && i && rememberE.checked){
                setCookie("nameE",email.value);
                setCookie("passwordE",pwdE2.value);
                window.open("index.html");
            }else{
                tixingE.innerHTML = "信息有误，请查证后提交";
                tixingE.style.display = "block";
            }
        }

        function yzcode() {
            var arr = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i"];
            var sum = "";
            for(var i=1;i<=4;i++){
                sum += arr[Math.floor(Math.random()*arr.length)];
            }
            var yz = document.getElementById("yz");
            yz.innerHTML = sum;
            var yzE = document.getElementById("yze");
            yzE.innerHTML = sum;
        }
}