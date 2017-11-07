function newNum() {
  var randomNum = Math.floor(Math.random()*100);
  document.getElementById('numDisplay').innerHTML = randomNum;
}

function newColor() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext("2d");
  var colorVals = '0123456789ABCDEF'.split('');
  var finColor = "#";
  for (var i = 0; i < 6; i++) {
    finColor += colorVals[Math.floor(Math.random() * 16)]
  }
  ctx.fillStyle = finColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function refresh() {
  location.reload();
}
