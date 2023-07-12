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
const wordClueText = getById("wordClueText");
const messageLoser = getById("messageLoser");
const messageWinner = getById("messageWinner");
const btnConfigGame = getById("configGame");
const btnCloseConfigModal = getById("closeConfigModal");
const textErrorConfig = getById("textErrorConfig");
const divImageError = getById("divImageError");
const btnFlashWin = getById("flashWin");

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

btnFlashWin.addEventListener("click", (e) => {
  e.preventDefault();
  flashWin();
});

function allAlphabet(e) {
  switch (e.key.toLocaleLowerCase()) {
    case "a":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "b":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "c":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "d":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "e":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "f":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "g":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;  
    case "h":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "i":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "j":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "k":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "l":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "m":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "n":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "ñ":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "o":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "p":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "q":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "r":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "s":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "t":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "u":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "v":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "w":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "x":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "y":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
    case "z":
      var btn = Array.from(btnsLetters).find((btn) => btn.innerHTML.toLocaleLowerCase() == e.key.toLocaleLowerCase());
      btn.click();
      break;
  }
}

function playGame(event) {
  document.addEventListener("keydown", allAlphabet);

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

  wordToGuess = words[randomNumber].word.toUpperCase();
  wordClueText.textContent = words[randomNumber].wordClue.toUpperCase();
  prize = words[randomNumber].prize.toUpperCase();

  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = false;
  }
  btnFlashWin.disabled = false;

  var contLetters = wordToGuess.length;

  for (let i = 1; i <= contLetters; i++) {
    const span = document.createElement("span");
    pWordToGuess.appendChild(span);
  }
}

for (let i = 0; i < btnsLetters.length; i++) {
  if (btnsLetters[i].id !== "flashWin") {
    btnsLetters[i].addEventListener("click", (e) => {
      clickBtnLetter(e, btnsLetters[i]);
    });
  }
}

function flashWin() {
  const spans = document.querySelectorAll("#wordToGuess span");
  const word = wordToGuess.toUpperCase();
  let seconds = 700;
  for (let i = 0; i < word.length; i++) {
    setTimeout(function () {
      spans[i].innerHTML = word[i];
    }, seconds);
    seconds += 700;
  }
  setTimeout(function () {
    messageWinner.innerHTML = prize;
    showConfetti = true;
    throwConfetti();
    hangmanModalWinner.show();
    divImageError.removeChild(divError);
    gameOver();
  }, seconds + 300);
}

function clickBtnLetter(event, btnCliked) {
  const spans = document.querySelectorAll("#wordToGuess span");
  const btn = event.target;
  btn.disabled = true;

  const letter = btn.innerHTML.toUpperCase();
  const word = wordToGuess.toUpperCase();

  let success = false;

  let imgError = document.createElement("img");
  imgError.src = "assets/img/X.svg";
  imgError.width = 60;
  imgError.height = 60;

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
      btnCliked.classList.remove("btn-secondary");
      btnCliked.classList.add("btn-success");
    }
  }
  if (success === false) {
    contFail++;
    divError.appendChild(imgError);
    contFail !== 5 ? audioMiss.play() : null;
    btnCliked.classList.remove("btn-secondary");
    btnCliked.classList.add("btn-danger");
  }

  if (contFail === 5) {
    audioDefeat.play();
    hangmanModalDefeat.show();
    messageLoser.innerHTML = "La palabra era: " + wordToGuess;
    divImageError.removeChild(divError);
    gameOver();
    resetClassBtnLetterClicked();
  } else if (contSuccess === wordToGuess.length) {
    messageWinner.innerHTML = prize;
    showConfetti = true;
    throwConfetti();
    hangmanModalWinner.show();
    divImageError.removeChild(divError);
    gameOver();
    resetClassBtnLetterClicked();
  }
}

function resetClassBtnLetterClicked() {
  btnsLetters.forEach((btn) => {
    btn.classList.forEach((classCss) => {
      if (classCss == "btn-danger") {
        btn.classList.remove("btn-danger");
      } else if (classCss == "btn-success") {
        btn.classList.remove("btn-success");
      }
      btn.classList.add("btn-secondary");
    });
  });
}
function gameOver() {
  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = true;
  }
  btnFlashWin.disabled = true;
  btnPlay.disabled = false;
  btnClue.disabled = true;
  btnConfigGame.disabled = false;

  audioSuccess.currentTime = 0;
  audioMiss.currentTime = 0;
  document.removeEventListener("keydown", allAlphabet);
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
    btnCloseConfigModal.disabled = true;
  } else {
    textErrorConfig.hidden = true;
    textErrorConfig.innerHTML = "";
    btnCloseConfigModal.disabled = false;
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
    } else {
    }
  });
  CheckFormValidation();
});

addWordButton.addEventListener("click", (e) => {
  e.preventDefault();
  configHangman();
});

gameOver();
CheckFormValidation();
