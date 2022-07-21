window.onload = function(){
	var nnzq = document.querySelector('.nnzq');
	var nn_tab = document.querySelector('.nn-tab');
	var nn_li = nn_tab.querySelectorAll('li');
	var nn_content = nnzq.querySelectorAll(".nn-content");
	var index;
	for (var i=0;i<nn_li.length;i++) {
		nn_li[i].setAttribute("data-tab-index",i);
		nn_li[i].onmouseover = function(){
			index = this.getAttribute("data-tab-index");
			for (var j=0;j<nn_li.length;j++) {
				nn_li[j].classList.remove("tab-li");
				nn_li[j].querySelector('.tab-item').querySelector('span').classList.remove("tab-current");
				nn_content[j].className = "nn-content";
			}
			this.classList.add("tab-li");
			this.querySelector('.tab-item').querySelector('span').classList.add("tab-current");
			nn_content[index].classList.add("nn");
		}
	}
}
