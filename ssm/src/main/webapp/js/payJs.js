/**
 * 
 */


	var msg = -1;
	var money;
	
	function change(object){
		 money = parseInt(object.value)+2;
		
		$('#money').html(money+"元（2元手续费）");
		
	}

	$('#submit').on(
			"click",
			function() {
				if(msg==1 && $('#money').html()!=""){
				$('#WIDsubject').val(
						$('#build').val() + "栋" + $('#floor').val()
								+ $('#room').val() + "电费");
				$('#WIDtotal_fee').val(money);
				}else{
					
					alert("请选择正确的房间号或对应的金额");
					return false;
					
				}
			});
	$('#query').on(
			"click",
			function() {
				var build = $('#build').val();
				var floor = $('#floor').val();
				var room = $('#room').val();
				$.ajax({
					type : 'post',
					dataType : 'json',
					url : 'https://api.neojo.org/EleQueryAPI/Query?build='
							+ build + "&floor=" + floor + "&room=" + room
							+ "&type=balance",
					success : function(data) {

						var ele = data.normal;
						var ele_Air = data.airConditioner; 
						
						if (typeof (ele) =="undefined") {
							alert("您输入的房间号有误");
							msg = -1;
						} else {
							$('#Element').html(ele+"℃");
							$('#Elemet_air').html(ele_Air+"℃");
							msg = 1;
						}

					}
				})

			});
	
	
	function GetDateNow() {
		var vNow = new Date();
		var sNow = "";
		sNow += String(vNow.getFullYear());
		sNow += String(vNow.getMonth() + 1);
		sNow += String(vNow.getDate());
		sNow += String(vNow.getHours());
		sNow += String(vNow.getMinutes());
		sNow += String(vNow.getSeconds());
		sNow += String(vNow.getMilliseconds());
		document.getElementById("WIDout_trade_no").value = sNow;
	}
	GetDateNow();