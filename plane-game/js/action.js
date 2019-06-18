console.log('更新2')


function phone(){
if(window.screen.width < 576)
{
  document.getElementById("airplaneimg").style.top = "100px";
  document.getElementById("airplaneimg").style.left = "100px";
  document.getElementById("explosionimg").style.top = "150px";
  document.getElementById("explosionimg").style.left = "100px";
}
}

var n = 0;
var score = 10000;


function lowscore() {
  score=score+200;
  document.getElementById("score").innerHTML=score;
    document.getElementById("airplaneimg").style.transform = "rotate(-15deg)";
if(score==11000){
    document.getElementById("m1").style.display = "block";
}
else if(score>=10800){
    document.getElementById("m2").style.display = "block";
}
else if(score>=10600){
    document.getElementById("m3").style.display = "block";
}
else if(score>=10400){
    document.getElementById("m4").style.display = "block";
}
else if(score>=10200){
    document.getElementById("m5").style.display = "block";
}
else if(score>=10000){
    document.getElementById("m6").style.display = "block";
}
else if(score>=8000){
    document.getElementById("m7").style.display = "block";
}
else if(score>=6000){
    document.getElementById("m8").style.display = "block";
}
else if(score>=4000){
    document.getElementById("m9").style.display = "block";
}
else if(score>=2000){
    document.getElementById("m10").style.display = "block";
}
else {
    document.getElementById("m11").style.display = "block";
}
}


function highscore() {
  score=score-2000;
  document.getElementById("score").innerHTML=score;
  document.getElementById("airplaneimg").style.transform = "rotate(15deg)";
  if (score===0){
    if(window.screen.width < 576){
  document.getElementById("explosionimg").style.display = "block";
    }
    else{
  document.getElementById("runway").style.display = "block";
  document.getElementById("explosionimg").style.display = "block";
      }
  }
    if(score==11000){
    document.getElementById("m1").style.display = "block";
}
else if(score>=10800){
    document.getElementById("m2").style.display = "block";
}
else if(score>=10600){
    document.getElementById("m3").style.display = "block";
}
else if(score>=10400){
    document.getElementById("m4").style.display = "block";
}
else if(score>=10200){
    document.getElementById("m5").style.display = "block";
}
else if(score>=10000){
    document.getElementById("m6").style.display = "block";
}
else if(score>=8000){
    document.getElementById("m7").style.display = "block";
}
else if(score>=6000){
    document.getElementById("m8").style.display = "block";
}
else if(score>=4000){
    document.getElementById("m9").style.display = "block";
}
else if(score>=2000){
    document.getElementById("m10").style.display = "block";
}
else {
    document.getElementById("m11").style.display = "block";
}
}

function low() {
  var obj = document.getElementById("airplaneimg");
  n++;

  obj.style.top = parseInt(obj.style.top) - 1 + "px";
  // obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"

  if(window.screen.width < 576){
    if (n === 10) {
    n = 0;
    timeStop();
  }
  }
  else{
  if (n === 30) {
    n = 0;
    timeStop();
  }
  }
}

function lowStart() {
  t = setInterval("low()", 10);
//   document.getElementById("airplaneimg").style.transform = "rotate(15deg)";
}

function timeStop() {
  clearInterval(t);
}

function high() {
  var obj = document.getElementById("airplaneimg");
  n++;

obj.style.top = parseInt(obj.style.top) + 1 + "px";
// obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"
  if(window.screen.width < 576){
    if (n === 10) {
    n = 0;
    timeStop();
  }
  }
  else{
  if (n === 30) {
    n = 0;
    timeStop();
  }
  }
}

function highStart() {
  t = setInterval("high()", 10);
//   document.getElementById("airplaneimg").style.transform = "rotate(-15deg)";
}

function timeStop() {
  clearInterval(t);
}

function q1e() {
    document.getElementById("qqq").style.display = "none";
    document.getElementById("q1").style.display = "none";
    document.getElementById("q1a").style.display = "none";
    document.getElementById("q1e").style.display = "block";
}

function q2() {
    document.getElementById("qqq").style.display = "block";
    document.getElementById("q1e").style.display = "none";
    document.getElementById("q2").style.display = "block";
    document.getElementById("q2a").style.display = "block";
}

function q2e() {
    document.getElementById("qqq").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q2a").style.display = "none";
    document.getElementById("q2e").style.display = "block";
}

function q3() {
    document.getElementById("qqq").style.display = "block";
    document.getElementById("q2e").style.display = "none";
    document.getElementById("q3").style.display = "block";
    document.getElementById("q3a").style.display = "block";
}

function q3e() {
    document.getElementById("qqq").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q3a").style.display = "none";
    document.getElementById("q3e").style.display = "block";
}

function q4() {
    document.getElementById("qqq").style.display = "block";
    document.getElementById("q3e").style.display = "none";
    document.getElementById("q4").style.display = "block";
    document.getElementById("q4a").style.display = "block";
}

function q4e() {
    document.getElementById("qqq").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q4a").style.display = "none";
    document.getElementById("q4e").style.display = "block";
}

function q5() {
    document.getElementById("qqq").style.display = "block";
    document.getElementById("q4e").style.display = "none";
    document.getElementById("q5").style.display = "block";
    document.getElementById("q5a").style.display = "block";
}

function q5e() {
    document.getElementById("qqq").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("q5a").style.display = "none";
    document.getElementById("q5e").style.display = "block";
}

function theend() {
    document.getElementById("q5e").style.display = "none";
    document.getElementById("end").style.display = "block";
    document.getElementById("again").style.display = "block";
}


function again(){
  if(window.screen.width < 576){
      document.getElementById("airplaneimg").style.top = "100px";
   document.getElementById("airplaneimg").style.left = "100px";
  }
  else{
      document.getElementById("airplaneimg").style.top = "240px";
   document.getElementById("airplaneimg").style.left = "64px";
  }
     document.getElementById("cloud").style.top = "0px";
    document.getElementById("airplaneimg").style.transform = "rotate(0deg)";
  document.getElementById("qqq").style.display = "block";
    document.getElementById("q1").style.display = "block";
    document.getElementById("q1a").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("again").style.display = "none";
    document.getElementById("explosionimg").style.display = "none";
    document.getElementById("runway").style.display = "none";
    score=10000;
    document.getElementById("score").innerHTML=score;
//     score.innerHTML="(" + score + ")";
}
