"use strict";

// Define min and max score in game! DRY principle
const MIN_SCORE = 0;
const MAX_SCORE = 20;

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;

  switch (true) {
    case !guess:
      displayMessage("⛔️ No number!");
      break;

    case guess === randomNumber:
      displayMessage("🎉 Correct Number!");
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector(".number").style.width = "25rem";
      document.querySelector("body").style.backgroundColor = "#60b347";

      //Update highScore
      highScore = score > highScore ? score : highScore;
      console.log(highScore);
      document.querySelector(".highscore").textContent = highScore;
      break;

    case guess !== randomNumber:
      if (score > 0) {
        displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
      break;

    default:
        console.error(`${guess} is neither falsy value(empty) nor ${randomNumber} nor a wrong number`);
      break;
  }
});

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
