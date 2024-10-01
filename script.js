const patients = [
    {
        description: "A 35-year-old male presents with a severe headache, nausea, and photophobia. The pupils are equal, round, and reactive to light.",
        question: "What is the most likely pathology?",
        options: [
            "Migraine",
            "Subarachnoid hemorrhage",
            "Cerebral aneurysm",
            "Normal findings"
        ],
        correctAnswer: "Migraine",
        explanation: "Migraine can cause pupil dilation and associated symptoms like headache and photophobia."
    },
    {
        description: "A 50-year-old female is found unresponsive. Her pupils are fixed and dilated.",
        question: "What does this pupil assessment suggest?",
        options: [
            "Opiate overdose",
            "Brain death",
            "Normal function",
            "Constricted pupils"
        ],
        correctAnswer: "Brain death",
        explanation: "Fixed and dilated pupils can indicate severe brain injury or brain death."
    },
    {
        description: "An elderly man is found unconscious with one pupil dilated and non-reactive, while the other is constricted.",
        question: "What could this indicate?",
        options: [
            "Normal findings",
            "Third cranial nerve palsy",
            "Opiate overdose",
            "Concussion"
        ],
        correctAnswer: "Third cranial nerve palsy",
        explanation: "Unequal pupils may indicate a problem with the oculomotor nerve, often seen in brain injury."
    },
];

let currentPatientIndex = 0;
let score = 0;

// Function to start the game
function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    currentPatientIndex = 0; // Reset the patient index
    score = 0; // Reset score at the beginning
    document.getElementById("score").innerText = score; // Display initial score
    displayPatient();
}

// Function to display the current patient
function displayPatient() {
    const patient = patients[currentPatientIndex];
    document.getElementById("patientDescription").innerText = patient.description;
    document.getElementById("question").innerText = patient.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; // Clear previous options
    patient.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const patient = patients[currentPatientIndex];
    const resultDisplay = document.getElementById("resultDisplay");

    if (selectedOption === patient.correctAnswer) {
        score++;
        resultDisplay.innerText = "Correct! " + patient.explanation;
    } else {
        resultDisplay.innerText = "Incorrect! The correct answer was: " + patient.correctAnswer + ". " + patient.explanation;
    }

    document.getElementById("score").innerText = score; // Update score display
    document.getElementById("nextButton").style.display = "block"; // Show next button
}

// Function to proceed to the next patient
function nextPatient() {
    currentPatientIndex++;
    document.getElementById("resultDisplay").innerText = ""; // Clear the previous result
    if (currentPatientIndex < patients.length) {
        displayPatient();
        document.getElementById("nextButton").style.display = "none"; // Hide the next button until the answer is checked
    } else {
        endGame();
    }
}

// Function to end the game and show the score
function endGame() {
    document.getElementById("game").style.display = "none";
    const resultMessage = `Game Over! Your final score is ${score} out of ${patients.length}.`;
    document.body.innerHTML = `<h2>${resultMessage}</h2><button onclick="restartGame()">Play Again</button>`;
}

// Function to restart the game
function restartGame() {
    currentPatientIndex = 0; // Reset the patient index
    score = 0; // Reset score
    document.body.innerHTML = `
        <header>
            <h1>Pupil Assessment and Pathology Game</h1>
        </header>
        <main>
            <section id="intro">
                <h2>Welcome to the Pupil Assessment Game</h2>
                <p>In this game, you will learn how to assess pupils in an A&E setting.</p>
                <p>You'll start by learning about:</p>
                <ul>
                    <li><
