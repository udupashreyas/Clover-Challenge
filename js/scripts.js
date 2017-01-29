function generateShape() {
	var radiusSize = Math.floor(Math.random() * 100);
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
	var posx = (Math.random() * (window.innerWidth - divsize)).toFixed();
    var posy = (Math.random() * (window.innerHeight - divsize)).toFixed();
	document.body.innerHTML += '<div style="position:absolute;width:' + divsize.toString() + 'px;height:' + divsize.toString() + 'px;opacity:0.3;z-index:100;background:' + color + '; border-radius:' + radiusSize.toString() + 'px; left:' + posx.toString() + 'px; top:' + posy.toString() + 'px"></div>';
	//document.getElementsByClassName('shape')[0].style.borderRadius= num+'px';
}