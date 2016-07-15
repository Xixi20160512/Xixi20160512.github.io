(function () {
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
	function auto(timer) {
		if(now < len - 1){
		    now++;
		} else {
		    now = 0;
		}
		scroll();
		timer && (timer = setInterval(auto,3000));
	}
	for (var i = li.length - 1; i >= 0; i--) {
		li[i].index = i;
		li[i].onclick = function(){
			now = this.index;
			clearInterval(timer1);
			auto(timer1);
		}
	};
	//移入移出效果
	// box.onmouseover = function () {
	// 	clearInterval(timer1)
	// }
	// box.onmouseout = function () {
	// 	timer1 = setInterval(auto,3000);
	// }
	function scroll(){
	    act(imgs, 'left', -img_w * (now));
	    tab();
	}
	function act(obj, attr, target, fn){
	    obj.timer && clearInterval(obj.timer);
	    obj.timer = setInterval(function(){
	        var stop = true;
	        var cur = parseInt(css(obj, attr));
	        var speed = (target - cur) / 8;
	        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
	        if(cur != target){
	            stop = false;
	            obj.style[attr] = cur + speed + 'px';
	        }
	        if(stop){
	            clearInterval(obj.timer);
	            obj.timer = null;
	            fn && fn();
	        }
	    }, 30);
	}
	function tab(){
		var nbw = now -1;
		if (nbw >= 0) {
			li[nbw].className = 'off';
		} else {
			li[2].className = 'off';
		}
		li[now].className = 'on';
	}
	function css(obj, attr){
	    if(obj.currentStyle){
	        return obj.currentStyle[attr];
	    } else {
	        return getComputedStyle(obj, false)[attr];
	    }
	}
})()
