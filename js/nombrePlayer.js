// - Un fichier permettant de récupérer les valeurs rentrées par le joueur
export function numberValue() {
    const playerNumberArray = [];
    
    
    for (let i = 0; i < 6; i++) {
        const input = document.getElementById("chiffre" + (i + 1));
        const chiffre = parseInt(input.value.trim());

        // Vérifier si le chiffre est un nombre valide
        if (!isNaN(chiffre)) {
            // Vérifier si le chiffre n'est pas déjà présent dans les 5 premiers éléments
            if (i < 5 && playerNumberArray.slice(0, 5).includes(chiffre)) {
                alert("Nombre similaire !!");
                // Réinitialiser la valeur du champ de saisie
                input.value = "";
                return [];
            }
            // Ajouter le chiffre au tableau
            playerNumberArray.push(chiffre);
        } else {
            console.error('Veuillez remplir tous les champs avec un nbr compris entre 0 et 49');
            return [];
        }
    }

    document.getElementById('joue').disabled = true;

    return playerNumberArray;
}


