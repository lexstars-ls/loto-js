import { numberValue } from "./numberValue";
import { tirageLoto } from "./tirageLoto";
import { resultTirage } from "./resultTirage";

// Sélectionnez le bouton 'joue'
const btnJouer = document.getElementById('joue');

// Ajoutez un gestionnaire d'événements au clic sur le bouton 'joue'
btnJouer.addEventListener('click', function () {

    // Obtenir le résultat du tirage
    const resultYEA = resultTirage();
    
    
    console.log(resultYEA)

});
