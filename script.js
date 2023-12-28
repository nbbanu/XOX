const buttons = document.querySelectorAll(".player-input");
const whichPlayer = document.querySelector(".which-player");
const boxes = document.querySelectorAll(".box");

let XPlayer = "X";
let OPlayer = "O";
let player = XPlayer;


startGame(); //oyuncu seçmeden devam edersek
buttons.forEach((button) => button.addEventListener("click", selectPlayer));

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
  //   button.setAttribute("disabled", "");
}


function startGame() {
  console.log(player);
  boxes.forEach((box) => {
    box.removeEventListener("click",handleClick);
    box.addEventListener("click", handleClick);
  });
}
function handleClick(e){

  console.log(player)
  // whichPlayer.innerHTML = `
  //   <span>${player}</span> koyan oyuncunun sırası
  //   `
  e.target.innerHTML = player;
  player = player === XPlayer ? OPlayer : XPlayer
  isGameOVer();
}

function isGameOVer(){
  if(boxes[0].innerHTML ===boxes[1].innerHTML && boxes[0].innerHTML===boxes[2].innerHTML){
    setTimeout(() =>{
      alert(boxes[0].innerHTML + " kazandı")
    },200)
    
  }
}