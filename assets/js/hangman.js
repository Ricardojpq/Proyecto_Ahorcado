let wordToGuess;
let prize;
let contFail = 0;
let contSuccess = 0;
let showConfetti = false;

let words = [];

const btnPlay = getById("play");
const btnsLetters = document.querySelectorAll("#letters button");
const pResult = getById("result");
const closeModalWinner = getById("closeModalWinner");
const closeModalDefeat = getById("closeModalDefeat");
const formConfig = getById("formConfig");
const addWordButton = getById("addWord");
const configModal = getById("configModal");
const btnClue = getById("clue");
const cardClue = getById("cardWordClue");
const wordClueText = getById("wordClueText");
const messageLoser = getById("messageLoser");
const messageWinner = getById("messageWinner");
const btnConfigGame = getById("configGame");
const btnCloseConfigModal = getById("closeConfigModal");
const textErrorConfig = getById("textErrorConfig");
const divImageError = getById("divImageError");

const jsConfeti = new JSConfetti();

var audioWinner = new Audio("assets/sound/victory.mp3");
var audioDefeat = new Audio("assets/sound/defeat.mp3");
var audioSuccess = new Audio("assets/sound/success.mp3");
var audioMiss = new Audio("assets/sound/miss.mp3");

const hangmanModalWinner = new bootstrap.Modal(getById("hangmanModalWinner"));
const hangmanModalDefeat = new bootstrap.Modal(getById("hangmanModalDefeat"));

let divError;

btnPlay.addEventListener("click", (e) => {
  e.preventDefault();
  playGame(e);
});

closeModalWinner.addEventListener("click", (e) => {
  e.preventDefault();
  showConfetti = false;
  audioWinner.pause();
  audioWinner.currentTime = 0;
});
closeModalDefeat.addEventListener("click", (e) => {
  e.preventDefault();
  audioDefeat.pause();
  audioDefeat.currentTime = 0;
});

function playGame(event) {
  btnPlay.disabled = true;
  btnClue.disabled = false;
  btnConfigGame.disabled = true;

  contFail = 0;
  contSuccess = 0;

  divError = document.createElement("div");
  divError.classList.add("d-inline-block");
  divImageError.appendChild(divError);

  const pWordToGuess = getById("wordToGuess");
  pWordToGuess.innerHTML = "";

  const contWords = words.length;
  const randomNumber = getRandomNumber(0, contWords);

  wordToGuess = words[randomNumber].word;
  wordClueText.textContent = words[randomNumber].wordClue;
  prize = words[randomNumber].prize;

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

  btnClue.addEventListener("click", (e) => {
    cardClue.hidden = false;
  });
}

function clickBtnLetter(event) {
  const spans = document.querySelectorAll("#wordToGuess span");
  const btn = event.target;
  btn.disabled = true;

  const letter = btn.innerHTML.toLowerCase();
  const word = wordToGuess.toLowerCase();

  let success = false;

  let imgError = document.createElement("img");
  imgError.src = "assets/img/X.svg";
  imgError.width = 30;
  imgError.height = 30;

  divError.remove;
  audioWinner.pause();
  audioDefeat.pause();
  audioSuccess.pause();
  audioMiss.pause();

  audioWinner.currentTime = 0;
  audioDefeat.currentTime = 0;
  audioSuccess.currentTime = 0;
  audioMiss.currentTime = 0;

  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      spans[i].innerHTML = letter;
      contSuccess++;
      success = true;
      audioSuccess.play();
    }
  }

  if (success === false) {
    contFail++;
    divError.appendChild(imgError);
    audioMiss.play();
  }

  if (contFail === 7) {
    audioDefeat.play();
    hangmanModalDefeat.show();
    messageLoser.innerHTML = "La palabra era: " + wordToGuess;
    divImageError.removeChild(divError);
    gameOver();
  } else if (contSuccess === wordToGuess.length) {
    messageWinner.innerHTML = prize;
    showConfetti = true;
    throwConfetti();
    hangmanModalWinner.show();
    divImageError.removeChild(divError);
    gameOver();
  }
}

function gameOver() {
  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = true;
  }

  btnPlay.disabled = false;
  btnClue.disabled = true;
  btnConfigGame.disabled = false;
  cardClue.hidden = true;

  audioSuccess.currentTime = 0;
  audioMiss.currentTime = 0;
}

async function throwConfetti() {
  audioWinner.play();
  while (showConfetti) {
    await jsConfeti.addConfetti({
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
  const divInputPrize = document.createElement("div");
  divInputPrize.className = "input-group input-group-sm my-1";
  const wordInput = document.createElement("input");
  wordInput.className = "form-control ms-3 ";
  const wordClueInput = document.createElement("input");
  wordClueInput.className = "form-control ms-5";
  const PrizeInput = document.createElement("input");
  PrizeInput.className = "form-control ms-5";
  const deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-sm btn-danger fw-bold text-center ms-2 my-1";
  deleteButton.textContent = "X";

  divInputWord.appendChild(wordInput);
  divInputWordClue.appendChild(wordClueInput);
  divInputPrize.appendChild(PrizeInput);

  containerOptions.appendChild(divInputWord);
  containerOptions.appendChild(divInputWordClue);
  containerOptions.appendChild(divInputPrize);
  containerOptions.appendChild(deleteButton);

  formConfig.appendChild(containerOptions);

  deleteButton.addEventListener("click", (e) => {
    formConfig.removeChild(e.target.parentNode);
    textErrorConfig.hidden = true;
    textErrorConfig.innerHTML = "";
  });

  wordInput.addEventListener("focusout", (e) => {
    e.preventDefault();
    validateConfigurationInputs(wordInput);
  });
  wordClueInput.addEventListener("focusout", (e) => {
    e.preventDefault();
    validateConfigurationInputs(wordClueInput);
  });
  PrizeInput.addEventListener("focusout", (e) => {
    e.preventDefault();
    validateConfigurationInputs(PrizeInput);
  });
}
function validateConfigurationInputs(controlInput) {
  if (controlInput.value.trim() === "") {
    textErrorConfig.hidden = false;
    textErrorConfig.innerHTML = "Por favor rellene todos los campos.";
  } else {
    textErrorConfig.hidden = true;
    textErrorConfig.innerHTML = "";
  }
}

function CheckFormValidation() {
  if (words.length === 0) {
    btnPlay.disabled = true;
    btnClue.disabled = true;
    return false;
  } else {
    btnPlay.disabled = false;
    return true;
  }
}

configModal.addEventListener("hidden.bs.modal", (e) => {
  words = [];
  Array.from(formConfig.children).forEach((formChildren) => {
    if (formChildren.id == "subheaderConfig") return;

    let newWord = formChildren.children[0].children[0].value.trim();
    let newWordClue = formChildren.children[1].children[0].value.trim();
    let newPrize = formChildren.children[2].children[0].value.trim();

    if (newWord !== "" && newWordClue !== "" && newPrize !== "") {
      var newItem = {
        word: newWord,
        wordClue: newWordClue,
        prize: newPrize,
      };
      words.push(newItem);
      CheckFormValidation();
    } else {
    }
  });
});

addWordButton.addEventListener("click", (e) => {
  e.preventDefault();
  configHangman();
});

gameOver();
CheckFormValidation();
