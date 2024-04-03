// Un fichier permettant de comparer le tirage et les valeurs du joueur
import { numberValue } from "./numberValue"; 
import { tirageLoto } from "./tirageLoto"; 

export function resultTirage() {
    let playerNumber = numberValue(); 
    const tirage = tirageLoto(); 
    let NombreBon = 0; 

    // Vérifie si playerNumber a exactement 5 éléments
    if (playerNumber.length === 5) {
        // Si playerNumber a 5 éléments, on compare chaque chiffre avec le tirage
        for (let i = 0; i < playerNumber.length; i++) {
            if (playerNumber[i] === tirage[i]) {
                NombreBon++; 
            }
        }

        return NombreBon; 
    } else {
        console.error("Le Joueur a l'obligation de rentrer 6 chiffres"); 
       
    }
}
