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
	    act(imgs, 'left', -img_w * (now));
	    tab();
	}
	//图片切换函数
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
	//nav切换
	function tab(){
		for(i = li.length-1;i >= 0;i--){
			li[i].className = 'off';
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
