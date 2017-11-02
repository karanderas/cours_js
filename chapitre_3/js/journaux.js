// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

//var divContent = document.createElement("div");
//divContent.id("contenu");
//divContent.appendChild(divContent);

for (var i = 0; i < journaux.length; i++) {
    //console.log(i);
    var lienElt = document.createElement("a");
    lienElt.setAttribute("href", journaux[i]);
    document.getElementById("contenu").appendChild(lienElt);
    document.getElementById("contenu").appendChild(document.createElement("br"));
}