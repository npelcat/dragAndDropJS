//2.Créer une boite (variable) dans laquelle on va stocker la balise (objet) attrapé dans l'évènement ci-dessous :
let item;

//1.Ajouter un évènement "dragstart" au documment (=quand j'atrappe un élément avec la souris) :
document.addEventListener('dragstart', (e) => {
    item = e.target;
});

//3.Se prémunir du comportement par défaut (refuse que l'on bouge l'élément => l'icône sous la souris est un sens interdit, avec le code ci-dessous, il se transformera en "+"):
// dragover : quand on commence à bouger l'objet attrapé :
document.addEventListener('dragover', (e) => {
    e.preventDefault();
});

//4.DROP (déposer l'élément ailleurs) :
document.addEventListener("drop", (e) => {
    //5.Sécurité pour ne pas que les éléments soient déposés n'importe où :
    //".getAttribute" : pour toucher l'attribut "data-draggable" mis en HTML :
    if (e.target.getAttribute("data-draggable") == "target") {

        //Se prémunir du comportement par défaut qui nous empêche de le droper n'importe où :
        e.preventDefault(e);
        //Prendre le e.target (la division sur laquelle on veut déposer l'élément) et lui dire "tu as un nouvel enfant" (appendChild) qui se nomme item (la boite déclarée + haut dans laquelle est stocké l'objet (ici balise) qu'on veut déplacer) :
        e.target.appendChild(item);
    };
});

//6.BONNE PRATIQUE (pour éviter les bugs) : Vider la boite item une fois que le drop est finit :
document.addEventListener("dragend", () => (item = null));