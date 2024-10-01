// Game state variables
let currentCase = 0;
let score = 0;

// Case data (for multiple patients)
const cases = [
  {
    description: "A 30-year-old male presents with unequal pupil sizes. The right pupil is larger in dim light...",
    correctAnswer: 2, // Horner's Syndrome
  },
  {
    description: "A 22-year-old female presents with a slow response to light in one eye, and larger pupil on the right...",
    correctAnswer: 4, // Adie's Pupil
  }
  // Add more cases as needed
];

// Start with the first case
window.onload = function () {
  loadCase();
};

// Load the current patient case
function loadCase() {
  const caseDescription = document.getElementById('case-description');
  caseDescription.textContent = cases[currentCase].description;
  resetPupils();
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('result').style.display = 'none';
}

// Adjust pupil sizes interactively
function adjustPupils() {
  const leftPupilSlider = document.getElementById('leftPupilSlider').value;
  const rightPupilSlider = document.getElementById('rightPupilSlider').value;

  document.getElementById('leftPupilSize').textContent = leftPupilSlider;
  document.getElementById('rightPupilSize').textContent = rightPupilSlider;

  const leftPupil = document.getElementById('leftEye').querySelector('::before');
  const rightPupil = document.getElementById('rightEye').querySelector('::before');

  leftPupil.style.width = leftPupilSlider * 3 + 'px'; // Scale pupil size
  leftPupil.style.height = leftPupilSlider * 3 + 'px';
  rightPupil.style.width = rightPupilSlider * 3 + 'px';
  rightPupil.style.height = rightPupilSlider * 3 + 'px';
}

// Check the selected answer
function submitAnswer(answer) {
  const isCorrect = answer === cases[currentCase].correctAnswer;

  if (isCorrect) {
    score++;
    document.getElementById('result-message').textContent = "Correct!";
  } else {
    document.getElementById('result-message').textContent = "Incorrect. Try again!";
  }

  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
}

// Move to the next patient case
function nextCase() {
  currentCase++;

  if (currentCase < cases.length) {
    loadCase();
  } else {
    alert("You've completed all cases! Your score: " + score + "/" + cases.length);
  }
}

// Reset pupil sizes
function resetPupils() {
  document.getElementById('leftPupilSlider').value = 5;
  document.getElementById('rightPupilSlider').value = 5;
  adjustPupils();
}
