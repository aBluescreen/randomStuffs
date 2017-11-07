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

function puns() {
  var puns = ["A lizard walks into a bar pushing a baby in a stroller. What's your kid's name? asks the bartender. Tiny, says the lizard. Because he’s my newt.”,
              "Why not go out on a limb? Isn’t that where all the fruit is?",
              "Someone stole my toilet and the police have nothing to go on.",
              "Having sex in an elevator is wrong on so many levels.",
              "Last time I got caught stealing a calendar I got 12 months.",
              "A friend of mine tried to annoy me with bird puns, but I soon realized that toucan play at that game.",
              "Did you hear about the guy who got hit in the head with a can of soda? He was lucky it was a soft drink.",
              "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
              "I saw an ad for burial plots, and thought to myself this is the last thing I need.",
              "I told my mom I was going to make a bike out of spaghetti, you should have seen her face when I rode straight pasta.",
              "This joke was right on time! You timed that perfectly! Stop making puns or I'll clock you. With your arm? Eh Imma wrist it",
              "Becoming a vegetarian is a huge missed steak."]
  document.getElementById('punDisplay').innerHTML = puns[Math.floor(Math.random() * puns.length)];
}
