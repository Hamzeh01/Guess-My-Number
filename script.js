"use strict";

// Define min and max score in the game 
const MIN_SCORE = 0;
const MAX_SCORE = 20;

// Game state variables
let randomNumber, score, highScore;

// Elements
const guessInput = document.querySelector(".guess");
const messageElement = document.querySelector(".message");
const numberElement = document.querySelector(".number");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");
const bodyElement = document.querySelector("body");

const initGame = () => {
  randomNumber = generateRandomNumber();
  score = MAX_SCORE;
  highScore = MIN_SCORE;
  displayMessage("Start guessing...");
  numberElement.textContent = "?";
  numberElement.style.width = "15rem";
  scoreElement.textContent = score;
  bodyElement.style.backgroundColor = "#0d0d0d";
};

const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = (message) => (messageElement.textContent = message);

const handleGuess = () => {
  const guess = +guessInput.value;

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === randomNumber) {
    handleCorrectGuess();
  } else {
    handleWrongGuess(guess);
  }
};

const handleCorrectGuess = () => {
  displayMessage("🎉 Correct Number!");
  numberElement.textContent = randomNumber;
  numberElement.style.width = "25rem";
  bodyElement.style.backgroundColor = "#4caf50";

  // Update highScore if necessary
  highScore = Math.max(score, highScore);
  highScoreElement.textContent = highScore;
};

const handleWrongGuess = (guess) => {
  if (score > 1) {
    displayMessage(guess > randomNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
    scoreElement.textContent = score;
  } else {
    displayMessage("💥 You lost the game!");
    scoreElement.textContent = 0;
  }
};

// Event listeners
document.querySelector(".check").addEventListener("click", handleGuess);
document.querySelector(".again").addEventListener("click", initGame);

// Initialize the game
initGame();
