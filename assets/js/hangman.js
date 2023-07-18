let wordToGuess;
let prize;
let contFail = 0;
let contSuccess = 0;
let showConfetti = false;
let minutes,seconds,auxSound = 0;
let repeater;
let soundTimer;
let words = [];

const secondsForEachLetter = 8;
const btnPlay = getById("play");
const btnsLetters = document.querySelectorAll("#letters button");
const pResult = getById("result");
const closeModalWinner = getById("closeModalWinner");
const closeModalDefeat = getById("closeModalDefeat");
const formConfig = getById("formConfig");
const addWordButton = getById("addWord");
const configModal = getById("configModal");
const wordClueModal = getById("hangmanModalClueWord");
const btnClue = getById("clue");
const wordClueText = getById("wordClueText");
const messageLoser = getById("messageLoser");
const messageWinner = getById("messageWinner");
const btnConfigGame = getById("configGame");
const btnCloseConfigModal = getById("closeConfigModal");
const textErrorConfig = getById("textErrorConfig");
const divImageError = getById("divImageError");
const btnFlashWin = getById("flashWin");
const clock = document.querySelector(".clock");

const jsConfeti = new JSConfetti();

var audioWinner = new Audio("assets/sound/victory.mp3");
var audioDefeat = new Audio("assets/sound/defeat.mp3");
var audioSuccess = new Audio("assets/sound/success.mp3");
var audioMiss = new Audio("assets/sound/miss.mp3");
var audioTimerEven = new Audio("assets/sound/soundTimer1.mp3");
var audioTimerOdd = new Audio("assets/sound/soundTimer2.mp3");

const hangmanModalWinner = new bootstrap.Modal(getById("hangmanModalWinner"));
const hangmanModalDefeat = new bootstrap.Modal(getById("hangmanModalDefeat"));
const hangmanModalConfig = new bootstrap.Modal(configModal);

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

function showTimer(letterCount, secondsByLetter) {
  setTimerWithWord(letterCount, secondsByLetter);
  setTimer();
}
function startTimerCountdown(){
  countdown();
  startSoundTimer(1000);
}
function setTimer() {
  clock.innerHTML = `<p class="numberClock">${
    minutes > 9 ? minutes : "0" + minutes
  }</p><span>min</span><p class="numberClock">${seconds > 9 ? seconds : "0" + seconds}</p><span>sec</span>`;
}

function countdown() {
  repeater = setInterval(runner, 1000);
}

function runner() {
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      seconds = 59;
      minutes--;
    } else {
      lose(wordToGuess);
    }
  }
  if(seconds !== 0 && seconds === 10 && minutes === 0){
    stopSoundTimer();
    setSoundTimerFast(300);
  }
  setTimer();
}

function stopTimer() {
  clearInterval(repeater);
}

function setTimerWithWord(letterCount, secondsByLetter) {
  var totalTimeInMinutes = (letterCount * secondsByLetter) / 60;
  minutes = Math.trunc(totalTimeInMinutes);
  seconds = Math.trunc((totalTimeInMinutes % 1) * 60);
}

function startSoundTimer(milliseconds) {
  auxSound = 0;
  soundTimer = setInterval(() => {
    if (seconds % 2 == 0) {
      audioTimerEven.play();
    } else {
      audioTimerOdd.play();
    }
  }, milliseconds);
}

function setSoundTimerFast(milliseconds) {
  soundTimer = setInterval(() => {
    stopAudioTimer();
    if(seconds >= 1){
      if (auxSound % 2 == 0) {
        audioTimerEven.play();
      } else {
        audioTimerOdd.play();
      }
      auxSound++;
    }else{
      stopAudioTimer();
    }
  }, milliseconds);
}

function stopSoundTimer() {
  clearInterval(soundTimer);
}

function stopAudioTimer(){
  audioTimerEven.pause();
  audioTimerEven.currentTime = 0;
  audioTimerOdd.pause();
  audioTimerOdd.currentTime = 0;
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

  wordToGuess = words[randomNumber].word;
  wordClueText.textContent = words[randomNumber].wordClue;
  prize = words[randomNumber].prize;

  for (let i = 0; i < btnsLetters.length; i++) {
    btnsLetters[i].disabled = false;
  }
  btnFlashWin.disabled = false;

  var contLetters = wordToGuess.length;

  for (let i = 1; i <= contLetters; i++) {
    const span = document.createElement("span");
    pWordToGuess.appendChild(span);
  }
  showTimer(contLetters,secondsForEachLetter);
}

for (let i = 0; i < btnsLetters.length; i++) {
  if (btnsLetters[i].id !== "flashWin") {
    btnsLetters[i].addEventListener("click", (e) => {
      clickBtnLetter(e, btnsLetters[i]);
    });
  }
}

function flashWin() {
  stopTimer();
  stopSoundTimer();
  const spans = document.querySelectorAll("#wordToGuess span");
  const word = wordToGuess;
  let seconds = 700;
  for (let i = 0; i < word.length; i++) {
    setTimeout(function () {
      spans[i].innerHTML = word[i];
    }, seconds);
    seconds += 700;
  }
  setTimeout(function () {
    win(prize);
  }, seconds + 300);
}

