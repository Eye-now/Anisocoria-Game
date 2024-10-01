let currentCase = 0; // Initialize at the start of the game
let score = 0; // To keep track of the score

const cases = [
    {
        description: "A 30-year-old male presents with unequal pupil sizes. The right pupil is larger in dim light...",
        correctAnswer: 2, // Example: Horner's Syndrome
    },
    {
        description: "A 22-year-old female presents with a slow response to light in one eye, and larger pupil on the right...",
        correctAnswer: 4, // Example: Adie's Pupil
    },
    // Add more cases here
];

function submitAnswer(answer) {
    const isCorrect = parseInt(answer) === cases[currentCase].correctAnswer;

    if (isCorrect) {
        score++;
        document.getElementById('result-message').textContent = "Correct! You've earned 1 point.";
    } else {
        document.getElementById('result-message').textContent = "Incorrect. The correct answer is option " + cases[currentCase].correctAnswer;
    }

    // After showing the result, move to the next case
    currentCase++;

    // Show the next case or end the game if there are no more cases
    if (currentCase < cases.length) {
        displayNextCase();
    } else {
        endGame();
    }

    // Hide the quiz and show the result
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
}

function displayNextCase() {
    const caseData = cases[currentCase];

    // Update the case description on the quiz interface
    document.getElementById('case-description').textContent = caseData.description;

    // Reset the answer selection for the next question
    resetAnswerSelection();

    // Show the quiz again
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

function resetAnswerSelection() {
    const answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
        button.classList.remove('selected'); // You can add logic here if you want to manage selections
    });
}

function endGame() {
    // Hide the quiz section
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';

    // Show the final score
    document.getElementById('final-score').textContent = `Your final score is ${score} out of ${cases.length}.`;

    // Provide a restart option
    document.getElementById('restart-button').style.display = 'block'; // Show a restart button
}

function restartGame() {
    currentCase = 0;
    score = 0;
    document.getElementById('final-score').textContent = ''; // Clear the final score

    // Hide the restart button and show the first case
    document.getElementById('restart-button').style.display = 'none';
    displayNextCase();
}

function adjustPupils() {
    const leftPupilSize = document.getElementById('leftPupilSlider').value;
    const rightPupilSize = document.getElementById('rightPupilSlider').value;

    // Update the displayed sizes
    document.getElementById('leftPupilSize').textContent = leftPupilSize;
    document.getElementById('rightPupilSize').textContent = rightPupilSize;

    // Adjust the pupil size in the DOM
    const leftPupil = document.getElementById('leftPupil');
    const rightPupil = document.getElementById('rightPupil');

    leftPupil.style.width = leftPupilSize * 10 + 'px';  // Scale the pupil size
    leftPupil.style.height = leftPupilSize * 10 + 'px';
    
    rightPupil.style.width = rightPupilSize * 10 + 'px';
    rightPupil.style.height = rightPupilSize * 10 + 'px';
}

// Initialize the first case
document.addEventListener("DOMContentLoaded", function() {
    displayNextCase();
});
