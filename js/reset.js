export function resetFunction (){
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
}