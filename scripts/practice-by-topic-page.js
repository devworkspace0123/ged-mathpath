import {practiceTitles} from "../utils/data.js";

const titlesContainer = document.querySelector('.practice-container');
let practiceNumber = 1;

practiceTitles.forEach(title => {
    const button = document.createElement('button');
    button.innerHTML = `
       <h2>${title.name}</h2>
        <p>${title.description}</p>
        <p>${practiceNumber}</p>`

    titlesContainer.appendChild(button);

    practiceNumber++;

    button.addEventListener('click', () => {
        window.location.href = `../pages/topic-quiz.html?quiz=${title.id}`;
    })
})

