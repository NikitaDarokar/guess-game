let randomNumber = Math.floor(Math.random()* 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent +=userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! you got it right!';
        lastResult.getElementsByClassName.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    }else{
        lastResult.textContent = 'Wrong!';
        lastResult.getElementsByClassName.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess was too high!'
        }
    }
 
    guessCount++;
    guessField.value = ' ';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess); 
 
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'start new game';
    Document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
}