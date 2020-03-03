var catWavePic = document.getElementById("catWavePic"); var catLaserPic = document.getElementById("catLaserPic"); var catShakePic = document.getElementById("catShakePic"); var catKeysPic = document.getElementById("catKeysPic");
var displayer = document.getElementById("displayer");
var greenBut = document.getElementById("green"); var blueBut = document.getElementById("blue"); var redBut = document.getElementById("red"); var blackBut = document.getElementById("black");
var redFilter = document.getElementById("redFilter"); var blueFilter = document.getElementById("blueFilter"); var greenFilter = document.getElementById("greenFilter"); var blackFilter = document.getElementById("blackFilter");
var redOn = false; var greenOn = false; var blueOn = false; var blackOn = false;

catWavePic.onclick = function() {
  displayer.src = "catWave.gif";
}
catLaserPic.onclick = function() {
  displayer.src = "catLaser.gif";
}
catShakePic.onclick = function() {
  displayer.src = "catShake.gif";
}
catKeysPic.onclick = function() {
  displayer.src = "catKeys.gif";
}

greenBut.onclick = function() {
  if (!greenOn) {
    greenFilter.style["visibility"] = "visible";
    greenOn = true;
  }
  else {
    greenFilter.style["visibility"] = "hidden";
    greenOn = false;
  }
}
blueBut.onclick = function() {
  if (!blueOn) {
    blueFilter.style["visibility"] = "visible"
    blueOn = true;
  }
  else {
    blueFilter.style["visibility"] = "hidden";
    blueOn = false;
  }

}
redBut.onclick = function() {
  if (!redOn) {
    redFilter.style["visibility"] = "visible";
    redOn = true;
  }
  else {
    redFilter.style["visibility"] = "hidden";
    redOn = false;
  }
}
blackBut.onclick = function() {
  if (!blackOn) {
    blackFilter.style["visibility"] = "visible";
    blackOn = true;
  }
  else {
    blackFilter.style["visibility"] = "hidden";
    blackOn = false;
  }
}
