window.onload = function(){
	//report
	var sy_cover = document.querySelector(".sy-cover");
	var kuang = document.querySelector('.report').querySelector(".kuang");
	var ul = kuang.querySelector('.wrap');
	var index = 0;
	var kuang = 250;
	var flag = true;
	var moveX;
	var lis = ul.querySelectorAll('li');
	sy_cover.onclick = function(){
		document.querySelector(".sysp").classList.remove("cover");
		this.style.display = "none";
	}
	ul.addEventListener('transitionend',function(){
		flag = true;
		if(index>=8){
			index = 0;
			ul.style.transition = 'none'
			ul.style.left = -kuang*index+'px';
		}
	});
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
	ul.onmousemove = function(){
		clearInterval(time);
	}
	ul.onmouseleave = function(){
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
	//report
	document.querySelector('.report').querySelector(".a-left").onclick = function(){
		index--;
		if(index<=0){
			index = 8;
		}
		ul.style.transition = 'none'
		ul.style.left = -kuang*index+'px';
	}
	document.querySelector('.report').querySelector(".a-left").onmousemove = function(){
		clearInterval(time);
	}
	document.querySelector('.report').querySelector(".a-left").onmouseleave = function(){
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
	document.querySelector('.report').querySelector(".a-right").onclick = function(){
		index++;
		if(index>8){
			index = 0 ;
		}
		ul.style.transition = 'none'
		ul.style.left = -kuang*index+'px';
	}
	document.querySelector('.report').querySelector(".a-right").onmousemove = function(){
		clearInterval(time);
	}
	document.querySelector('.report').querySelector(".a-right").onmouseleave = function(){
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
	//hy
	var hy = document.querySelector(".hy");
	var kuang2 = hy.querySelector('.kuang');
	var hy_ul = kuang2.querySelector('.wrap');
	var index2 = 0;
	var kuang2 = 123;
	var flag2 = true;
	var moveX;
	var hy_lis = hy_ul.querySelectorAll('li');
	hy_ul.addEventListener('transitionend',function(){
		flag2 = true;
		if(index2>=16){
			index2 = 0;
			hy_ul.style.transition = 'none'
			hy_ul.style.left = -kuang2*index2+'px';
		}
	});
	setTimeout(function(){
		var time2 = setInterval(function(){
		if(flag2){
			flag2 = false;
			index2++;
			if(index2<hy_lis.length){
				hy_ul.style.transition = 'all 0.2s'
				hy_ul.style.left = -kuang2*index2+'px';
			}
		}
	},2000);
	},1500)
	hy_ul.onmousemove = function(){
		clearInterval(time2);
	}
	hy_ul.onmouseleave = function(){
		time2 = setInterval(function(){
			if(flag2){
				flag2 = false;
				index2++;
				if(index2<hy_lis.length){
					hy_ul.style.transition = 'all 0.2s'
					hy_ul.style.left = -kuang2*index2+'px';
				}
			}
		},2000);
	}
	hy.querySelector(".a-left").onclick = function(){
		index2--;
		if(index2<=0){
			index2 = 16;
		}
		hy_ul.style.transition = 'none'
		hy_ul.style.left = -kuang2*index2+'px';
	}
	hy.querySelector(".a-left").onmousemove = function(){
		clearInterval(time2);
	}
	hy.querySelector(".a-left").onmouseleave = function(){
		time2 = setInterval(function(){
			if(flag2){
				flag2 = false;
				index2++;
				if(index2<hy_lis.length){
					hy_ul.style.transition = 'all 0.2s'
					hy_ul.style.left = -kuang2*index2+'px';
				}
			}
		},2000);
	}
	hy.querySelector(".a-right").onclick = function(){
		console.log(123);
		index2++;
		if(index2>16){
			index2 = 0 ;
		}
		hy_ul.style.transition = 'none'
		hy_ul.style.left = -kuang2*index2+'px';
	}
	hy.querySelector(".a-right").onmousemove = function(){
		clearInterval(time2);
		console.log(456);
	}
	hy.querySelector(".a-right").onmouseleave = function(){
		time2 = setInterval(function(){
			if(flag2){
				flag2 = false;
				index2++;
				if(index2<hy_lis.length){
					hy.style.transition = 'all 0.2s'
					hy.style.left = -kuang*index+'px';
				}
			}
		},2000);
	}
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
			if(b_index>4){
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
   		if(b_index>4){
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
}
