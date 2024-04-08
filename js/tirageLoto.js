// Un fichier permettant de tirer le Loto
export function tirageLoto() {
    const numerosTires = [];
    const nombresTirage = 6;
   
   
    for (let i = 0; i < nombresTirage; i++) {
        const numero = Math.floor(Math.random() * 49) + 1; // Générer un numéro aléatoire
        if (!numerosTires.includes(numero)) {
            numerosTires.push(numero);
        }
      
    }
    return numerosTires;
}
