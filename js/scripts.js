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

function moveShape(divObj) {
	var xvelocity = Math.random();
	var yvelocity = Math.random();
	var shapes = document.getElementsByClassName('shape');
	while(shapes.length > 0){
		origx = shapes[0].style.left;
        shapes[0].style.left = origx + xvelocity + "px";
        origy = shapes[0].style.top;
        shapes[0].style.top = origy + yvelocity + "px";
    }
}

// var xvelocity = Math.random().toFixed();
// var yvelocity = Math.random().toFixed();
// function moveShape() {
// 	var shapes = document.getElementsByClassName('shape');
// 	while(shapes.length > 0){
// 		origx = shapes[0].style.left;
// 		origx = origx.substring(0,origx.length-2);
// 		console.log(origx);
// 		console.log(xvelocity);
//         shapes[0].style.left = (parseInt(origx) + xvelocity).toString() + "px";
//         console.log(shapes[0].style.left);
//         origy = shapes[0].style.top;
//         origy = origy.substring(0,origy.length-2);
//         shapes[0].style.top = (parseInt(origy) + yvelocity).toString() + "px";
//     }
//     setTimeout(moveShape, 10);
// }