const newQuestion = document.querySelector("#js-new-quote").addEventListener("click",getQuote);
const questionText = document.querySelector("#js-quote-text");

const backgroundApp = document.querySelector(".app");

const apiEndPoint = "https://techy-api.vercel.app/api/json";

function random(number) {
    return Math.random() * number;
}

async function getQuote(){
    console.log("Working!");
    
    try {
        const response = await fetch(apiEndPoint, {
            headers: {
                "Accept": "application/json"
            }
        })

        if(!response.ok){
            throw Error(response.statusText);
        }

        const jsonData = await response.json();
        console.log(jsonData["message"]);
        backgroundApp.style.backgroundColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        displayQuote(jsonData["message"]);
    }
    catch(err){
        console.log(err);
        alert("Failed to fetch new quote");
    }
}
function displayQuote(question){
    questionText.textContent = question;
}

getQuote();