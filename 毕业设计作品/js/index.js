window.onload = function(){
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
	//鼠标经过品牌图片，品牌名字出现
	var brand =document.querySelectorAll('.left-brand');	
	var brand1 = brand[0].querySelectorAll('li');
	var brand2 = brand[1].querySelectorAll('li');
	var brand3 = brand[2].querySelectorAll('li');
	var c2_brand = document.querySelectorAll('.c2-brand');
	var c2_brand1 = c2_brand[0].querySelectorAll('li');
	var c2_brand2 = c2_brand[1].querySelectorAll('li');
	aa(brand1);
	aa(brand2);
	aa(brand3);
	aa(c2_brand1);
	aa(c2_brand2);
	function aa(name){
		for (var i=0;i<name.length;i++) {
		name[i].onmouseover = function(){
			this.querySelector("img").style.opacity = 0;
			this.querySelector(".cover").style.opacity = 1;
			console.log(123);
		}
		name[i].onmouseout = function(){
			this.querySelector("img").style.opacity = 1;
			this.querySelector(".cover").style.opacity = 0;
		}
	}
	}
}