function clickBtnLetter(event, btnCliked) {
  const spans = document.querySelectorAll("#wordToGuess span");
  const btn = event.target;
  btn.disabled = true;

  const letter = btn.innerHTML.toUpperCase();
  const word = wordToGuess;

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
    lose(wordToGuess);
  } else if (contSuccess === wordToGuess.length) {
    win(prize, wordToGuess);
  }
}

function win(prize, wordToGuess) {
  messageWinner.innerHTML = prize;
  showConfetti = true;
  throwConfetti();
  hangmanModalWinner.show();
  divImageError.removeChild(divError);
  var index = words.map((item) => item.word).indexOf(wordToGuess);
  words.splice(index, 1);
  gameOver();
  loadConfigHagman(words);
}
function lose(wordToGuess) {
  audioDefeat.play();
  hangmanModalDefeat.show();
  messageLoser.innerHTML = "La palabra era: " + wordToGuess;
  divImageError.removeChild(divError);
  var index = words.map((item) => item.word).indexOf(wordToGuess);
  words.splice(index, 1);
  gameOver();
  loadConfigHagman(words);
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
  resetClassBtnLetterClicked();
  stopTimer();
  stopSoundTimer();
}

async function throwConfetti() {
  audioWinner.play();
  while (showConfetti) {
    await jsConfeti.addConfetti({
      confettiNumber: 300,
    });
  }
}

function configHangman(listWords) {
  const containerOptions = document.createElement("div");
  containerOptions.className = "d-flex justify-content-around align-items-center";
  const divInputWord = document.createElement("div");
  divInputWord.className = "input-group input-group-sm my-1";
  const divInputWordClue = document.createElement("div");
  divInputWordClue.className = "input-group input-group-sm my-1";
  const divInputPrize = document.createElement("div");
  divInputPrize.className = "input-group input-group-sm my-1";
  const wordInput = document.createElement("input");
  wordInput.className = "form-control ms-3 wordToGuess";
  wordInput.value = listWords !== undefined ? listWords.word : "";
  wordInput.name = "wordToGuess";
  const wordClueInput = document.createElement("input");
  wordClueInput.className = "form-control ms-5";
  wordClueInput.value = listWords !== undefined ? listWords.wordClue : "";
  const PrizeInput = document.createElement("input");
  PrizeInput.className = "form-control ms-5";
  PrizeInput.value = listWords !== undefined ? listWords.prize : "";
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
}

function loadConfigHagman(listWords) {
  removeConfigHagman(listWords);
  listWords.forEach((config) => {
    configHangman(config);
  });
}

function removeConfigHagman(listWords) {
  if (listWords !== undefined) {
    let inputsConfiguration = document.querySelectorAll(
      "#formConfig div.d-flex.justify-content-around.align-items-center"
    );
    inputsConfiguration.forEach((item) => {
      formConfig.removeChild(item);
    });
  }
  CheckFormValidation();
}

function validateEmptyConfigInput(configInput) {
  let hasNoErrors = true;
  if (configInput.value.trim() === "") {
    hasNoErrors = false;
  }
  return hasNoErrors;
}

function validateRepeatedGuessWord(wordInputToGuess) {
  let hasNoErrors = true;
  if (validateEmptyConfigInput(wordInputToGuess)) {
    let allConfigInputsForTheWordToGuess = Array.from(
      document.querySelectorAll("#formConfig div.d-flex.justify-content-around.align-items-center input.wordToGuess")
    );
    let index = allConfigInputsForTheWordToGuess.indexOf(wordInputToGuess);
    allConfigInputsForTheWordToGuess.splice(index, 1);
    allConfigInputsForTheWordToGuess.forEach((inputWord) => {
      if (inputWord.value.trim() === wordInputToGuess.value.trim()) {
        hasNoErrors = false;
        return hasNoErrors;
      }
    });
  }
  return hasNoErrors;
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
        word: newWord.toUpperCase(),
        wordClue: newWordClue.toUpperCase(),
        prize: newPrize.toUpperCase(),
      };
      words.push(newItem);
    } else {
    }
  });
  CheckFormValidation();
});

wordClueModal.addEventListener("hidden.bs.modal",(e)=>{
  startTimerCountdown();
})

addWordButton.addEventListener("click", (e) => {
  e.preventDefault();
  configHangman();
});

btnCloseConfigModal.addEventListener("click", (e) => {
  e.preventDefault();
  let hasNoError = true;
  let inputsConfig = Array.from(
    document.querySelectorAll("#formConfig div.d-flex.justify-content-around.align-items-center input")
  );
  let configInputsForWordsToGuess = Array.from(
    document.querySelectorAll("#formConfig div.d-flex.justify-content-around.align-items-center input.wordToGuess")
  );
  inputsConfig.forEach((inputConfig) => {
    if (!validateEmptyConfigInput(inputConfig)) {
      textErrorConfig.hidden = false;
      textErrorConfig.innerHTML = "Por favor rellene todos los campos.";
      hasNoError = false;
      return;
    }
  });
  configInputsForWordsToGuess.forEach((wordToGuessInput) => {
    if (!validateRepeatedGuessWord(wordToGuessInput)) {
      textErrorConfig.hidden = false;
      textErrorConfig.innerHTML = "Por favor no repitas las palabras";
      hasNoError = false;
      return;
    }
  });

  if (hasNoError) {
    textErrorConfig.hidden = true;
    textErrorConfig.innerHTML = "";
    hangmanModalConfig.hide();
  }
});

gameOver();
CheckFormValidation();
