setInterval(function(){
		var data = new Date();
		var h = data.getHours();
		var m = data.getMinutes();
		var s = data.getSeconds();
		var text = '现在是'+h+'时'+m+'分'+s+'秒  制作者：计应1931班张佳华';
		var time = document.getElementById('time');
		time.innerHTML = text;
},1000)
