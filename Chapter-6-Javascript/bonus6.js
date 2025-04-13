// Variables to track game state
let correctColor;
let lives = 3;
let score = 0;

// DOM Elements
const rgbDisplay = document.getElementById("rgbDisplay");
const colorOptions = document.getElementById("colorOptions");
const message = document.getElementById("message");
const livesDisplay = document.getElementById("lives");
const scoreDisplay = document.getElementById("score");
const resetBtn = document.getElementById("resetBtn");

// Generate random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Start or restart the game
function startGame() {
  colorOptions.innerHTML = "";
  message.textContent = "";

  // Generate the correct color
  correctColor = getRandomColor();
  rgbDisplay.textContent = correctColor;

  // Choose random index for correct option
  const correctIndex = Math.floor(Math.random() * 3);

  for (let i = 0; i < 3; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");

    // Assign correct color to one box, rest are random
    const color = i === correctIndex ? correctColor : getRandomColor();
    colorBox.style.backgroundColor = color;

    // Add event listener for click
    colorBox.addEventListener("click", () => checkAnswer(color));
    colorOptions.appendChild(colorBox);
  }
}

// Handle user selection
function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    message.textContent = "Correct!";
    score++;
  } else {
    message.textContent = "Wrong!";
    lives--;
  }

  updateInfo();

  if (lives > 0) {
    setTimeout(startGame, 1000);
  } else {
    message.textContent = `Game Over! Final Score: ${score}`;
    rgbDisplay.textContent = "rgb(?, ?, ?)";
    colorOptions.innerHTML = "";
  }
}

// Update lives and score
function updateInfo() {
  livesDisplay.textContent = lives;
  scoreDisplay.textContent = score;
}

// Restart the game
resetBtn.addEventListener("click", () => {
  lives = 3;
  score = 0;
  updateInfo();
  startGame();
});

// Initial game start
startGame();
