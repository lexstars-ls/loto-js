import { numberValue } from "./numberValue";
import { tirageLoto } from "./tirageLoto";
import { resultTirage } from "./resultTirage";


// Sélectionner le bouton 'joue'
const btnJouer = document.getElementById('joue');

// Ajouter un gestionnaire d'événements au clic sur le bouton 'joue'
btnJouer.addEventListener('click', function () {
    // Récupérer les numéros entrés par le joueur
    const player = numberValue();

    // Effectuer le tirage du loto
    const tirageMain = tirageLoto();

    // Obtenir le résultat du tirage
    const result = resultTirage();

    console.log("Numéros tirés au loto :", tirageMain);
    console.log("Numéros du joueur :", player);
    console.log("Résultat du tirage : vous avez", result, "bons numéros");
});