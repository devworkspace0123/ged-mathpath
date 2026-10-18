import {titlesData} from '../utils/data.js';

let number = 1;
let container = document.querySelector('.title-btn');


titlesData.forEach(title => {
    const button = document.createElement('button');
    button.innerHTML = `<div class="titles"><h2>${title.name}</h2> \n
                        <p>${title.description}</p
                        </div>
                        <div class="lessons-number">${number}</div>`;
    container.appendChild(button);
    number++;

    button.addEventListener('click', () => {
       window.location.href = `../pages/lesson.html?lesson=${title.id}`;
    })
});

