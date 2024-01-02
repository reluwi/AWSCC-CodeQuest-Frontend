// Step 1: Define the choices available in the game
const choices = ["rock", "paper", "scissors"];

// Step 2: Get references to HTML elements
const player1ChoiceDisplay = document.getElementById("player1-choice-display"); // Get the element with the id of "player1-choice-display"
const player1ScoreDisplay = document.getElementById("player1-score"); // Get the element with the id of "player1-score"
const player2ChoiceDisplay = document.getElementById("player2-choice-display"); // Get the element with the id of "player2-choice-display"
const player2ScoreDisplay = document.getElementById("player2-score"); // Get the element with the id of "player2-score"

const gameStatusDisplay = document.getElementById("game-status"); // Get the element with the id of "game-status"
const resetGameButton = document.getElementById("reset-game-btn"); // Get the element with the id of "reset-game-btn"

const rockBtn = document.getElementById("rock-btn"); // Get the element with the id of "rock-btn"
const paperBtn = document.getElementById("paper-btn"); // Get the element with the id of "paper-btn"
const scissorsBtn = document.getElementById("scissors-btn"); // Get the element with the id of "scissors-btn"

// Step 3: Add event listeners to the buttons
rockBtn.addEventListener("click", function () {
    roundPick("rock");
});

paperBtn.addEventListener("click", function () {
    roundPick("paper");
});

scissorsBtn.addEventListener("click", function () {
    roundPick("scissors");
});

resetGameButton.addEventListener("click", function () { 
    gameReset();
});

let player1Score = 0;
let player2Score = 0;

// Step 4: Define helper functions that will be the actions of the game
function getImagePath(choice) {
    return `${choice}.png`;
}

function roundPick(player1Choice) {
    player1ChoiceDisplay.textContent = "?";
    player2ChoiceDisplay.textContent = "?";
    
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];
    
    setTimeout(function() {
        player1ChoiceDisplay.innerHTML = `<img id="player1-choice-img" src="${getImagePath(player1Choice)}" alt="Player 1 Choice">`;
        player2ChoiceDisplay.innerHTML = `<img id="player2-choice-img" src="${getImagePath(player2Choice)}" alt="Player 2 Choice">`;
    }, 800);

    gameStatusDisplay.textContent = "Waiting for the result...";

    const roundWinner = determineWinner(player1Choice, player2Choice);

    setTimeout(function() {
        updateScore(roundWinner);
    }, 800);
    
    if (player1Score == 5) {
        endGame("Player 1");
    } else if (player2Score == 5) {
        endGame("Player 2");
    }
}

function endGame(roundWinner) {
    gameStatusDisplay.textContent = `${roundWinner} WINS!`;
    disableButtons();
}

function determineWinner(player1Choice, player2Choice) {
    if(player1Choice === player2Choice) {
        return "draw";
    } 
    else if(player1Choice === "rock" && player2Choice === "scissors" || 
            player1Choice === "paper" && player2Choice === "rock" || 
            player1Choice === "scissors" && player2Choice === "paper") {
                return "Player 1";
    }
    else {
        return "Player 2";
    }
}

function updateScore(roundWinner) {
    if(roundWinner === "Player 1") {
        player1Score++;
        gameStatusDisplay.textContent = "Player 1 has won the round!";
    }
    else if(roundWinner === "Player 2") {
        player2Score++;
        gameStatusDisplay.textContent = "Player 2 has won the round!";
    }
    else {
        gameStatusDisplay.textContent = "It's a draw!";
    }

    player1ScoreDisplay.textContent = player1Score;
    player2ScoreDisplay.textContent = player2Score;

    if (player1Score == 5 || player2Score == 5) {
        endGame(roundWinner === "Player 1" ? "Player 1" : "Player 2");
    }
}

function gameReset() {
    player1ChoiceDisplay.textContent = "";
    player2ChoiceDisplay.textContent = "";
    player1ScoreDisplay.textContent = "0";
    player2ScoreDisplay.textContent = "0";
    player1Score = 0;
    player2Score = 0;
    gameStatusDisplay.textContent = "SHOW YOUR HAND TO START THE GAME!";
    enableButtons();
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Step 5: Embrace mistakes as opportunities for learning and improvement, and fuel your curiosity by exploring new the wonders of frontend development. The vast tech world is filled with exciting discoveries waiting for you. Ask when you have the need or want to! Just keep coding!