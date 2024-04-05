// affiche la phrase du résultat
import { resultTirage } from "./resultTirage";

export function renduResult() {
    const NombreBon = resultTirage();
    if (NombreBon >= 0) {
        const mainElement = document.querySelector('main');

        const resultatTitle = document.createElement('h2');
        resultatTitle.classList.add('h2Result');
        if (NombreBon === 0) {
            resultatTitle.textContent = `Vous n'avez aucun (${NombreBon}) bon numéro. Ne jouez plus au loto de votre vie.`;
        } else if (NombreBon > 0 && NombreBon < 5) {
            resultatTitle.textContent = `Vous avez ${NombreBon} bon(s) numéro(s). Bien essayé, mais abandonnez.`;
        } else {
            resultatTitle.textContent = `Vous avez ${NombreBon} bon(s) numéro(s). INCROYABLE, tu vas finir aux Bahamas !`;
        }
        mainElement.appendChild(resultatTitle);
    }
}

