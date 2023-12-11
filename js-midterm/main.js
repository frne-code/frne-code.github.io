document.addEventListener("keydown", decreaseDigits);
document.getElementById("boom").addEventListener("click", explode);
let number = 9999999999;
let counter = 0;

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
        //console.log(counter + " and " + number);
        counter+=1;
        number-=1;
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

function explode(){
    let boomSound = document.getElementById("audiohNo");
    boomSound.pause();
    let boomSound2 = document.getElementById("audiohYeah");
    boomSound2.play();
    document.body.style.backgroundImage = "url(../media/img/inclass/boomGif.gif)";
    console.log("Boom!");
    let newNumber = document.getElementById("boom");
    newNumber.innerHTML = "Get New Number";
    newNumber.addEventListener("click", newPhoneWhoDis);
}

function newPhoneWhoDis(){
    window.location.href = "https://www.yellowpages.com/";
}