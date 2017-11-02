/*
Exercice : informations sur un élément
*/

var styleElement = getComputedStyle(document.getElementById("contenu")); // récupère des informations sur la <div id="contenu"></div>
var listeElt = document.createElement("ul"); // crée une balise <ul></ul>
var longueurElt = document.createElement("li"); // crée une balise <li></li>
longueurElt.textContent = "Longueur : " + styleElement.width; // ajout du texte + la longueur de la <div id="contenu"></div>
var hauteurElt = document.createElement("li"); // crée une balise <li></li>
hauteurElt.textContent = "Hauteur : " + styleElement.height; // ajout du texte + la largeur de la <div id="contenu"></div>
listeElt.appendChild(hauteurElt); // ajoute la balise <li>Hauteur : xx.xx</li> à l'élément <ul></ul>
listeElt.appendChild(longueurElt); // ajoute la balise <li>Hauteur : xx.xx</li> à l'élément <ul></ul>
document.getElementById("infos").appendChild(document.createTextNode("Informations sur l'élément")); // ajoute du texte dans la <div id="infos"></div>
document.getElementById("infos").appendChild(listeElt); // affiche tout le contenu de la balise <ul></ul>