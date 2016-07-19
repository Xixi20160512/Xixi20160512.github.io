window.onload = define('lunbo1',function (require) {
		var mod1 = require('mod1');
		console.log(mod1.act);
		var box = document.getElementById('lunbo1');
		var ul = box.getElementsByTagName('ul')[0];
		var li = ul.getElementsByTagName('li');
		var imgs = box.getElementsByTagName('div')[0];
		var img = imgs.getElementsByTagName('img');
		var len = img.length
		var img_w = img[0].offsetWidth  /* 获取单张图片的宽度*/
		var timer1 = null;
		var now = 0;
		//定时切换
		timer1 = setInterval(auto,3000);  /*setInterval不支持函数带有参数？*/
		//nav按钮的点击事件
		function auto() {
			if(now < len - 1){
			    now++;
			} else {
			    now = 0;
			}
			scroll();
		}
		for (var i = li.length - 1; i >= 0; i--) {
			li[i].index = i;
			li[i].onclick = function(){
				clearInterval(timer1);
				now = this.index;
				console.log(now);
				scroll();
				timer1 = setInterval(auto,3000);
			}
		};
		// 移入移出效果
		imgs.onmouseover = function () {
			clearInterval(timer1)
		}
		imgs.onmouseout = function () {
			timer1 = setInterval(auto,3000);
		}
		//整个图片和nav切换的函数，不是必要的
		function scroll(){
		    mod1.act(imgs, 'left', -img_w * (now));
		    tab();
		}
		//nav切换
		function tab(){
			for(i = li.length-1;i >= 0;i--){
				li[i].className = 'off';
			}
			li[now].className = 'on';
		}
	}
//轮播2
(function () {
	var box = document.getElementById('lunbo2');
	var imgs = box.getElementsByTagName('img');
	var nav_box = box.getElementsByTagName('div')[0];
	var nav2s = nav_box.getElementsByTagName('div');
	var timer1 = null;
	var now = 0;
	timer1 = setInterval(auto,4000);
	function auto() {
		if (now < 2) {
			now++;
		} else {
			now = 0;
		}
		var imgn = imgs[now];
		console.log(imgn)
		for(var i = 0;i < 3;i++){
			imgs[i].index = i;
			fade(imgs[i],'opacity',0)
		}
		fade(imgn,'opacity',100);
		nav();
	}
	//nav切换函数
	function nav(){
		for(var i = 0;i<3;i++){
			nav2s[i].className = "nav2";
		}
		nav2s[now].className += ' on2';
	}
	//fade函数，提供对象和目标，实现透明度的渐变
	function fade(obj,attr,target) {
		console.log(1);
		// var obj = imgs[now];
		obj.timer && clearInterval(obj.timer);		
		obj.timer = setInterval(function () {
			var stop = true;
			var cur = css(obj,attr)*100;
			var speed = (target - cur)/6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur !== target){
				cur += speed;	
				obj.style.opacity = cur/100;
				stop = false;
			}
			if(stop){
				clearInterval(obj.timer);
				obj.timer = null;
			}	
			},30)
	}
})()
	) 

