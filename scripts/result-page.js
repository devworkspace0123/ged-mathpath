
import { practiceSets, result } from "../utils/data.js";

const params = new URLSearchParams(window.location.search);
const practiceID = params.get("set");

const scoreContainer = document.querySelector(".score");
const resultContainer = document.querySelector(".result");

async function dataAnswer() {
    try {
        const practiceSet = practiceSets.find(
            practice => practice.id === practiceID
        );

        if (!practiceSet) {
            resultContainer.textContent =
                "Practice test not found. Please return and select a test.";
            return;
        }

        const response = await fetch(practiceSet.file);

        if (!response.ok) {
            throw new Error(`Failed to load questions: ${response.status}`);
        }

        const data = await response.json();
        const questions = data.questions;

        if (!Array.isArray(questions) || questions.length === 0) {
            throw new Error("No questions were found for this practice test.");
        }

        let score = 0;
        let wrong = 0;

        questions.forEach((question, index) => {
            // Only count a question as correct when an answer exists
            // and matches the correct answer.
            if (
                result[index] !== undefined &&
                result[index] !== null &&
                result[index] !== "" &&
                result[index] === question.answer
            ) {
                score++;
            } else {
                wrong++;
            }
        });

        const total = questions.length;
        const percentage = (score / total) * 100;

        let scoreRange;
        let resultMessage;

        if (percentage < 40) {
            scoreRange = "100–125";
            resultMessage = "Below Passing";
        } else if (percentage < 50) {
            scoreRange = "125–144";
            resultMessage = "Below Passing";
        } else if (percentage < 60) {
            scoreRange = "140–150";
            resultMessage = "Around Passing";
        } else if (percentage < 70) {
            scoreRange = "150–160";
            resultMessage = "Passing";
        } else if (percentage < 80) {
            scoreRange = "160–170";
            resultMessage = "Passing";
        } else if (percentage < 90) {
            scoreRange = "170–180";
            resultMessage = "College Ready";
        } else {
            scoreRange = "180–200";
            resultMessage = "College Ready + Possible College Credit";
        }

        scoreContainer.textContent = scoreRange;

        resultContainer.innerHTML = `
            <h2>${resultMessage}</h2>
        `;

    } catch (error) {
        console.error("Error loading practice results:", error);

        resultContainer.textContent =
            "Unable to load your results. Please try again.";
    }
}

dataAnswer();
