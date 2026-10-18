
import { practiceTitles } from "../utils/data.js";

const params = new URLSearchParams(window.location.search);
const quizId = params.get("quiz");

const titleContainer = document.querySelector(".title");
const questionContainer = document.querySelector(".question");
const optionsContainer = document.querySelector(".option");
const explanationContainer = document.querySelector(".explaination");
const nextButton = document.querySelector(".nextBtn");
const resultContainer = document.querySelector(".result");
const resultMessage = document.querySelector(".result-message");
const nextQuizContainer = document.querySelector(".next-quiz");

let questionIndex = 0;
let correct = 0;
let incorrect = 0;
let answered = false;
let quizData;

const quiz = practiceTitles.find(
    item => String(item.id) === quizId
);

function renderMath(element) {
    if (
        window.MathJax &&
        typeof window.MathJax.typesetPromise === "function"
    ) {
        return window.MathJax.typesetPromise([element]);
    }

    return Promise.resolve();
}

function updateResults() {
    const total = quizData.questions.length;
    const percentage = total
        ? Math.round((correct / total) * 100)
        : 0;

    resultContainer.innerHTML = `
        <div class="result-item">
            <i class="fa-solid fa-circle-check correct-icon"></i>
            <span>Correct: ${correct}</span>
        </div>

        <div class="result-item">
            <i class="fa-solid fa-circle-xmark incorrect-icon"></i>
            <span>Incorrect: ${incorrect}</span>
        </div>

        <div class="result-item">
            <i class="fa-solid fa-percent percent-icon"></i>
            <span>Percent Correct: ${percentage}%</span>
        </div>

        <div class="result-item">
            <i class="fa-solid fa-list-ol questions-icon"></i>
            <span>Total Questions: ${total}</span>
        </div>
    `;
}

async function showQuestion() {
    const questions = quizData.questions;

    // Finish without trying to read a nonexistent question.
    if (questionIndex >= questions.length) {
        questionContainer.innerHTML = "";
        optionsContainer.innerHTML = "";
        explanationContainer.innerHTML = "";

        resultMessage.textContent = "Quiz completed!";
        nextButton.hidden = true;

        const link = document.createElement("a");
        link.href = "../pages/practice-topics.html";
        link.textContent = "Back to Practice Topics";

        nextQuizContainer.replaceChildren(link);
        updateResults();
        return;
    }

    const currentQuestion = questions[questionIndex];

    answered = false;
    nextButton.disabled = true;
    nextButton.hidden = false;
    nextButton.textContent = "Next Question";
    resultMessage.textContent =
        `Question ${questionIndex + 1} of ${questions.length}`;

    nextQuizContainer.replaceChildren();

    // Clear previously rendered MathJax before replacing content.
    if (window.MathJax?.typesetClear) {
        window.MathJax.typesetClear([
            questionContainer,
            optionsContainer,
            explanationContainer
        ]);
    }

    questionContainer.innerHTML = currentQuestion.question ?? "";
    optionsContainer.replaceChildren();
    explanationContainer.replaceChildren();

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.innerHTML = option;
        button.addEventListener("click", () => {
            selectAnswer(button, index, currentQuestion);
        });

        optionsContainer.appendChild(button);
    });

    updateResults();

    try {
        await renderMath(questionContainer);
        await renderMath(optionsContainer);
    } catch (error) {
        console.error("Unable to render question math:", error);
    }
}

async function selectAnswer(selectedButton, selectedIndex, question) {
    if (answered) return;
    answered = true;

    const optionButtons = optionsContainer.querySelectorAll("button");

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Assumes question.answer is the zero-based option index.
    const isCorrect = selectedIndex === question.answer;

    if (isCorrect) {
        correct++;
        selectedButton.style.backgroundColor = "#1AAC67";
        selectedButton.style.color = "#ffffff";
        selectedButton.style.borderColor = "#1AAC67";
    } else {
        incorrect++;
        selectedButton.style.backgroundColor = "#F04438";
        selectedButton.style.color = "#ffffff";
        selectedButton.style.borderColor = "#F04438";

        // Highlight the correct option, if the answer is a valid index.
        if (
            Number.isInteger(question.answer) &&
            optionButtons[question.answer]
        ) {
            optionButtons[question.answer].style.border =
                "2px solid #1AAC67";
        }
    }

    explanationContainer.innerHTML = `
        <div class="explain">
            <h2>Explanation</h2>
            ${question.explanation ?? "No explanation is available for this question."}
        </div>
    `;

    updateResults();
    nextButton.disabled = false;

    try {
        await renderMath(explanationContainer);
    } catch (error) {
        console.error("Unable to render explanation math:", error);
    }
}

async function loadQuiz() {
    try {
        if (!titleContainer || !questionContainer || !optionsContainer) {
            throw new Error("One or more quiz elements are missing.");
        }

        if (!quiz) {
            throw new Error("Quiz not found. Please select a valid topic.");
        }

        titleContainer.replaceChildren();

        const heading = document.createElement("h1");
        heading.textContent = quiz.name;
        titleContainer.appendChild(heading);

        const response = await fetch(quiz.file);

        if (!response.ok) {
            throw new Error(`Failed to load quiz: ${response.status}`);
        }

        quizData = await response.json();

        if (
            !Array.isArray(quizData.questions) ||
            quizData.questions.length === 0
        ) {
            throw new Error("This quiz contains no questions.");
        }

        await showQuestion();

    } catch (error) {
        console.error("Error loading quiz:", error);

        titleContainer.textContent = "Unable to Load Quiz";
        questionContainer.textContent =
            "We couldn't load this quiz. Please return to the practice topics and try again.";

        optionsContainer.replaceChildren();
        explanationContainer.replaceChildren();
        resultMessage.textContent = "";
        nextButton.hidden = true;
    }
}

nextButton.addEventListener("click", async () => {
    if (nextButton.disabled || !answered) return;

    questionIndex++;
    await showQuestion();
});

loadQuiz();
