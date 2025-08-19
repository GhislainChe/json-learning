const questions = [
    {
        question: "What is pollution?",
        answers: [
            { text: "Cleaning the environment", correct: false },
            { text: "Making the earth dirty", correct: true },
            { text: "planting trees", correct: false },
            { text: "Recycling bottles", correct: false },
        ]
    },
    {
        question: "How many years can a plastic bottle stay in nature?",
        answers: [
            { text: "50 years", correct: false },
            { text: "20 years", correct: false },
            { text: "450 years", correct: true },
            { text: "1000 years", correct: false },
        ]
    },
    {
        question: "Which type of pollution is caused by burning trash?",
        answers: [
            { text: "water pollution", correct: false },
            { text: "sound pollution", correct: false },
            { text: "land pollution", correct: false },
            { text: "air pollution", correct: true },
        ]
    },
    {
        question: "How many people die each year because of air pollution?",
        answers: [
            { text: "7 million", correct: true },
            { text: "100 million", correct: false },
            { text: "5 million", correct: false },
            { text: "10 million", correct: false },
        ]
    },
    {
        question: "Which of the following is a cause of pollution?",
        answers: [
            { text: "planting trees", correct: false },
            { text: "throwing waste into the rivers", correct: true },
            { text: "using public transport", correct: false },
            { text: "recycling plastics", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct ? "true" : "false";
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();


