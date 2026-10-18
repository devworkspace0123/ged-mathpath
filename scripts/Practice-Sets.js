import {practiceSets} from "../utils/data.js";


const setContainer = document.querySelector('.sets-container');


practiceSets.forEach(practice => {
    const button = document.createElement("button");
    button.innerHTML = `
    <h2>${practice.name}</h2>
    `
    setContainer.appendChild(button);

    button.addEventListener("click", () => {
        window.location.href = `../pages/set-practice.html?set=${practice.id}`;
    })
})