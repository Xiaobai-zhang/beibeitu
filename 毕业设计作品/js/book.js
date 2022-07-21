window.onload = function(){
	var banner = document.querySelector('.banner');
	var nav = banner.querySelectorAll('.b-nav');
	var boxs = banner.querySelectorAll('.b-box');
	var box_nav = banner.querySelectorAll('.box-nav');
	var fl_title = document.querySelector('.fl-title');
	var index = 0;
	for(var i = 0;i<nav.length;i++){
		nav[i].onmouseover = function(){
			index = this.getAttribute("data-index");
			for(var i = 0;i<nav.length;i++){
				var img = nav[i].querySelectorAll("img");
				boxs[i].classList.remove("xx");
				img[1].style.display = "none";
			}
			boxs[index].className = "b-box xx";
			var tu = nav[index].querySelectorAll('img');
			tu[1].style.display = "inline-block";
		}
	}
	var lis = new Array();
	for(var i = 0;i<box_nav.length;i++){
		 lis[i] = box_nav[i].querySelectorAll('li');
		 for(var j = 0;j<lis[i].length;j++){
		 	lis[i][j].onmouseover = function(){
		 		var num = this.getAttribute('data-num');
				var tu = boxs[index].querySelectorAll("img");
				for(var k = 0;k<tu.length;k++){
					tu[k].classList.remove("tu-xx");
					lis[index][k].className = "";
				}
				tu[num].className = "tu-xx";
				this.className = "box-current";
		 	}	
		 }
	}
	//新书预售
	var xsys = document.querySelector('.xsys');
	var yd = xsys.querySelector('.yd');
	var xs_lis = yd.querySelectorAll('li');
	var xs_items = xsys.querySelectorAll('.xs-item');
	for(var i=0;i<xs_lis.length;i++){
		xs_lis[i].onmouseover = function(){
			var li_num = this.getAttribute("data-li-num");
			for(var j = 0;j<xs_lis.length;j++){
				xs_lis[j].classList.remove("li-current");
				xs_items[j].classList.remove("item-current");
			}
			xs_lis[li_num].className = "li-current";
			xs_items[li_num].className = "xs-item item-current";
		}
	}
	// 分类
	var fl_lis = fl_title.querySelectorAll('li');
	var flll = document.querySelector('.flll');
	var fl_content = flll.querySelectorAll('.fl-content'); 
	for(var i=0;i<fl_lis.length;i++){
		fl_lis[i].onmouseover = function(){
			var fl_index = this.getAttribute("data-fl-index");
			for(var j=0;j<fl_lis.length;j++){
					fl_lis[j].classList.remove("li_on");
					fl_content[j].className = "fl-content";
			}
			this.className = "li_on";
			fl_content[fl_index].className = "fl-content f-xx";
			console.log(fl_index);
		}
	}
	//图书畅销榜
	var tscxb = document.querySelector('.tscxb');
	var ts_lis = tscxb.querySelectorAll('li');
	for(var i=0;i<ts_lis.length;i++){
		ts_lis[i].onmouseover = function(){
			for(var j=0;j<ts_lis.length;j++){
				ts_lis[j].className = "pt";
			}
				this.className = "tu";
		}
	}
	//r-nav
	var r_nav = document.querySelector('.r-nav');
	var r_ul = document.querySelector(".r-wz").querySelectorAll("ul");
	var r_lis = r_nav.querySelectorAll('li');
	for(var i=0;i<r_lis.length;i++){
		r_lis[i].setAttribute("data-r-num",i);
		r_lis[i].onmouseover = function(){
			var r_num = this.getAttribute("data-r-num");
			for(var j = 0;j<r_lis.length;j++){
				r_ul[j].className = "";
			}
			r_ul[r_num].className = "ul-current";
		}
	}
}
