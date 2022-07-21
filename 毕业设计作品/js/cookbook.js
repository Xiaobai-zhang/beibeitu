window.onload = function(){
	var left = document.querySelector('.a-left');
	var right = document.querySelector('.a-right');
	var tu = document.querySelector('.tu');
	var ul = tu.querySelector('.wrap');
	var ol = tu.querySelector('ol');
	var index = 0;
	var lis = ul.querySelectorAll('li');
	var flag = true;
	var olis = ol.querySelectorAll('li');
	var time = setInterval(function(){
		if(flag){
			index++;
			if(index>4){
				index = 0;
			}
			for (var i = 0;i<lis.length;i++) {
				lis[i].className = "";
				olis[i].className = "";
			}
			olis[index].className = "current";
			lis[index].className ="tu-li";
		}
	},2000);
//	鼠标进入图片按钮消失
	 ul.onmouseover = function(){
	 	flag = false;
	 };
	 ul.onmouseout= function(){
	 	flag = true;
	 }
	 
	//圆点点击事情
	for(var i=0;i<olis.length;i++){
		olis[i].setAttribute('index',i);
		olis[i].onmouseover = function(){
			index = this.getAttribute("index");
			for (var i = 0;i<lis.length;i++) {
				lis[i].className = "";
				olis[i].className = "";
			}
			olis[index].className = "current";
			lis[index].className ="tu-li";
	 		flag = false;
		}
		olis[i].onmouseleave = function(){
			flag = true;
		}
	}
	//点击左键
   	left.onclick = function(){
   		flag = false;
   		index--;
   		if(index<0){
   			index = 4;
   		}
   		for (var i = 0;i<lis.length;i++) {
			lis[i].className = "";
			olis[i].className = "";
		}
		olis[index].className = "current";
		lis[index].className ="tu-li";
   	}
   	//点击右键
   	right.onclick = function(){
   		index++;
   		if(index>4){
   			index = 0;
   		}
   		for (var i = 0;i<lis.length;i++) {
			lis[i].className = "";
			olis[i].className = "";
		}
   		flag = false;
		olis[index].className = "current";
		lis[index].className ="tu-li";
   	}
   	//编辑
   	var select_lis = document.querySelector('.select-content').querySelectorAll('li');
   	var boxs = document.querySelector('.select-content').querySelectorAll(".r-box");
   	for (var i = 0;i<select_lis.length;i++) {
   		select_lis[i].setAttribute("data-li-index",i);
		select_lis[i].onmouseover = function(){
			var li_index = this.getAttribute("data-li-index");
			for (var j = 0;j<select_lis.length;j++) {
				select_lis[j].querySelector('a').className = "";
				boxs[j].className = "r-box";
			}
			this.querySelector('a').className = "c-l-current";
			boxs[li_index].className = "r-box xx";
		}
	}
}
