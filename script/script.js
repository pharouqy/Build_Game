const player1 = document.getElementById("player1");
const result = document.getElementById("result");
const player2 = document.getElementById("player2");
const btn = document.getElementById("btn");

handlePlay();

function randomHands() {
  const hands = ["✊", "✌️", "🤚"];
  const randomIndex1 = Math.floor(Math.random() * 3);
  const randomIndex2 = Math.floor(Math.random() * 3);
  player1.textContent = hands[randomIndex1];
  player2.textContent = hands[randomIndex2];
}

function play() {
  player1.style.backgroundColor = "#fff";
  player2.style.backgroundColor = "#fff";
  if (player1.textContent === player2.textContent) {
    player1.style.backgroundColor = "#000";
    player2.style.backgroundColor = "#000";
    btn.removeAttribute("disabled");
    return (result.textContent = "It's a Tie!");
  } else {
    if (
      (player1.textContent === "✊" && player2.textContent === "✌️") ||
      (player1.textContent === "✌️" && player2.textContent === "🤚") ||
      (player1.textContent === "🤚" && player2.textContent === "✊")
    ) {
      player1.style.backgroundColor = "#000";
      btn.removeAttribute("disabled");
      return (result.textContent = "Player 1 wins !!!");
    } else {
      player2.style.backgroundColor = "#000";
      btn.removeAttribute("disabled");
      return (result.textContent = "Player 2 wins !!!");
    }
  }
}

function handlePlay() {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    result.textContent = "Suspense... !!!";
    btn.setAttribute("disabled", "");
    setTimeout(() => {
      randomHands();
      play();
    }, 3000);
  });
}
