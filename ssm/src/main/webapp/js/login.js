/**
 * 登录界面(Login.jsp)的js封装
 */


$("#phone_no").click(function (){
	$("#accountMsg").addClass("hidden");
	
});
$("#inputPassword").click(function (){
	$("#accountMsg").addClass("hidden");
	
});


  //登录事件
	$("#btn_login").click(function() {
		
		var phone = $('#phone_no').val();
		
		var pwd = $('#inputPassword').val();
		
		if(phone==""||pwd==""){
			alert("手机号或密码不能为空");
		}else{
			$.ajax({
				type : 'post',
				dataType : 'json',
				url : 'user/login?phone='+phone+"&pwd="+pwd,
				success : function(data) {
					if(data.code!=-1){
					var build = data.code.substring(0,2);
					var floor = data.code.substring(2,3);
					var room = data.code.substring(3,5);
					  alert("成功登陆");
					  location.href = "payEle.jsp?build="+build+'&floor='+floor+'&room='+room;
					} else {
						$("#accountMsg").removeClass("hidden");

					}
				}
			});
		}

	});