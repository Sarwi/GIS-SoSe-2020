"use strict";
//Schokolade
var schokolade;
(function (schokolade_1) {
    let mandeln = {
        bild: "gebrannteMandeln.jpg",
        name: "gebrannte Mandeln 1,20€",
        beschreibung: "nussig,zimtig"
    };
    let erdbeere = {
        bild: "Erdbeere.png",
        name: "Erdbeerschokolade 1,30€",
        beschreibung: "fruchtig, pricklend"
    };
    let karamel = {
        bild: "Caramel.jpg",
        name: "Karamelschokolade 1,00€",
        beschreibung: "cremig, süß"
    };
    let allerlei = {
        bild: "AllerleiSchokolade.jpg",
        name: "Allerlei 1,40",
        beschreibung: "Beeren, kokosflocken, Nüsse"
    };
    let beeren = {
        bild: "Beerenschokolade.jpg",
        name: "Beerenschokolade 1,30",
        beschreibung: "Heidelbeeren, Passionsfrucht"
    };
    let keks = {
        bild: "Butterkeksschokolade.jpg",
        name: "Keksschokolade 1,10€",
        beschreibung: "knusprig"
    };
    let nougat = {
        bild: "Nougat.png",
        name: "Nougatschokolade 1,10€",
        beschreibung: "nusiig, cremig"
    };
    let smarties = {
        bild: "Smarties.jpg",
        name: "Smartieesschokolade 1,20€",
        beschreibung: "zart, reichlich gefüllt"
    };
    let vollmilch = {
        bild: "Vollmilch.jpg",
        name: "Vollmilchschokolade 1,00€",
        beschreibung: "Der Klassiker unter der Schokolade"
    };
    let weisse = {
        bild: "Weisse.jpg",
        name: "Weißeschokolade 1,00€",
        beschreibung: "cremig, vanillearoma"
    };
    let bitter = {
        bild: "Zartbitter.jpg",
        name: "Zartbitterschokolade 1,00€",
        beschreibung: "zart, bitter, knackig"
    };
    let nuss = {
        bild: "Nussschokolade.jpg",
        name: "Nussschokolade 1,20€",
        beschreibung: "nussig, cremig, knackig"
    };
    let schokolade = [mandeln, erdbeere, karamel, allerlei, beeren, keks, nougat, smarties, vollmilch, weisse, bitter, nuss];
    for (let index = 0; index < schokolade.length; index++) {
        //Schokolade
        //div erstellen 
        let newDiv = document.createElement("div");
        newDiv.id = "Produkt1" + index;
        document.getElementById("Schokolade")?.appendChild(newDiv);
        //Bild 
        let imgSchokolade = document.createElement("img");
        imgSchokolade.src = schokolade[index].bild;
        document.getElementById("Produkt1" + index)?.appendChild(imgSchokolade);
        //Name
        let nameSchokolade = document.createElement("p");
        nameSchokolade.innerHTML = schokolade[index].name;
        document.getElementById("Produkt1" + index)?.appendChild(nameSchokolade);
        //Beschreibung
        let beschreibungSchokolade = document.createElement("p");
        beschreibungSchokolade.innerHTML = schokolade[index].beschreibung;
        document.getElementById("Produkt1" + index)?.appendChild(beschreibungSchokolade);
        //in den Einkaufswagen button 
        let indenEinkaufwagen = document.createElement("button");
        indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
        document.getElementById("Produkt1" + index)?.appendChild(indenEinkaufwagen);
    }
})(schokolade || (schokolade = {}));
//# sourceMappingURL=scriptS.js.map