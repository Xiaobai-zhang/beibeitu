window.onload = function(){
	var mrcd = document.querySelector(".mrcd");
	var mr_l = mrcd.querySelector('.mr-l');
	var mr_right = mrcd.querySelector('.mr-right');
	var mr_lis = mr_l.querySelectorAll('li');
	var mr_uls = mr_right.querySelectorAll('ul');
	for(var i=0;i<mr_lis.length;i++){
		mr_lis[i].setAttribute("data-li-index",i);
		mr_lis[i].onmouseover = function(){
			var mr_index = this.getAttribute("data-li-index");
			for(var j=0;j<mr_lis.length;j++){
				mr_uls[j].className = "mr-content";
				mr_lis[j].className = "";
			}
			mr_uls[mr_index].className = "mr-content mr-content-current";
			this.className = "mrcd-l-curren";
		}
	}

}
