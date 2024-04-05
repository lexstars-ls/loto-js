import { renduLoto } from "./affichageLoto";
import { resultTirage } from "./resultTirage";
import { renduResult } from "./affichageResult";
import { resetFunction } from "./reset";

document.getElementsById('joue').addEventListener('click', function () {

    renduLoto();
    resultTirage();
    renduResult();
});

document.getElementById('rejouer').addEventListener('click', function () {

    resetFunction();
    document.getElementById('joue').disabled = false;
    document.getElementById('rejouer').disabled = true;
});

