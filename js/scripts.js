function generateShape() {
	var radiusSize = Math.floor(Math.random() * 100);
	var divsize = ((Math.random()*100) + 50).toFixed();
	var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
	var posx = (Math.random() * (window.innerWidth - divsize)).toFixed();
    var posy = (Math.random() * (window.innerHeight - divsize)).toFixed();
    var text = '<input type="text" style="display:block; margin:auto; width:' + (divsize/4).toString() + 'px;" />';
	document.body.innerHTML += '<div class="shape" onclick="alertUser(this)" style="position:absolute;width:' + divsize.toString() + 'px;height:' + divsize.toString() + 'px;z-index:100;background:' + color + '; border-radius:' + radiusSize.toString() + 'px; left:' + posx.toString() + 'px; top:' + posy.toString() + 'px">' + text + '</div>';
	//setTimeout(moveShape,10);
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

var speed = Math.random();
var direction = 1;
var interval = setInterval(moveShape,10);
function moveShape(divObj) {
	var i = 0;
	var shapes = document.getElementsByClassName('shape');
	for(i = 0; i < shapes.length; i++){
        var boxLeftPos = shapes[i].offsetLeft,
            boxRightPos = boxLeftPos + shapes[i].offsetWidth;
        if (boxRightPos > document.body.offsetWidth) {
            direction = -1;
        }
        if (boxLeftPos < 0) {
            direction = 1;
        }
        shapes[i].style.left = (boxLeftPos + speed * direction) + 'px';
    }
}