var time_block = document.querySelector('.time-block');
var t_lis = time_block.querySelectorAll("li");
var h = document.querySelector(".hour");
var f = document.querySelector(".fenzhong");
var miao = document.querySelector(".miao");
//设置固定时间
function formatTime(n){
    var data = new Date();
    var year = data.getFullYear();
    var yue = data.getMonth()+1; 
    var tian = data.getDate();
    if(yue<10){
        yue='0'+yue;
    }
    if(tian<10){
        tian='0'+tian;
    }
    if(n<10){
        n='0'+n;
    }
    var t = year+'-'+yue+'-'+tian+'\t'+n+":00:00";
    var data1 = new Date(t);
    return data1.getTime();
}
function jisuan(n1,n2){
    var num = n2-n1;
    var h1 = Math.floor(num/1000/60/60%24);
    var f1 = Math.ceil(num/1000/60%60);
   	var m1 = Math.ceil(num/1000%60);
   	if(h1<10){
        h1='0'+h1;
    }
    if(f1<10){
        f1='0'+f1;
    }
    if(m1<10){
        m1='0'+m1;
    }
    h.innerHTML = h1;
    f.innerHTML = f1;
    miao.innerHTML = m1;
}
var time_content = document.querySelectorAll('.time-content');
var time_lis = document.querySelector('.time-block').querySelectorAll('li');
function current(index){
	for (var i = 0;i<t_lis.length;i++) {
    	t_lis[i].className = "";   	 
       }
    t_lis[index].className = "time-current";
}
for(var i=0;i<time_lis.length;i++){
	time_lis[i].setAttribute("data-index",i);
	time_lis[i].onmousemove = function(){
		clearInterval(time);
		var index = this.getAttribute("data-index");
		for (var j = 0;j<t_lis.length;j++) {
    		time_content[j].className = "time-content";   	 
     	}
    	time_content[index].className ="time-content t-c1";
	}
	time_lis[i].onmouseout = function(){
		time = setInterval(function(){
			get()
		},1000);
	}
}
function aa(index){
	for (var j = 0;j<t_lis.length;j++) {
    		time_content[j].className = "time-content";   	 
     	}
    time_content[index].className ="time-content t-c1";
}
function get(){
	var data = new Date();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var second = data.getSeconds();
    if(hour>=20){
       var miao = formatTime(24);
       jisuan(data.getTime(),miao);
		current(4);
		aa(4);
    }else if(hour>=16){
       var miao = formatTime(20);
       jisuan(data.getTime(),miao);
	   current(3);
	   aa(3);
    }else if(hour>=12){
        var miao = formatTime(16);
        jisuan(data.getTime(),miao);
	    current(2);
		aa(2);
    }else if(hour>=8){
        var miao = formatTime(12);
        jisuan(data.getTime(),miao);
	    current(1);
		aa(1);
    }else if(hour>=0){
    	var miao = formatTime(8);
        jisuan(data.getTime(),miao);
        current(0);
        aa(0)
    }
}
var time = setInterval(function(){
	get()
},1000);
get();
