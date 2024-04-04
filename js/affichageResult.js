import { resultTirage } from "./resultTirage";


export function renduResult() {
 

        const NombreBon = resultTirage();
        const mainElement = document.querySelector('main');

        const resultatTitle = document.createElement('h2');
        resultatTitle.classList.add('h2Result');
        resultatTitle.textContent = `Vous avez ${NombreBon} bons numéros.`;
        mainElement.appendChild(resultatTitle);
    
}