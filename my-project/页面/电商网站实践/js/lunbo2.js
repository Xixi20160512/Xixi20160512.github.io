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
			mod1.fade(imgs[i],'opacity',0)
		}
		mod1.fade(imgn,'opacity',100);
		nav();
	}
	//nav切换函数
	function nav(){
		for(var i = 0;i<3;i++){
			nav2s[i].className = "nav2";
		}
		nav2s[now].className += ' on2';
	}
})()
