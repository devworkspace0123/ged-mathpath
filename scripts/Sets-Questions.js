import {practiceSets} from "../utils/data.js";
import {isImage} from "../utils/data.js";
import {answers} from "../utils/data.js";
import {isAnswered} from "../utils/data.js";
import {result} from "../utils/data.js";


const formulaSheetBtn = document.querySelector('.formula-sheet');
formulaSheetBtn.addEventListener('click', () => {
    const formulaSheetContainer = document.querySelector('.formulaSheet');
    formulaSheetContainer.innerHTML =`
        <button id="close-icon" class="fa-solid fa-close" style="background-color: gray;border: 1px solid black; width: 40px
        ; height: 30px " ></button>
        <img src="../images/formula-sheet.jpg" alt="image-formula-sheet">
        `
    formulaSheetContainer.hidden = false;
    document.querySelector('#close-icon').addEventListener('click', () => {
        formulaSheetContainer.hidden = true;
    })
})


const params = new URLSearchParams(window.location.search);
const practiceID = params.get('set');



const practiceSet = practiceSets.find(
    practice => String(practice.id) === practiceID
);

if (!practiceSet) {
    document.querySelector('.question').textContent =
        'Practice set not found. Please return to Practice Sets and try again.';
    throw new Error(`No practice set found for ID: ${practiceID}`);
}

const practiceFile = practiceSet.file;




let questionNumber = 1;
let questionIndex = 0;



const descriptionContainer = document.querySelector('.description');
const questionContainer = document.querySelector('.question');
const imageContainer = document.querySelector('.image');
const optionContainer = document.querySelector('.options');
const PreviousButton = document.querySelector('.previousBtn');
const NextButton = document.querySelector('.nextBtn');






async function loadData(){
    try{
        const response = await fetch(practiceFile);
        const data = await response.json();
        
        document.querySelector('.questionNumber').innerText = `Question ${questionNumber} of ${data.questions.length}`;

        if(questionIndex >= data.questions.length){
            window.location.replace(`../pages/review.html?set=${practiceID}`);
        }

        if(questionIndex !== 0){
            PreviousButton.style.display="block";
        }
        else{
            PreviousButton.style.display="none";
        }


        optionContainer.innerHTML = '';
        questionContainer.innerHTML = '';


        const description = data.questions[questionIndex].description;
        const image = data.questions[questionIndex].image;
        const question = data.questions[questionIndex].question;
        const answer = data.questions[questionIndex].answer;


        if(description !== undefined){
            descriptionContainer.innerHTML = `<p>${description}</p>`;
            descriptionContainer.style.display = 'block';
        }
        else{
            descriptionContainer.innerHTML = '';
            descriptionContainer.style.display = 'none';
        }


        if (image !== undefined) {
            imageContainer.style.display = "block";
            imageContainer.innerHTML = `<img src="${image}" style="height: 300px">`;
        }
        else {
            imageContainer.innerHTML = "";
            imageContainer.style.display = "none";
        }


        if(data.questions[questionIndex].isTable === true){
            imageContainer.innerHTML = `<img src="${image}" style="height: 170px">`
        }


        questionContainer.innerHTML = `<p>${question}</p>`;
        const options = data.questions[questionIndex].options;


        options.forEach((option, index) => {
            const label = document.createElement('label')
            label.classList.add('question-label');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.value = index;
            radio.name = "Single-option-quiz"

            label.appendChild(radio);


            if(isImage(option)){
                const imageNode = document.createElement('img');
                imageNode.src = option;
                imageNode.alt = "Image";
                imageNode.style.height = '250px'
                imageNode.style.width = '250px'
                label.appendChild(imageNode);
            }
            else{
                const textNode = document.createTextNode(` ${option}`);
                label.appendChild(textNode);
            }


            optionContainer.appendChild(label);




            radio.addEventListener('change', () => {
                answers[questionIndex] = index
                localStorage.setItem(
                    'quizAnswers',
                    JSON.stringify(answers))


            })
            radio.addEventListener('change', () =>{
                result[questionIndex] = index;
                localStorage.setItem(
                    'userChoices',
                    JSON.stringify(result)
                )
            })

            if(answers[questionIndex] === index){
                radio.checked = true;

            }

            localStorage.setItem('Answered', JSON.stringify(isAnswered));

        })




    }


    catch(error){
        console.log(error);
    }


    if (window.MathJax?.typesetPromise) {
    await window.MathJax.typesetPromise();
}

}

loadData();


NextButton.addEventListener('click', () => {
    questionNumber++;
    questionIndex++
    loadData();
})

PreviousButton.addEventListener('click', () => {
    questionNumber--;
    questionIndex--;
    loadData();
})







