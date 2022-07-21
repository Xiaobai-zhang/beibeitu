window.onload = function(){
	var li = document.querySelector(".ltjx").querySelectorAll("li");
	for(var i=0;i<li.length;i++){
		li[i].onmouseover = function(){
			this.style.backgroundColor = "#ededed";
		}
		li[i].onmouseleave = function(){
			this.style.backgroundColor = "#fff";
		}
	}
}
