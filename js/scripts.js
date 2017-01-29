function generateShape() {
	var radiusSize = Math.floor(Math.random() * 100);
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
	var posx = (Math.random() * (window.innerWidth - divsize)).toFixed();
    var posy = (Math.random() * (window.innerHeight - divsize)).toFixed();
    var text = '<input type="text" style="display:block; margin:auto; width:' + (divsize/4).toString() + 'px;" />';
	document.body.innerHTML += '<div class="shape" onclick="alertUser(this)" style="position:absolute;width:' + divsize.toString() + 'px;height:' + divsize.toString() + 'px;z-index:100;background:' + color + '; border-radius:' + radiusSize.toString() + 'px; left:' + posx.toString() + 'px; top:' + posy.toString() + 'px">' + text + '</div>';
}
function removeShapes() {
	var shapes = document.getElementsByClassName('shape');
	while(shapes.length > 0){
        shapes[0].parentNode.removeChild(shapes[0]);
    }
}
function alertUser(divObj) {
	console.log(divObj);
	var text = divObj.firstChild.value;
	console.log(text);
	alert("You have input " + text + ". The color is " + divObj.style.background);
}