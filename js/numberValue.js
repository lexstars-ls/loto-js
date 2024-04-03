// - Un fichier permettant de récupérer les valeurs rentrées par le joueur
export function numberValue() {
    const playerNumberArray = [];

    // Boucle pour récupérer les valeurs des champs de saisie et les ajouter dans le tableau
    for (let i = 0; i < 6; i++) {
        const input = document.getElementById("chiffre" + (i + 1));
        const chiffre = parseInt(input.value.trim());
        
        // Vérifier si le chiffre est différent de null
        if (!isNaN(chiffre)) {
            if (i < 5) {
                // Vérifier si le chiffre (array 0 a 5)
                if (playerNumberArray.slice(0, 5).includes(chiffre)) {
                    alert("Erreur : Les cinq premiers chiffres ne peuvent pas être similaires.");
                    // Réinitialiser la valeur du champ de saisie
                    input.value = "";
                    return [];
                }
            }
            playerNumberArray.push(chiffre);
        } else {
            // pas besoin de faire plus le bouton est désactivé si un input est null 
            alert('Veuillez remplir tous les champs avec des chiffres valides.');
            return [];
        }
    }

    return playerNumberArray;
}


