const newQuestion = document.querySelector("#js-new-quote").addEventListener("click",getQuote);
const newAnswer = document.querySelector("#js-tweet").addEventListener("click",displayAnswer);
const questionText = document.querySelector("#js-quote-text");
let answerText = document.querySelector("#js-answer-text");

let answer = "";

const apiEndPoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote(){
    console.log("Working!");
    
    try {
        const response = await fetch(apiEndPoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json["question"]);
        displayQuote(json["question"]);
        answer = json["answer"];
        answerText.textContent = "";

    }
    catch(err){
        console.log(err);
        alert("Failed to fetch new quote");
    }
}
function displayQuote(question){
    questionText.textContent = question;
}

function displayAnswer(){
    answerText.textContent = answer;
}

getQuote();