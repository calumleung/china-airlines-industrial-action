// JavaScript Documentvar m = 0;
var n = 0;

function low() {
  var obj = document.getElementById("airplaneimg");
  m++;
  n++;

  obj.style.left = parseInt(obj.style.left) + 1 + "rem";
  obj.style.top = parseInt(obj.style.top) + 1 + "rem";
  // obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"

  if (m == 30 && n == 30) {
    m = 0;
    n = 0;
    timeStop();
    
  }
}

function lowStart() {
  t = setInterval("low()", 10);
  document.getElementById("airplaneimg").style.transform = "rotate(15deg)";
}

function timeStop() {
  clearInterval(t);
}

function high() {
  var obj = document.getElementById("airplaneimg");
  m++;
  n++;

obj.style.left = parseInt(obj.style.left) + 1 + "rem";
obj.style.top = parseInt(obj.style.top) - 1 + "rem";
// obj.innerHTML="(" + obj.style.left + "," + obj.style.top +")"
  if (m == 30 && n == 30) {
    m = 0;
    n = 0;
    timeStop();
  }
}

function highStart() {
  t = setInterval("high()", 10);
  document.getElementById("airplaneimg").style.transform = "rotate(-15deg)";
}

function timeStop() {
  clearInterval(t);
}

function q1e() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q1a").style.display = "none";
    document.getElementById("q1e").style.display = "block";
}

function q2() {
    document.getElementById("q1e").style.display = "none";
    document.getElementById("q2").style.display = "block";
    document.getElementById("q2a").style.display = "block";
}

function q2e() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q2a").style.display = "none";
    document.getElementById("q2e").style.display = "block";
}

function q3() {
    document.getElementById("q2e").style.display = "none";
    document.getElementById("q3").style.display = "block";
    document.getElementById("q3a").style.display = "block";
}

function q3e() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("q3a").style.display = "none";
    document.getElementById("q3e").style.display = "block";
}

function q4() {
    document.getElementById("q3e").style.display = "none";
    document.getElementById("q4").style.display = "block";
    document.getElementById("q4a").style.display = "block";
}

function q4e() {
    document.getElementById("q4").style.display = "none";
    document.getElementById("q4a").style.display = "none";
    document.getElementById("q4e").style.display = "block";
}

function q5() {
    document.getElementById("q4e").style.display = "none";
    document.getElementById("q5").style.display = "block";
    document.getElementById("q5a").style.display = "block";
}

function q5e() {
    document.getElementById("q5").style.display = "none";
    document.getElementById("q5a").style.display = "none";
    document.getElementById("q5e").style.display = "block";
}

function theend() {
    document.getElementById("q5e").style.display = "none";
      document.getElementById("end").style.display = "block";
}
