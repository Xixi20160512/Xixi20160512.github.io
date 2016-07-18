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
	) 
