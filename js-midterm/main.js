document.addEventListener("keydown", decreaseDigits);
document.addEventListener("keyup",resetSpeed);
document.getElementById("boom").addEventListener("click", explode);
document.getElementById("clear").addEventListener("click",clearNumber);
document.addEventListener("keydown",spaceDown);
document.addEventListener("keyup",spaceUp);

let number = 9999999999;
let counter = 0;
let zoom = 0;
let testZoom = 0;
let timeRemaining = 60;
let timerCount = 0;
let finishClick = false;
let digitsFound = true;

let d0 = document.getElementById("d0"),
d1 = document.getElementById("d1"),
d2 = document.getElementById("d2"),
d3 = document.getElementById("d3"),
d4 = document.getElementById("d4"),
d5 = document.getElementById("d5"),
d6 = document.getElementById("d6"),
d7 = document.getElementById("d7"),
d8 = document.getElementById("d8"),
d9 = document.getElementById("d9");


function decreaseDigits(event){
    if(event.key=="ArrowDown"){
        zoom+=0.1;
        testZoom = Math.round(zoom*10)/10;
        console.log(testZoom);
        number-=Math.round(1+zoom);
      //  console.log(zoom + " and " + number);
        counter+=1;
        number-=1;
        document.getElementById("speedValue").innerHTML = testZoom + "x";
        d9.innerHTML = number%10;
        d8.innerHTML = (number%100 - d9.innerHTML)/10;
        d7.innerHTML = (number%1000 - (d8.innerHTML*10) - d9.innerHTML)/100;
        d6.innerHTML = (number%10000 - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/1000;
        d5.innerHTML = (number%100000 - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/10000;
        d4.innerHTML = (number%1000000 - (d5.innerHTML*10000) - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/100000;
        d3.innerHTML = (number%10000000 - (d4.innerHTML*100000) - (d5.innerHTML*10000) - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/1000000;
        d2.innerHTML = (number%100000000 - (d3.innerHTML*1000000) - (d4.innerHTML*100000) - (d5.innerHTML*10000) - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/10000000;
        d1.innerHTML = (number%1000000000 - (d2.innerHTML*10000000) - (d3.innerHTML*1000000) - (d4.innerHTML*100000) - (d5.innerHTML*10000) - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/100000000;
        d0.innerHTML = (number%10000000000 - (d1.innerHTML*100000000) - (d2.innerHTML*10000000) - (d3.innerHTML*1000000) - (d4.innerHTML*100000) - (d5.innerHTML*10000) - (d6.innerHTML*1000) - (d7.innerHTML*100) - (d8.innerHTML*10) - d9.innerHTML)/1000000000;
    }
}

function resetSpeed(){
 //   console.log(zoom);
    zoom = 0;
    testZoom = 0;
    document.getElementById("speedValue").innerHTML = testZoom + "x";
   // console.log(zoom);
}

let newNumber = document.getElementById("boom");

function explode(){
    finishClick = true;
    let boomSound = document.getElementById("audiohNo");
    boomSound.pause();
    let boomSound2 = document.getElementById("audiohYeah");
    boomSound2.play();
    document.body.style.backgroundImage = "url(../media/img/inclass/boomGif.gif)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    console.log("Boom!");
    digitsFound = false;
    newNumber.innerHTML = "Get New Number";
    newNumber.addEventListener("click", newPhoneWhoDis);
}

function newPhoneWhoDis(){
    if(!digitsFound){
        window.location.href = "https://www.yellowpages.com/";
    }
}

function clearNumber(){
    number = 9999999999;
    zoom = 0;
    testZoom = 0;
    document.getElementById("speedValue").innerHTML = testZoom + "x";
    d9.innerHTML = 9;
    d8.innerHTML = 9;
    d7.innerHTML = 9;
    d6.innerHTML = 9;
    d5.innerHTML = 9;
    d4.innerHTML = 9;
    d3.innerHTML = 9;
    d2.innerHTML = 9;
    d1.innerHTML = 9;
    d0.innerHTML = 9;
    document.body.style.backgroundImage = "url(../media/img/inclass/giphycode.gif)";
    timeRemaining = 60;
    document.getElementById("timer").innerHTML = timeRemaining + " seconds remaining";
    finishClick = false;
    newNumber.innerHTML = "Phone Number Located";
    digitsFound = true;
    newNumber.removeEventListener("click", newPhoneWhoDis);
}

//setTimeout(explode,(timeRemaining*1000));

//timeRemaining-=1;
//document.getElementById("timer").innerHTML = timeRemaining + " seconds remaining";



function spaceDown(event){
    if(event.key == " " && timerCount==0){
        timeRemaining+=1;
        timerCount = 1;
    }
}

function spaceUp(event){
    if(event.key == " "){
        timerCount = 0;
    }
}

//Set Interval Function taken from SheCodes: https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript
const timer = setInterval(function() {
  document.getElementById("timer").innerHTML = timeRemaining + " seconds remaining";
  timeRemaining--;
  //console.log(timeRemaining);
  if(finishClick){
    document.getElementById("timer").innerHTML = "0 seconds remaining";
    timeRemaining = 0;
    return;
  }
  else if (timeRemaining === 0) {
    clearInterval(timer);
    explode();
    document.getElementById("timer").innerHTML = "Times Up!";
  }
}, 1000);