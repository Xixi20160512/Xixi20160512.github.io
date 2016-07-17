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
		// console.log(imgs[now])
		fade("opacity");
	}
	function fade(attr) {
		console.log(imgs[now]);
		var obj = imgs[now];
		var pre = now-1;
		if (pre < 0) {
			imgs[2].style.display = "none";
		} else {
			imgs[pre].style.display = "none";
			obj.timer = setInterval(function () {
				// var cur = css(obj,attr);
				var speed = (1 - 0)/6;
				speed = Math.ceil(speed);
				imgs[now].style.display = "inline";	
				},30)
		}
			
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
