//Déclaration des variables
var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('ToDoContainer');
var inputField = document.getElementById('InputField');

//Fonction au click du bouton + après saisie d'une entrée
addToDoButton.onclick = function(){
    //Si le champs de saisie n'est pas vide, créer un paragraphe
    if(inputField.value != ""){
        var paragraph = document.createElement('p');
    }

    //Mettre la valeur saisie dans le paragraphe
    paragraph.innerText = inputField.value;

    //Stylisé le paragraphe
    paragraph.classList.add('paragraph_style');

    //Ajouter le paragraphe créé dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph);

    //Vider la champs de saisie une fois la tâche ajoutée
    inputField.value = "";

    //Fonction pour rayer la tâche au click
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraph_click');
    })

    //Supprimer la tâche au double click
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
}