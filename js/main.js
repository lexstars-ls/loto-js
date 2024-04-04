import { renduLoto } from "./affichageLoto";
import { resultTirage } from "./resultTirage";
import { renduResult } from "./affichageResult";

const btnJouer = document.getElementById('joue');

btnJouer.addEventListener('click', function () {
    
    renduLoto();
    
    resultTirage();
    renduResult();
    
});

document.getElementById('rejouer').addEventListener('click', function () {
    // Réinitialiser les valeurs des inputs en définissant leur valeur sur ''
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = '';
    });

  
    const tirageContainer = document.getElementById('tirageContainer');
    tirageContainer.querySelectorAll('.imgContainer').forEach(element => {
        element.remove();
    });
    const h2Result = document.querySelector('.h2Result');
    if (h2Result) {
        h2Result.remove();
    }


    document.getElementById('joue').disabled = false;
    document.getElementById('rejouer').disabled = true;
});

