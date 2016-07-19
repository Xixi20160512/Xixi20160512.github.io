define('mod1',function(exports){
//私有方法
var css = function (obj, attr) {
	 if(obj.currentStyle){
			 return obj.currentStyle[attr];
		 }
	 else{
		 	return getComputedStyle(obj, false)[attr];
		 }
	}  
// 通过 exports 对外提供接口
exports.fade = function (obj,attr,target) {
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
	exports.act = function (obj, attr, target, fn) {
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
});
