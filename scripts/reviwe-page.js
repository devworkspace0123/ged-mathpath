import {answers} from "../utils/data.js";
import {isAnswered} from "../utils/data.js";
import {result} from "../utils/data.js";

const params = new URLSearchParams(window.location.search);
const practiceID = params.get('set');



const container = document.querySelector(".question-container");



for (let index = 0; index < 30; index++) {
    if(answers[index] === undefined){
        isAnswered[`Question ${index + 1}`] = `Unanswered`;
    }else{
        isAnswered[`Question ${index + 1}`] = `Answered`;
    }
}

for (let index = 0; index < 26; index++) {
    const questions = document.createElement('div');
    questions.classList.add('question');
    questions.innerHTML = `
    Question ${index + 1}\u00A0\u00A0\u00A0\u00A0${isAnswered[`Question ${index + 1}`]}`
    container.appendChild(questions);
}

document.querySelector('.endBtn').addEventListener('click', () =>{
    localStorage.removeItem('quizAnswers')
    localStorage.removeItem('Answered');
    window.location.replace(`../pages/result.html?set=${practiceID}`);
})

document.querySelector('.reviewBtn').addEventListener('click', () =>{
    window.location.replace(`../pages/set-practice.html?set=${practiceID}`);
})



