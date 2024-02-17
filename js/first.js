function continueGame() {
    const alphabet = getRendomAlphabet();
    
    const curentAlphabetElemant = document.getElementById('curent-alphabets');
    curentAlphabetElemant.innerText = alphabet;

    setBacgroundColorById(alphabet);
    
 }

function playNow() {
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementByValue('curentLife-score', 5);
    setTextElementByValue('curent-score', 0);

    continueGame();
};

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    const lastScore = curentScoreElementById('curent-score');
    console.log('last score', lastScore);
    setTextElementByValue('last-score', lastScore);

    // clear the last selected alphabet heighlight
    const currentAlphabet = getElementTextById('curent-alphabets');
    removeBacgroundColorById(currentAlphabet);
}

