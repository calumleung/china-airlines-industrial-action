// JavaScript Document


function join(){
  document.getElementById("chatbox_start").style.display = "none";
  document.getElementById("chatbox_footer0").style.display = "none";
  document.getElementById("chatbox_footer1").style.display = "block";
} 


function add1() {
  document.getElementById("chat1").style.margin = "0%";
  document.getElementById("chat1").style.display = "block";
  document.getElementById("chatbox_word1").style.display = "none";
  var items = document.querySelectorAll(".chatbox_bubble_container1");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      document.getElementById("chatbox_footer1").style.display = "none";
      document.getElementById("chatbox_footer2").style.display = "block";
      clearInterval(timeId);
    }
  }, 500);
}

function add2() {
  document.getElementById("chat2").style.margin = "0%";
  document.getElementById("chat2").style.display = "block";
  document.getElementById("chatbox_word2").style.display = "none";
  var items = document.querySelectorAll(".chatbox_bubble_container2");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      document.getElementById("chatbox_footer2").style.display = "none";
      document.getElementById("chatbox_footer3").style.display = "block";
      clearInterval(timeId);
    }
  }, 500);
}

function add3() {
  document.getElementById("chat3").style.marginRight = "0%";
  document.getElementById("chat3").style.display = "block";
  document.getElementById("chatbox_word3").style.display = "none";
  var items = document.querySelectorAll(".chatbox_bubble_container3");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      document.getElementById("chatbox_footer3").style.display = "none";
      document.getElementById("chatbox_footer4").style.display = "block";
      if(window.screen.width < 576){
        document.getElementById("chatbox_word41").style.display = "block";
      }
      else{
        document.getElementById("chatbox_word41").style.display = "none";
        document.getElementById("chatbox_word4").style.display = "block";
      }
      clearInterval(timeId);
    }
  }, 500);
}

function add4() {
  document.getElementById("chat4").style.marginRight = "0%";
  document.getElementById("chat4").style.display = "block";
  if(window.screen.width < 576){
    document.getElementById("chatbox_word41").style.display = "none";
  }
  else{
    document.getElementById("chatbox_word4").style.display = "none";
  }
  
  var items = document.querySelectorAll(".chatbox_bubble_container4");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      document.getElementById("chatbox_footer4").style.display = "none";
      document.getElementById("chatbox_footer5").style.display = "block";
      if(window.screen.width < 576){
        document.getElementById("chatbox_word51").style.display = "block";
      }
      else{
        document.getElementById("chatbox_word51").style.display = "none";
        document.getElementById("chatbox_word5").style.display = "block";
      }
      clearInterval(timeId);
    }
  }, 500);
}

function add5() {
  document.getElementById("chat5").style.marginRight = "0%";
  document.getElementById("chat5").style.display = "block";
  if(window.screen.width < 576){
    document.getElementById("chatbox_word51").style.display = "none";
  }
  else{
    document.getElementById("chatbox_word5").style.display = "none";
  }
  var items = document.querySelectorAll(".chatbox_bubble_container5");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      document.getElementById("chatbox_footer5").style.display = "none";
      document.getElementById("chatbox_footer6").style.display = "block";
      clearInterval(timeId);
    }
  }, 500);
}

function add6() {
  document.getElementById("chatbox_footer6").style.display = "none";
  document.getElementById("chatbox_footer7").style.display = "block";
  document.getElementById("chat6").style.display = "block";
}

function add7() {
  // document.getElementById("chatbox_footer7").style.background = "#00AAAA";
  document.getElementById("chat_end1").style.display = "none";
  document.getElementById("chat_end2").style.display = "none";
  document.getElementById("chat_end3").style.display = "none";
  document.getElementById("chat7").style.display = "block";
  var items = document.querySelectorAll(".chatbox_bubble_container7");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      clearInterval(timeId);
    }
  }, 500);
}


function add8() {
  // document.getElementById("chatbox_footer7").style.background = "#00AAAA";
  document.getElementById("chat_end1").style.display = "none";
  document.getElementById("chat_end2").style.display = "none";
  document.getElementById("chat_end3").style.display = "none";
  document.getElementById("chat8").style.display = "block";
  var items = document.querySelectorAll(".chatbox_bubble_container8");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      clearInterval(timeId);
    }
  }, 500);
}

function add9() {
  // document.getElementById("chatbox_footer7").style.background = "#00AAAA";
  document.getElementById("chat_end1").style.display = "none";
  document.getElementById("chat_end2").style.display = "none";
  document.getElementById("chat_end3").style.display = "none";
  document.getElementById("chat9").style.display = "block";
  var items = document.querySelectorAll(".chatbox_bubble_container9");
  var count = 0;

  var timeId = setInterval(function() {
    items[count].style.display = "block";
    count++;
    console.log(count);
    // var chatbox = document.getElementsByClassName("chatbox_body")[0];
    // chatbox.scrollTop = chatbox.scrollHeight;
    if (count == items.length) {
      clearInterval(timeId);
    }
  }, 500);
}