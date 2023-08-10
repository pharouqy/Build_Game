const player1 = document.getElementById("player1");
const result = document.getElementById("result");
const player2 = document.getElementById("player2");

handlePlay();

function randomHands() {
  const hands = ["✊", "✌️", "🤚"];
  const randomIndex1 = Math.floor(Math.random() * 3);
  const randomIndex2 = Math.floor(Math.random() * 3);
  player1.textContent = hands[randomIndex1];
  player2.textContent = hands[randomIndex2];
}

function play() {
  if (player1.textContent === player2.textContent) {
    return (result.textContent = "It's a Tie!");
  } else {
    if (
      (player1.textContent === "✊" && player2.textContent === "✌️") ||
      (player1.textContent === "✌️" && player2.textContent === "🤚") ||
      (player1.textContent === "🤚" && player2.textContent === "✊")
    ) {
      return (result.textContent = "Player 1 wins !!!");
    } else {
      return (result.textContent = "Player 2 wins !!!");
    }
  }
}

function handlePlay() {
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    result.textContent = "Suspense... !!!";
    setTimeout(() => {
      randomHands();
      play();
    }, 3000);
  });
}
