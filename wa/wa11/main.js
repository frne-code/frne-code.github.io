const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArr = ["images/cskMemorial.jpg",
                "images/libertySquare.jpg",
                "images/maokongSkyline.jpg",
                "images/matchmakerGod.jpg",
                "images/taipei101.jpg"]
/* Declaring the alternative text for each image file */
const altTxt = {
    "image 1" : "Chiang Kai-shek Memorial",
    "image 2" : "Liberty Square in Taipei",
    "image 3" : "Sky Rail over Maokong",
    "image 4" : "Temple area for a Matchmaker God",
    "iamge 5" : "Taipei Skyline from Taipei 101"
}
/* Looping through images */

for(let i=0;i<imgArr.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src',imgArr[i]);
    newImage.setAttribute('alt',altTxt['image ' + (i+1)]);
    thumbBar.appendChild(newImage);
    function displayImg(){
        displayedImage.setAttribute('src',imgArr[i]);
        displayedImage.setAttribute('alt',altTxt['image ' + (i+1)]);
    }
    newImage.addEventListener("click", displayImg);
}

/* Wiring up the Darken/Lighten button */
function buttonColor(){
    if(btn.getAttribute("class")==="blue"){
        btn.setAttribute("class", "red");
        btn.textContent = "Redder";
        overlay.style.backgroundColor = "rgba(0,0,255,0.25)";
    } else {
        btn.setAttribute("class", "blue");
        btn.textContent = "Bluer";
        overlay.style.backgroundColor = "rgba(255,0,0,0.25)";
    }
}

btn.addEventListener("click", buttonColor);