function newNum() {
  var randomNum = Math.floor(Math.random()*100);
  document.getElementById('numDisplay').innerHTML = randomNum;
}

function newColor() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var colorVals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  var randColor = Math.floor(Math.random()*colorVals.length);
  ctx.fillStyle = "#"+ new colorVals[randColor] + new colorVals[randColor] + new colorVals[randColor] + new colorVals[randColor] + new colorVals[randColor] + new colorVals[randColor];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
