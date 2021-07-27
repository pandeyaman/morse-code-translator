

const btnReset = document.querySelector(".btn-reset");
const btnSampleText = document.querySelector(".btn-sampleText");
const btnTranslate = document.querySelector(".btn-translate");
const outputText = document.querySelector("#outputText");
const inputText = document.querySelector("#inputText");

const errorHandler = () =>{
    alert('Hi ! The API being used is public and ratelimited and can be called only 5 times per hour, and 60 times a day. Please try again after sometime.');
}

const fetchData = ()=>{
    var input = inputText.value;
    var URL = 'https://api.funtranslations.com/translate/morse.json?text='+input;
    fetch(URL)
        .then(response => response.json())
        .then(json => outputText.value = json.contents.translated)
        .catch(errorHandler);
}

const addSampleText = () =>{
    inputText.value = "This is a confidential message. Don't let anyone know about this.";
}

const resetText = () =>{
    inputText.value = "";
    outputText.value = "";
}

btnSampleText.addEventListener('click',addSampleText);
btnTranslate.addEventListener('click',fetchData);
btnReset.addEventListener('click',resetText);