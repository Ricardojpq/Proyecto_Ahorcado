let wordToGuess;
let contFail = 0;
let contSuccess = 0;

const words = ["hola", "como", "estas"];

const btnPlay = getById("play");
const hangmanImage = getById("hangmanImage");
const btnsLetters = document.querySelectorAll("#letters button");
const  pResult =  getById("result");

btnPlay.addEventListener("click", (e) => {
  e.preventDefault();
  playGame(e);
});

function playGame(event) {
  hangmanImage.src = "assets/img/img0.png";
  btnPlay.disabled = true;
  contFail = 0;
  contSuccess = 0;

  const pWordToGuess = getById("wordToGuess");
  pWordToGuess.innerHTML = "";
  pResult.innerHTML = "";

  const contWords = words.length;
  const randomNumber = getRandomNumber(0, contWords);

  wordToGuess = words[randomNumber];

  const contLetters = wordToGuess.length;

  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = false;
  }

  for (let i = 0;i< contLetters;i++){
    const span = document.createElement("span");
    pWordToGuess.appendChild(span);
  }
}

for(let i = 0; i < btnsLetters.length; i++){
  btnsLetters[i].addEventListener("click",(e)=>{clickBtnLetter(e);});
}

function clickBtnLetter(event){
  const spans = document.querySelectorAll("#wordToGuess span");
  const btn = event.target;
  btn.disabled = true;

  const letter = btn.innerHTML.toLowerCase();
  const word = wordToGuess.toLowerCase();

  let success = false;

  for(let i = 0; i < word.length; i++){
    if(letter === word[i]){
      spans[i].innerHTML = letter;
      contSuccess++;
      success = true;
    }
  }

  if(success === false){
    contFail++;
    const source = `assets/img/img${contFail}.png`;
    hangmanImage.src = source;
  }

  if( contFail === 7){
    pResult.innerHTML = "Perdiste, la palabra era: " + wordToGuess;
    gameOver();
  }else if (contSuccess === wordToGuess.length){
    pResult.innerHTML = "Ganaste!!";
    gameOver();
  }
}

function gameOver(){
  for(let i = 0; i < btnsLetters.length;i++){
    btnsLetters[i].disabled = true;
  }

  btnPlay.disabled = false;
}

gameOver();