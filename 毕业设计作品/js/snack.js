window.onload = function(){
	var hot_title = document.querySelector('.hot-title');
	var hot_li = hot_title.querySelectorAll('li');
	var hot_content = document.querySelectorAll('.hot-content');
	for (var i=0;i<hot_li.length;i++) {
		hot_li[i].setAttribute("data-index",i);
		hot_li[i].onmouseover = function(){
			var hot_index = this.getAttribute("data-index");
			for (var j=0;j<hot_li.length;j++) {
				hot_li[j].className = "";
				hot_content[j].className = "hot-content";
			}
			hot_content[hot_index].className = "hot-content c1"
			this.className = "hot-li-current";
		}
	}
}
