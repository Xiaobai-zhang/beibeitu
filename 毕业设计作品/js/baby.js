window.onload = function(){
	var lis= document.querySelectorAll('.p-item');
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			this.querySelector('.wz').style.color = "red";
		}
		lis[i].onmouseleave = function(){
			this.querySelector('.wz').style.color = "#000";
		}
	}
	var box = document.querySelectorAll('.hz');
	for(var i = 0;i<box.length;i++){
		box[i].onmouseover = function(){
			for(var i = 0;i<box.length;i++){
				box[i].className = "box1";
			}
			this.className = "box";
		}
	}
	//banner
	var tu = document.querySelector('.tu');
	var ul = tu.querySelector('.wrap');
	var ol = tu.querySelector('ol');
	var index = 0;
	var kuang = tu.offsetWidth;
	var moveX;
	var last = ul.children[0].cloneNode(true);
	ul.appendChild(last);
	var lis = ul.querySelectorAll('li');
	var flag = true;
	// 创建圆点
	for(var i=0;i<lis.length-1;i++){
		var li = document.createElement('li');
		ol.appendChild(li);
	}
	ol.children[0].className = 'current';
	var olis = ol.querySelectorAll('li');
	tu.onmouseover = function(){
		clearInterval(time);
	}
	tu.onmouseout = function(){
		time = setInterval(function(){
		if(flag){
			flag = false;
			index++;
			if(index<lis.length){
				ul.style.transition = 'all 0.2s'
				ul.style.left = -kuang*index+'px';
			}
		}
	},2000);
	}
	var time = setInterval(function(){
		if(flag){
			flag = false;
			index++;
			if(index<lis.length){
				ul.style.transition = 'all 0.2s'
				ul.style.left = -kuang*index+'px';
			}
		}
	},2000);
	ul.addEventListener('transitionend',function(){
		flag = true;
		if(index>=lis.length-1){
			index = 0;
			ul.style.transition = 'none'
			ul.style.left = -kuang*index+'px';
		}
		for(var j=0;j<olis.length;j++){
			olis[j].classList.remove('current');
		}
		olis[index].classList.add('current');
	});
	//圆点点击事情
	for(var i=0;i<olis.length;i++){
		olis[i].setAttribute('index',i);
		olis[i].onclick = function(){
			var num = this.getAttribute('index');
			var step = -kuang*num;
			index = num;
			ul.style.transition = 'all 0.2s';
			ul.style.left = step+'px';
		}
	}
	//点击左键
	var left = tu.querySelector(".left");	
   	left.onclick = function(){
   		if(flag){
   			flag = false;
   			index--;
   			console.log(index);
   			if(index<0){
   				index = 2;
   			}
   		ul.style.transition = 'all 0.2s'
   		ul.style.left = -kuang*index+'px';
   		}
   	}
	var right = tu.querySelector(".right");	
   	right.onclick = function(){
   		if(flag){
   			flag = false;
   			index++;
   			ul.style.transition = 'all 0.2s'
   			ul.style.left = -kuang*index+'px';
   		}
   	}
}
