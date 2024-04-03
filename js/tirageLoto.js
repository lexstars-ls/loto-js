// Un fichier permettant de tirer le Loto
export function tirageLoto() {
    const numerosTires = []; // Tableau pour stocker les numéros déjà tirés
    const nombresTirage = 6; // Nombre total de numéros à tirer
    const inputs = document.querySelectorAll('input[type="number"]');
    
    // Vérifiez s'il y a exactement 6 inputs non nuls
    if (inputs.length !== 6 || Array.from(inputs).some(input => !input.value.trim())) {
        console.error("Erreur : Tous les champs doivent être remplis avec des valeurs numériques.");
        return []; // Retourne un tableau vide si les conditions ne sont pas remplies
    }

    while (numerosTires.length < nombresTirage) {
        const numero = Math.floor(Math.random() * 49) + 1; // +1 pour éviter 0

        // vérifie que ma valeur n'est pas déja présente
        if (!numerosTires.includes(numero)) { 
            numerosTires.push(numero); // Ajoute le numéro au tableau des numéros tirés s'il n'a pas déjà été tiré
        }
    }

    return numerosTires;
}

