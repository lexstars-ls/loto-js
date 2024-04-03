// Un fichier permettant de comparer le tirage et les valeurs du joueur
// retourne le nombre de chiffre similaire
import { numberValue } from "./numberValue";
import { tirageLoto } from "./tirageLoto";

export function resultTirage() {
    const playerNumber = numberValue();
    const tirage = tirageLoto();
    
    // Vérifiez si playerNumber a exactement 6 éléments
    if (playerNumber.length === 6) {
        let NombreBon = 0;

        // Ajoutez 'let' devant 'i' pour une portée locale
        for (let i = 0; i < playerNumber.length; i++) {
            if (playerNumber[i] === tirage[i]) {
                NombreBon++;
            }
        }

        document.getElementById('joue').disabled = true;
        document.getElementById('rejouer').disabled = false;

        
        const resultatTitle = document.createElement('h2');
        resultatTitle.textContent = `Vous avez ${NombreBon} bons numéros.`;
        document.querySelector('main').appendChild(resultatTitle);

        return NombreBon;
    } 
}

