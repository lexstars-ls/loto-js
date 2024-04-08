// affiche la phrase du résultat
import { resultTirage } from "./resultTirage";

export function renduResult() {
        const NombreBon = resultTirage();
        if (NombreBon >= 0) {
                const mainElement = document.querySelector('main');

                const resultatTitle = document.createElement('h2');
                resultatTitle.classList.add('h2Result');

                mainElement.appendChild(resultatTitle);

                switch (NombreBon) {
                        case 0:
                                resultatTitle.textContent = `Vous avez ${NombreBon} bon numéro. Ne jouez plus au loto de votre vie.`;
                                break;
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                                resultatTitle.textContent = `Vous avez ${NombreBon} bon(s) numéro(s). Bien essayé, mais abandonnez.`;
                                break;
                        case 6:
                                resultatTitle.textContent = `Vous avez ${NombreBon} bon(s) numéro(s). INCROYABLE, vous allez finir aux Bahamas !`;
                                break;
                        default:
                                console.log(`${NombreBon}`);
                }
        }
}

