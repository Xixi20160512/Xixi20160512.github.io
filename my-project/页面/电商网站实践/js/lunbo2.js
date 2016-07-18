(function () {
	var box = document.getElementById('lunbo2')
	var imgs = box.getElementsByTagName('img')
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
        function css(obj, attr){
		 if(obj.currentStyle){
		 	 return obj.currentStyle[attr];
			 }
		 else{
		  	return getComputedStyle(obj, false)[attr];
		  	console.log(1);
		 }
		}
})()
