// Un fichier permettant de comparer le tirage et les valeurs du joueur
// retourne le nombre de chiffre similaire
import { numberValue } from "./nombrePlayer";
import { tirageLoto } from "./tirageLoto";

export function resultTirage() {
    const playerNumber = numberValue();
    const tirage = tirageLoto();
    
    // Vérifiez si playerNumber a exactement 6 éléments
    if (playerNumber.length === 6) {
        let NombreBon = 0;

        // Comparer les éléments des deux tableaux
        for (let i = 0; i < playerNumber.length; i++) {
            if (tirage.includes(playerNumber[i])) {
                NombreBon++;
            }
        }

        document.getElementById('joue').disabled = true;
        document.getElementById('rejouer').disabled = false;

        return NombreBon;
    } 
}



