// Un fichier permettant de tirer le Loto
export function tirageLoto() {
    const numerosTires = [];
    const nombresTirage = 6;
   
    // // Vérifiez s'il y a exactement 6 inputs non nuls
    // if (inputs.length !== 6 || Array.from(inputs).some(input => !input.value.trim()) ) {
    //     console.error("Erreur : Tous les champs doivent être remplis avec des valeurs numériques.");
    //     return [];
    // }

    for (let i = 0; i < nombresTirage; i++) {
        const numero = Math.floor(Math.random() * 49) + 1; // Générer un numéro aléatoire
        if (!numerosTires.includes(numero)) {
            numerosTires.push(numero);
        }
      
    }
    return numerosTires;
}
