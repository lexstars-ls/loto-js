import { tirageLoto } from "./tirageLoto";
export function renduLoto() {
    const numerosTires = tirageLoto();
    const parentElement = document.getElementById("tirageContainer");

    for (let i = 0; i < numerosTires.length; i++) {
        const imgBoule = document.createElement('img');
        imgBoule.classList.add('imgContainer');
        imgBoule.src = './img/boule.png';

        const container = document.createElement('div');
        container.classList.add('imgContainer');

        const numéroBoule = document.createElement('h2');
        numéroBoule.classList.add('numéroBoule');
        numéroBoule.textContent = numerosTires[i]; // Utiliser le numéro tiré

        imgBoule.appendChild(numéroBoule);

        if (i === numerosTires.length - 1) { // Vérifie si c'est le dernier
            const imgJoker = document.createElement('img');
            imgJoker.classList.add('imgContainer');
            imgJoker.src = './img/joker.png';

            const numéroJoker = document.createElement('h2');
            numéroJoker.classList.add('numéroBoule');
            numéroJoker.textContent = numerosTires[i]; // Utiliser le numéro tiré

            const imgJokerContainer = document.createElement('div');
            imgJokerContainer.classList.add('imgContainer');
            imgJokerContainer.appendChild(imgJoker);
            imgJokerContainer.appendChild(numéroJoker);
            parentElement.appendChild(imgJokerContainer);
        } else {
            container.appendChild(imgBoule);
            container.appendChild(numéroBoule);
            parentElement.appendChild(container);
        }
    }
}