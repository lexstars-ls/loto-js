// Un fichier permettant de tirer le Loto
export function tirageLoto() {
    const numerosTires = []; // Tableau pour stocker les numéros déjà tirés
    const nombresTirage = 6; // Nombre total de numéros à tirer
   

    while (numerosTires.length < nombresTirage) {
        const numero = Math.floor(Math.random() * 49) + 1; // +1 pour éviter 0

        // vérifie que ma valeur n'est pas déja présente
        if (!numerosTires.includes(numero)) { 
            numerosTires.push(numero); // Ajoute le numéro au tableau des numéros tirés s'il n'a pas déjà été tiré
        }
    }

    return numerosTires;
}


