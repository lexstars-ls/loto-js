import { renduLoto } from "./affichageLoto";
import { resultTirage } from "./resultTirage";
import { renduResult } from "./affichageResult";
import { resetFunction } from "./reset";

const btnJouer = document.getElementById('joue');

btnJouer.addEventListener('click', function () {
    renduLoto();
    resultTirage();
    renduResult();
});

const btnRejouer = document.getElementById('rejouer');

btnRejouer.addEventListener('click', function () {

    resetFunction();
    document.getElementById('joue').disabled = false;
    document.getElementById('rejouer').disabled = true;
});

