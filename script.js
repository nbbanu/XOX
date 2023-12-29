const buttons = document.querySelectorAll(".player-input");
const whichPlayer = document.querySelector(".which-player");
const boxes = document.querySelectorAll(".box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const winnerPlayer = document.querySelector(".winnerPlayer");
const restartBtn = document.querySelector(".restart-btn");

let XPlayer = "X";
let OPlayer = "O";
let player = XPlayer;

startGame(); //oyuncu seçmeden devam edersek
buttons.forEach((button) => button.addEventListener("click", selectPlayer));
closeBtn.addEventListener("click", closePopup);
restartBtn.addEventListener("click", restartGame);

function selectPlayer(e) {
  let selectedPlayer = e.target.textContent;
  whichPlayer.innerHTML = `
    <span>${selectedPlayer}</span> koyan oyuncunun sırası
    `;
  if (e.target.id == "o-button") {
    buttons[0].classList.remove("selected-button");
    buttons[1].classList.add("selected-button");
  } else {
    buttons[0].classList.add("selected-button");
    buttons[1].classList.remove("selected-button");
  }
  player = e.target.id == "o-button" ? OPlayer : XPlayer;
  startGame(); //butonlardan oyuncu seçersek
}

function startGame() {
  boxes.forEach((box) => {
    box.removeEventListener("click", handleClick);
    box.addEventListener("click", handleClick);
  });
}
function handleClick(e) {
  whichPlayer.innerHTML = `
    <span>${player} oynuyor</span> 
    `;
  
  buttons.forEach((button) => button.setAttribute("disabled", ""));
  
  e.target.innerHTML = e.target.innerHTML != "" ? e.target.innerHTML : player;
  player = player === XPlayer ? OPlayer : XPlayer;

  isGameOVer();
}

function isGameOVer() {
  if (
    boxes[0].innerHTML != "" &&
    boxes[2].innerHTML != "" &&
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[0].innerHTML === boxes[2].innerHTML &&
    boxes.innerHTML != ""
  ) {
    setTime();
  }
  if (
    boxes[3].innerHTML != "" &&
    boxes[6].innerHTML != "" &&
    boxes[0].innerHTML === boxes[3].innerHTML &&
    boxes[0].innerHTML === boxes[6].innerHTML &&
    boxes.innerHTML != ""
  ) {
    setTime();
  }
  if (
    boxes[7].innerHTML != "" &&
    boxes[8].innerHTML != "" &&
    boxes[6].innerHTML === boxes[7].innerHTML &&
    boxes[6].innerHTML === boxes[8].innerHTML
  ) {
    setTime();
  }
  if (
    boxes[5].innerHTML != "" &&
    boxes[8].innerHTML != "" &&
    boxes[2].innerHTML === boxes[5].innerHTML &&
    boxes[2].innerHTML === boxes[8].innerHTML
  ) {
    setTime();
  }
  if (
    boxes[1].innerHTML != "" &&
    boxes[7].innerHTML != "" &&
    boxes[1].innerHTML === boxes[4].innerHTML &&
    boxes[1].innerHTML === boxes[7].innerHTML
  ) {
    setTime();
  }
  if (
    boxes[3].innerHTML != "" &&
    boxes[5].innerHTML != "" &&
    boxes[3].innerHTML === boxes[5].innerHTML &&
    boxes[3].innerHTML === boxes[4].innerHTML
  ) {
    setTime();
  }
  if (
    boxes[0].innerHTML != "" &&
    boxes[8].innerHTML != "" &&
    boxes[0].innerHTML === boxes[4].innerHTML &&
    boxes[0].innerHTML === boxes[8].innerHTML
  ) {
    setTime();
  }
  if (
    boxes[2].innerHTML != "" &&
    boxes[6].innerHTML != "" &&
    boxes[2].innerHTML === boxes[4].innerHTML &&
    boxes[2].innerHTML === boxes[6].innerHTML
  ) {
    setTime();
  }
}

function openWinnerPopup() {
  player = player === XPlayer ? OPlayer : XPlayer;
  popup.classList.add("open-popup");
  winnerPlayer.innerHTML = player;
}

function closePopup() {
  restartGame();
  popup.classList.remove("open-popup");
}

function restartGame() {
  boxes.forEach(box => {
    box.innerHTML = "";
  });
  buttons.forEach((button) => button.disabled = false);
}

let setTime = () => {
  setTimeout(() => {
    openWinnerPopup();
  }, 200);
};
