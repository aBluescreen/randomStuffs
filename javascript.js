function newNum() {
  var randomNum = Math.floor(Math.random()*100);
  document.getElementById('numDisplay').innerHTML = randomNum;
}

function newColor() {
  var canvas = document.getElementById('color');
  var ctx = canvas.getContext("2d");
  var colorVals = '0123456789ABCDEF'.split('');
  var finColor = "#";
  for (var i = 0; i < 6; i++) {
    finColor += colorVals[Math.floor(Math.random() * 16)]
  }
  ctx.fillStyle = finColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

var ball;

function startAni() {
  ball = new component(30, 30, "red", 100, 100);
  aniArea.start();
}

function ani() {
  var canvas = document.getElementById('animation');
  var ctx = canvas.getContext("2d");
}
