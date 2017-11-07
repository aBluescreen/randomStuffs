function newNum() {
  var randomNum = Math.floor(Math.random()*100);
  document.getElementById('numDisplay').innerHTML = randomNum;
}

function newColor() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
