const inputFields = document.querySelectorAll("input");

for (let i =0; i < inputFields.length; i++) {

    let field = inputFields[i];

    field.addEventListener('input', function(e) {

        if (e.target.value != "") {
            e.target.parentNode.classList.add('animation');
        }

        else if (e.target.value == "") {
            e.target.parentNode.classList.remove('animation');
        }
    })
}



/**
 * On prend tous les inputs
 * On selectionne chaque input un par un avec field
 * Pour chaque input on est à l'écoute d'un évenement input (permet de manipuler la valeur qu'il y a dans l'input)
 * Si cette valeur est différente de vide on rajoute au parent la classe animation
 * Sinon on lui retire l'animation
 */


 