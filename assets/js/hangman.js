let wordToGuess;
let contFail = 0;
let contSuccess = 0;
let showConfetti = false;

let words = [];

const btnPlay = getById("play");
const hangmanImage = getById("hangmanImage");
const btnsLetters = document.querySelectorAll("#letters button");
const pResult = getById("result");
const closeModal = getById("closeModal");
const formConfig = getById("formConfig");
const addWordButton = getById("addWord");
const configModal = getById("configModal");
const btnClue = getById("clue");
const cardClue = getById("cardWordClue");
const wordClueText = getById("wordClueText");
const jsConfeti = new JSConfetti();

var audioWinner = new Audio("assets/sound/tick.mp3");
const hangmanModal = new bootstrap.Modal(getById("hangmanModal"));

btnPlay.addEventListener("click", (e) => {
  e.preventDefault();
  playGame(e);
});



closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  showConfetti = false;
  audioWinner.pause();
  audioWinner.currentTime = 0;
});

function playGame(event) {
  hangmanImage.src = "assets/img/img0.png";
  btnPlay.disabled = true;
  btnClue.disabled = false;
  contFail = 0;
  contSuccess = 0;

  const pWordToGuess = getById("wordToGuess");
  pWordToGuess.innerHTML = "";
  pResult.innerHTML = "";

  const contWords = words.length;
  const randomNumber = getRandomNumber(0, contWords);

  wordToGuess = words[randomNumber].word;
  wordClueText.textContent = words[randomNumber].wordClue;

  const contLetters = wordToGuess.length;
  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = false;
  }

  for (let i = 0; i < contLetters; i++) {
    const span = document.createElement("span");
    pWordToGuess.appendChild(span);
  }
}

for (let i = 0; i < btnsLetters.length; i++) {
  btnsLetters[i].addEventListener("click", (e) => {
    clickBtnLetter(e);
  });

  btnClue.addEventListener("click",(e)=>{
    cardClue.hidden = false;
  })
}

function clickBtnLetter(event) {
  const spans = document.querySelectorAll("#wordToGuess span");
  const btn = event.target;
  btn.disabled = true;

  const letter = btn.innerHTML.toLowerCase();
  const word = wordToGuess.toLowerCase();

  let success = false;

  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      spans[i].innerHTML = letter;
      contSuccess++;
      success = true;
    }
  }

  if (success === false) {
    contFail++;
    const source = `assets/img/img${contFail}.png`;
    hangmanImage.src = source;
  }

  if (contFail === 7) {
    pResult.innerHTML = "Perdiste, la palabra era: " + wordToGuess;
    gameOver();
  } else if (contSuccess === wordToGuess.length) {
    pResult.innerHTML = "Ganaste!!";
    showConfetti = true;
    throwConfetti();
    hangmanModal.show();
    gameOver();
  }
}

function gameOver() {
  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = true;
  }

  btnPlay.disabled = false;
  btnClue.disabled = true;
  cardClue.hidden = true;
}

async function throwConfetti() {
  while (showConfetti) {
    audioWinner.play();
    await jsConfeti.addConfetti({
      confettiColors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"],
      confettiNumber: 300,
    });
  }
}

function configHangman() {
  const containerOptions = document.createElement("div");
  containerOptions.className = "d-flex justify-content-around align-items-center";
  const divInputWord = document.createElement("div");
  divInputWord.className = "input-group input-group-sm my-1";
  const divInputWordClue = document.createElement("div");
  divInputWordClue.className = "input-group input-group-sm my-1";
  const wordInput = document.createElement("input");
  wordInput.className = "form-control ms-3 ";
  const wordClue = document.createElement("input");
  wordClue.className = "form-control ms-5";
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-sm btn-danger fw-bold text-center ms-2 my-1";
  deleteButton.textContent = "X";

  divInputWord.appendChild(wordInput);
  divInputWordClue.appendChild(wordClue);

  containerOptions.appendChild(divInputWord);
  containerOptions.appendChild(divInputWordClue);
  containerOptions.appendChild(deleteButton);

  formConfig.appendChild(containerOptions);

  deleteButton.addEventListener("click", (e) => {
    formConfig.removeChild(e.target.parentNode);
  });
}

function CheckFormValidation() {
  if (words.length === 0) {
    btnPlay.disabled = true;
    btnClue.disabled = true;
  }else{
    btnPlay.disabled = false;
  }
}

configModal.addEventListener("hidden.bs.modal", (e) => {
  words = [];
  Array.from(formConfig.children).forEach((formChildren) => {
    if (formChildren.id == "subheaderConfig") return;

    var newWord = {
      word: formChildren.children[0].children[0].value.trim(),
      wordClue: formChildren.children[1].children[0].value.trim(),
    };
    words.push(newWord);
    CheckFormValidation();
  });
});

addWordButton.addEventListener("click", (e) => {
  e.preventDefault();
  configHangman();
});

gameOver();
CheckFormValidation();
