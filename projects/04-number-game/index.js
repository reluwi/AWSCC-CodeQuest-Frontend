let difficulty;
let minDifficultyRange = 1;
let maxDifficultyRange = 10;

let secretNumber = generateRandomNumber(minDifficultyRange, maxDifficultyRange);
let attempts = 1;

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showDifficultyButtons() {
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('difficultyButtons').style.display = 'block';
}

function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty;

    switch (difficulty) {
        case 'beginner':
            minDifficultyRange = 1;
            maxDifficultyRange = 10;
            break;
        case 'intermediate':
            minDifficultyRange = 1;
            maxDifficultyRange = 100;
            break;
        case 'hardcore':
            minDifficultyRange = 1;
            maxDifficultyRange = 500;
            break;
        default:
            minDifficultyRange = 1;
            maxDifficultyRange = 10;
    }

    // Set the range in the UI
    document.getElementById('minRange').textContent = minDifficultyRange;
    document.getElementById('maxRange').textContent = maxDifficultyRange;

    document.getElementById('frontPage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';

    // Generate a new random number 
    secretNumber = generateRandomNumber(minDifficultyRange, maxDifficultyRange);

    attempts = 1;
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    // Check if the guess is within the valid range
    if (userGuess < minDifficultyRange || userGuess > maxDifficultyRange) {
        displayError(`Please enter a number between ${minDifficultyRange} and ${maxDifficultyRange}.`);
        return;
    } else {
        clearError();
    }

    // Check if the guess is correct, too high, or too low
    if (userGuess === secretNumber) {
        displayFeedback(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
        showPlayAgain();
    } else {
        // Check if the guess is near the correct number
        const proximityThreshold = getProximityThreshold();
        const distance = Math.abs(userGuess - secretNumber);

        if (distance <= proximityThreshold) {
            displayFeedback("Hang in there! It seems to be just right.");
        } else if (userGuess < secretNumber) {
            displayFeedback('Too low. Try again.');
        } else {
            displayFeedback('Too high. Try again.');
        }

        // Increment the number of attempts
        attempts++;
    }
}

function getProximityThreshold() {
    // Set proximity thresholds based on difficulty
    switch (difficulty) {
        case 'beginner':
            return 2;
        case 'intermediate':
            return 5;
        case 'hardcore':
            return 10;
        default:
            return 0;
    }
}

function resetGame() {
    // Go back to the difficulty buttons
    document.getElementById('frontPage').style.display = 'block';
    document.getElementById('gamePage').style.display = 'none';
    document.getElementById('userGuess').value = '';
    secretNumber = generateRandomNumber();
    attempts = 1;
    clearFeedback();
    clearError();
    hidePlayAgain();
}

function endGame() {
    // Go back to the front page
    document.getElementById('frontPage').style.display = 'block';
    document.getElementById('gamePage').style.display = 'none';
    document.getElementById('userGuess').value = '';
    document.getElementById('difficultyButtons').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
    secretNumber = generateRandomNumber();
    attempts = 1;
    clearFeedback();
    clearError();
    hidePlayAgain();
}

function displayError(message) {
    document.getElementById('error').innerHTML = message;
}

function clearError() {
    document.getElementById('error').innerHTML = '';
}

function displayFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerHTML = message;
    
    feedbackElement.style.opacity = '1';

    setTimeout(function() {
        feedbackElement.style.opacity = '0.5';
    }, 500);
}

function clearFeedback() {
    document.getElementById('feedback').innerHTML = '';
}

function showPlayAgain() {
    document.getElementById('playAgain').style.display = 'block';
}

function hidePlayAgain() {
    document.getElementById('playAgain').style.display = 'none';
}