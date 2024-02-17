 function handleKeyUpEvent(event) {
    const playerPressed = event.key

    if(playerPressed === 'Escape'){
        gameOver();
    }

    console.log('player pressed', playerPressed);

    const curentAlphabetElemant = document.getElementById('curent-alphabets');
    const curentAlphabet = curentAlphabetElemant.innerText;
    const curentAlphabets = curentAlphabet.toLowerCase();
    console.log(playerPressed, curentAlphabets);

    if(playerPressed === curentAlphabets) {
        console.log('you got win a point');
        console.log('you have pressed correctyly', curentAlphabets);
        removeBacgroundColorById(curentAlphabets);
        continueGame();

        const curentScore = curentScoreElementById('curent-score');
        
        const updateScore = curentScore + 1;

        setTextElementByValue('curent-score', updateScore);

        // setTextElementByValue(curentScore, updateScore);
        

        // const curentScoreElement = document.getElementById('curent-score');
        // const curentScoreText = curentScoreElement.innerText
        // const curentScore = parseInt(curentScoreText);
       
        // console.log('your curent score text', curentScore);

        // const newScore = curentScore + 1;
       
        // curentScoreElement.innerText = newScore;
    }
    else{

        const curentlifeScore = curentScoreElementById('curentLife-score');
        const updateScore = curentlifeScore - 1;
        setTextElementByValue('curentLife-score', updateScore);

        if(curentlifeScore === 0){
            gameOver();
        }
        

        // console.log('you loos a point');
        // const curentLifeGetElement = document.getElementById('curentLifeScore');
        // const curentLifeText = curentLifeGetElement.innerText
        // const curentLifeScore = parseInt(curentLifeText);

        // const newLifeScore = curentLifeScore - 1;

        // curentLifeGetElement.innerText = newLifeScore;

    }
 }
document.addEventListener('keyup', handleKeyUpEvent);


function hideElementById(elementId) {
   const home = document.getElementById(elementId);
    home.classList.add('hidden');
};

function showElementById(element) {
    const playGround = document.getElementById(element);
    playGround.classList.remove('hidden');
};

function setBacgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBacgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function curentScoreElementById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

function setTextElementByValue(element, value) {
    const elements = document.getElementById(element);
    elements.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}

function getRendomAlphabet() {
    // Create Alphabets string
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //  console.log(alphabets);

    // Create random string
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    console.log('your random Alphabet', alphabet);
    return alphabet;
}