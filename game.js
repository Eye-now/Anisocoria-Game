const scenarios = [
    {
        question: "A patient presents with anisocoria in light. What is your first assessment?",
        options: [
            { text: "Check for larger pupil abnormality", nextScenario: 1 },
            { text: "Check for smaller pupil abnormality", nextScenario: 2 }
        ],
        feedback: "Choose wisely based on the symptoms presented."
    },
    {
        question: "Is the larger pupil abnormal?",
        options: [
            { text: "Yes", nextScenario: 3 },
            { text: "No", nextScenario: 4 }
        ],
        feedback: "If it's larger, consider the next steps."
    },
    {
        question: "Is the smaller pupil abnormal?",
        options: [
            { text: "Yes", nextScenario: 5 },
            { text: "No", nextScenario: 6 }
        ],
        feedback: "Smaller pupil can indicate different conditions."
    },
    {
        question: "Consider pharmacologic mydriasis management.",
        options: [],
        feedback: "You've reached a conclusion. Good job!"
    },
    {
        question: "Consider tonic pupil evaluation.",
        options: [],
        feedback: "You've reached a conclusion. Good job!"
    },
    {
        question: "Consider evaluating for Horner's syndrome.",
        options: [],
        feedback: "You've reached a conclusion. Good job!"
    },
    {
        question: "Consider possible third nerve palsy.",
        options: [],
        feedback: "You've reached a conclusion. Good job!"
    },
];

let currentScenario = 0;

function startGame() {
    currentScenario = 0;
    document.getElementById("next-button").style.display = "none";
    displayScenario();
}

function displayScenario() {
    const scenario = scenarios[currentScenario];
    document.getElementById("scenario").textContent = scenario.question;

    const optionsContainer = document.querySelector(".answer-buttons");
    optionsContainer.innerHTML = ""; // Clear previous options

    scenario.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("answer-button");
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").style.display = "none";
}

function selectOption(index) {
    const selectedOption = scenarios[currentScenario].options[index];
    currentScenario = selectedOption.nextScenario;
    document.getElementById("feedback").textContent = scenarios[currentScenario].feedback;
    document.getElementById("feedback").style.display = "block";
    displayScenario();
    if (!scenarios[currentScenario].options.length) {
        document.getElementById("next-button").style.display = "block"; // Show the next button for final scenario
    }
}

function nextScenario() {
    if (currentScenario < scenarios.length - 1) {
        currentScenario++;
        displayScenario();
        document.getElementById("next-button").style.display = "none"; // Hide the button until it's needed
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById("scenario").textContent = "Thank you for playing!";
    document.getElementById("feedback").textContent = "You have completed the assessment!";
    document.querySelector(".answer-buttons").innerHTML = ""; // Clear answer buttons
}

// Start the game on page load
document.addEventListener("DOMContentLoaded", startGame);
