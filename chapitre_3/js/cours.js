//================================================================================================\\
//                                                                                                \\
//                                        MANIPULATION DU DOM                                     \\
//                                      (Document Object Model)                                   \\                  
//                                                                                                \\
//================================================================================================\\


// commandes basiques: document. <-- appel d'une fonction de la classe "document".


// Modifier les informations d'un élément:  innerHTML, textContent, classList, setAttribute.
// Créer un nouveau noeud:                  createTextNode, createElement.
// Insérer un nouveau noeud:                appendChild, insertBefore, insertAdjacentHTML.
// Remplacer un noeud existant:             replaceChild.
// Supprimer un noeud existant:             removeChild.


// EXEMPLE d'application pour insertAdjacentHTML("#emplacement",'#codeHTML');
// insertAdjacentHTML("afterBegin", '<h1 ...>...</h1>');
//     beforebegin:    avant l'élément existant lui-même.
//     afterbegin:     juste à l'intérieur de l'élément existant, avant son premier enfant.
//     beforeend:      juste à l'intérieur de l'élément existant, après son dernier enfant.
//     afterend:       après l'élément existant lui-même.

// Modification du contenu HTML de la liste : ajout d'un langage.
    document.getElementById("langages").innerHTML += '<li id="c">C</li>';


// Suppression du contenu HTML de la liste.
    //document.getElementById("langages").innerHTML = "";  <-- nice tips


// Modification du contenu textuel du premier titre.
    document.querySelector("h1").textContent += " de programmation";


// Ajoute id="titre" au 1er <h1>.
    document.querySelector("h1").setAttribute("id", "titre");


// Remplace le nom de la classe d'un element h1.
    var titreElt = document.querySelector("h1");                // Accès au premier titre h1.
    titreElt.classList.remove("debut");                         // Suppression de la classe "debut".
    titreElt.classList.add("titre");                            // Ajout de la classe "titre".
    console.log(titreElt);


// Créer "<li id ="python">Python</li>" et l'inserer dans le DOM.
    var pythonElt = document.createElement("li");               // Création d'un élément li.
    pythonElt.id = "python";                                    // Définition de son identifiant.
    pythonElt.textContent = "Python";                           // Définition de son contenu textuel.
    document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément.

    var rubyElt = document.createElement("li");                 // Création d'un élément li.
    rubyElt.id = "ruby";                                        // Définition de son identifiant.
    rubyElt.appendChild(document.createTextNode("Ruby"));       // Définition de son contenu textuel.
    document.getElementById("langages").appendChild(rubyElt);   // Insertion du nouvel élément.

    var perlElt = document.createElement("li");                 // Création d'un élément li.
    perlElt.id = "perl";                                        // Définition de son identifiant.
    perlElt.textContent = "Perl";                               // Définition de son contenu textuel.

    document.getElementById("langages").insertBefore(perlElt, 
        document.getElementById("php"));                        // Ajout du nouvel élément avant l'identifiant identifié par "php".


// Ajout d'un élément au tout début de la liste.
    document.getElementById('langages').insertAdjacentHTML("afterBegin", 
        '<li id="javascript">JavaScript</li>');


// Remplace un élément du DOM par un autre avec "replaceChild".
    var bashElt = document.createElement("li");                 // Création d'un élément li.
    bashElt.id = "bash";                                        // Définition de son identifiant.
    bashElt.textContent = "Bash";                               // Définition de son contenu textuel.
    document.getElementById("langages").replaceChild(bashElt, 
        document.getElementById("perl"));                       // Remplacement de l'élément identifié par "perl" par le nouvel élément.


// Supprime un noeud du DOM avec "removeChild".
    document.getElementById("langages").removeChild(document.getElementById("bash"));


// Ajouter un paragraphe en dessous de l'élément <ul>.
    document.getElementById("langages").insertAdjacentHTML("afterend",
        '<p id="paragraphe">En voici une<a id="lienWiki" href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation"> liste</a> plus complète.</p>');


// fonction permettant l'accès 
var elt = document.querySelector("#langages");
getComputedStyle(elt).display;