const homeMusic = new Audio('./audio/Home-Page-Track-new-MP3.mp3');
homeMusic.loop = true;
let userinteraction = 0;
const audio = document.getElementsByClassName("audio");

const buyMusic = new Audio('./audio/Home-Page-Track-new-MP3.mp3');
buyMusic.loop = true;


function musik() {
    
    if(userinteraction === 1){
        homeMusic.pause();
        audio[0].classList.add("off");
        userinteraction = 0;
    }else{
        this.currentTime = 0;
        homeMusic.play();
        audio[0].classList.remove("off");
        userinteraction++;
    }

    console.log(userinteraction);
}

function musikBuy() {
    
    if(userinteraction === 1){
        homeMusic.pause();
        audio[0].classList.add("off");
        userinteraction = 0;
    }else{
        this.currentTime = 0;
        homeMusic.play();
        audio[0].classList.remove("off");
        userinteraction++;
    }

    console.log(userinteraction);
}


// -----------------------------------------------------------Timer-------------------------------------------------------

function updateTimer() {
    future  = Date.parse("december 2, 2021 09:00:00 AM");
    // now     = new Date();
    
    now = new Date();
    utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    // var aestTime = new Date().toLocaleString("en-AU", {timeZone: "Australia/Melbourne"});
    // // console.log(now);
    // console.log(aestTime);

    diff    = future - utc;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;

    if(h === 0 & m === 0 & s === 0){
        document.getElementById("timer")
      .innerHTML =
        '<div class="date"><span>Pre Sales has been started</span></div>';
        return;
    } else{
        document.getElementById("timer")
      .innerHTML =
        // '<div class="date">' + d + '<span>days</span></div>' +
        '<div class="date">' + h + '<span>hours</span></div>' +
        '<div class="date">' + m + '<span>minutes</span></div>' +
        '<div class="date">' + s + '<span>seconds</span></div>' ;
    }
}
  setInterval('updateTimer()', 1000);

//   const timer = document.getElementById("timer-section");

//   function hide(){
//       timer.classList.add("hide-section");
//       console.log("done");
//   }

//   setTimeout('hide()', 4000);

// var box = document.getElementById("timer-section");

// box.addEventListener("animationend", () => {
//     timer.style.display = "none";
// })


const timer = document.getElementById("timer-section");

function closeIt(){
    timer.classList.add("hide-section");
    document.body.style.overflowY = "scroll";
}

var test = document.getElementById("just");
var testClass = test.className;

switch (testClass) {
  case "overlay":
      //document.body.style.overflowY = "hidden";
    break;
//   case "class2":
//     test.innerHTML = "I have class2";
//     break;
//   case "class3":
//     test.innerHTML = "I have class3";
//     break;
//   case "class4":
//     test.innerHTML = "I have class4";
//     break;
  default:
    // test.innerHTML = "";
    console.log("Okya");
}