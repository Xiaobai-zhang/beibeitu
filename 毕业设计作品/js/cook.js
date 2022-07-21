window.onload = function(){
	//banner
	var left = document.querySelector('.a-left');
	var right = document.querySelector('.a-right');
	var tu = document.querySelector('.tu');
	var b_ul = tu.querySelector('.wrap');
	var b_ol = tu.querySelector('ol');
	var b_index = 0;
	var b_lis = b_ul.querySelectorAll('li');
	var b_flag = true;
	var b_olis = b_ol.querySelectorAll('li');
	var b_time = setInterval(function(){
		if(b_flag){
			b_index++;
			if(b_index>=b_lis.length-1){
				b_index = 0;
			}
			for (var i = 0;i<b_lis.length;i++) {
				b_lis[i].className = "";
				b_olis[i].className = "";
			}
			b_olis[b_index].className = "current";
			b_lis[b_index].className ="tu-li";
		}
	},2000);
//	鼠标进入图片js停止
	 b_ul.onmouseover = function(){
	 	b_flag = false;
	 };
	 b_ul.onmouseout= function(){
	 	b_flag = true;
	 }
	 
	//圆点点击事情
	for(var i=0;i<b_olis.length;i++){
		b_olis[i].setAttribute('b-index',i);
		b_olis[i].onmouseover = function(){
			b_index = this.getAttribute("b-index");
			for (var i = 0;i<b_lis.length;i++) {
				b_lis[i].className = "";
				b_olis[i].className = "";
			}
			b_olis[b_index].className = "current";
			b_lis[b_index].className ="tu-li";
	 		b_flag = false;
		}
		b_olis[i].onmouseleave = function(){
			b_flag = true;
		}
	}
	//点击左键
   	left.onclick = function(){
   		b_flag = false;
   		b_index--;
   		if(b_index<0){
   			b_index = 4;
   		}
   		for (var i = 0;i<b_lis.length;i++) {
			b_lis[i].className = "";
			b_olis[i].className = "";
		}
		b_olis[b_index].className = "current";
		b_lis[b_index].className ="tu-li";
   	}
   	//点击右键
   	right.onclick = function(){
   		b_index++;
   		if(b_index>2){
   			b_index = 0;
   		}
   		for (var i = 0;i<b_lis.length;i++) {
			b_lis[i].className = "";
			b_olis[i].className = "";
		}
   		b_flag = false;
		b_olis[b_index].className = "current";
		b_lis[b_index].className ="tu-li";
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
