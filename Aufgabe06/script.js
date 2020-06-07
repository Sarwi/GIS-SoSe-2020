"use strict";
var aufgabe06;
(function (aufgabe06) {
    //KAtegorie schokolade
    let mandeln = {
        kategorie: "schokolade",
        bild: "gebrannteMandeln.jpg",
        name: "gebrannte Mandeln",
        preis: 1.22,
        beschreibung: "nussig,zimtig"
    };
    let erdbeere = {
        kategorie: "schokolade",
        bild: "Erdbeere.png",
        name: "Erdbeerschokolade",
        preis: 1.33,
        beschreibung: "fruchtig, pricklend"
    };
    let karamel = {
        kategorie: "schokolade",
        bild: "Caramel.jpg",
        name: "Karamelschokolade",
        preis: 1.05,
        beschreibung: "cremig, süß"
    };
    let allerlei = {
        kategorie: "schokolade",
        bild: "AllerleiSchokolade.jpg",
        name: "Allerlei",
        preis: 1.44,
        beschreibung: "Beeren, kokosflocken, Nüsse"
    };
    let beeren = {
        kategorie: "schokolade",
        bild: "Beerenschokolade.jpg",
        name: "Beerenschokolade",
        preis: 1.33,
        beschreibung: "Heidelbeeren, Passionsfrucht"
    };
    let keks = {
        kategorie: "schokolade",
        bild: "Butterkeksschokolade.jpg",
        name: "Keksschokolade",
        preis: 1.11,
        beschreibung: "knusprig"
    };
    let nougat = {
        kategorie: "schokolade",
        bild: "Nougat.png",
        name: "Nougatschokolade",
        preis: 1.11,
        beschreibung: "nusiig, cremig"
    };
    let smarties = {
        kategorie: "schokolade",
        bild: "Smarties.jpg",
        name: "Smartieesschokolade",
        preis: 1.22,
        beschreibung: "zart, reichlich gefüllt"
    };
    let vollmilch = {
        kategorie: "schokolade",
        bild: "Vollmilch.jpg",
        name: "Vollmilchschokolade",
        preis: 1.04,
        beschreibung: "Der Klassiker unter der Schokolade"
    };
    let weisse = {
        kategorie: "schokolade",
        bild: "Weisse.jpg",
        name: "Weißeschokolade",
        preis: 1.09,
        beschreibung: "cremig, vanillearoma"
    };
    let bitter = {
        kategorie: "schokolade",
        bild: "Zartbitter.jpg",
        name: "Zartbitterschokolade",
        preis: 1.09,
        beschreibung: "zart, bitter, knackig"
    };
    let nuss = {
        kategorie: "schokolade",
        bild: "Nussschokolade.jpg",
        name: "Nussschokolade",
        preis: 1.22,
        beschreibung: "nussig, cremig, knackig"
    };
    //Kategorie fruchtgummi 
    let cola = {
        kategorie: "fruchtgummi",
        bild: "Cola.jpg",
        name: "Cola Fläschchen",
        preis: 1.15,
        beschreibung: "Schmeckt wie eine kalte Cola an heißen Sommer Tagen"
    };
    let schnecken = {
        kategorie: "fruchtgummi",
        bild: "Fruchschnecken.jpg",
        name: "Fruchtschnecke",
        preis: 1.14,
        beschreibung: "so schön flutschig, wie Schneckenschleim"
    };
    let weingummi = {
        kategorie: "fruchtgummi",
        bild: "Fruchtige_Weingummi.jpg",
        name: "Weingummi ",
        preis: 1.33,
        beschreibung: "sorgen für ein beschwipstes Gefühl"
    };
    let lachgummis = {
        kategorie: "fruchtgummi",
        bild: "Lachgummis.jpg",
        name: "Lachgummis",
        preis: 1.22,
        beschreibung: "Sorgen für gute Laune"
    };
    let lakritze = {
        kategorie: "fruchtgummi",
        bild: "Lakritze.jpg",
        name: "Lakritze",
        preis: 0.99,
        beschreibung: "Einfach nur lecker!"
    };
    let obstsalat = {
        kategorie: "fruchtgummi",
        bild: "Obstsalat.jpg",
        name: "Obstsalat",
        preis: 1.26,
        beschreibung: "Für etwas Fruchtiges zwischendurch unser fruchtiger Obstsalat"
    };
    let rainbow = {
        kategorie: "fruchtgummi",
        bild: "Rainbow.jpg",
        name: "Rainbow gummi",
        preis: 1.09,
        beschreibung: "Sorgt für mehr Farbe in deinem Leben"
    };
    let schlangen = {
        kategorie: "fruchtgummi",
        bild: "Schlangen.jpg",
        name: "Gummischlangen",
        preis: 1.27,
        beschreibung: "Nichts für Angsthasen"
    };
    let schlümpfe = {
        kategorie: "fruchtgummi",
        bild: "Schlumpfe1.jpg",
        name: "Schlümpfe",
        preis: 1.09,
        beschreibung: "sorgt für schöne Kindheitserinnerungen"
    };
    let superhirn = {
        kategorie: "fruchtgummi",
        bild: "Superhirn.jpg",
        name: "Gummihirn",
        preis: 1.55,
        beschreibung: "erhöht IQ"
    };
    let wassermelone = {
        kategorie: "fruchtgummi",
        bild: "Wassermelone.jpg",
        name: "Wassermelone ",
        preis: 1.05,
        beschreibung: "Sorgt für Sommergefühle"
    };
    let schnuller = {
        kategorie: "fruchtgummi",
        bild: "Schnuller.jpg",
        name: "Schnuller",
        preis: 1.25,
        beschreibung: "Schweigen ist Gold"
    };
    let süßigkeit = [mandeln, erdbeere, karamel, allerlei, beeren, keks, nougat, smarties, vollmilch, weisse, bitter, nuss, cola, schnecken, weingummi, lachgummis, lakritze, obstsalat, rainbow, schlangen, schlümpfe, superhirn, wassermelone, schnuller];
    for (let index = 0; index < süßigkeit.length; index++) {
        //div erstellen und anlegen um drauf zugreifen zu können 
        let newDiv = document.createElement("div");
        newDiv.id = "produkt" + index;
        document.getElementById("schokolade")?.appendChild(newDiv);
        //Bild anlegen um es zu erkennen 
        let imgSüßigkeit = document.createElement("img");
        imgSüßigkeit.src = süßigkeit[index].bild;
        document.getElementById("produkt" + index)?.appendChild(imgSüßigkeit);
        //Name anlegen 
        let nameSüßigkeit = document.createElement("p");
        nameSüßigkeit.innerHTML = süßigkeit[index].name;
        document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);
        let preisSüßigkeit = document.createElement("p");
        preisSüßigkeit.innerHTML = süßigkeit[index].preis + "€";
        document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);
        //Beschreibung anlegen 
        let beschreibungSüßigkeit = document.createElement("p");
        beschreibungSüßigkeit.innerHTML = süßigkeit[index].beschreibung;
        document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);
        //in den Einkaufswagen button anlegen 
        let indenEinkaufwagen = document.createElement("button");
        indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
        document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
        indenEinkaufwagen.addEventListener("click", wagenButton);
        indenEinkaufwagen.setAttribute("preis", süßigkeit[index].preis.toString());
        switch (süßigkeit[index].kategorie) {
            case "schokolade":
                let getContainerSchokolade = document.getElementById("schokolade");
                getContainerSchokolade.appendChild(newDiv);
                break;
            case "fruchtgummi":
                let getContainerFruchtgummi = document.getElementById("fruchtgummi");
                getContainerFruchtgummi.appendChild(newDiv);
                break;
            default:
                break;
        }
    }
    let einkaufZaehler = 0;
    let preis = 0;
    let zaehlerAnzeigen = document.createElement("p"); //Zahl Anzogen 
    let anzahlBlase = document.createElement("div");
    anzahlBlase.id = "anzahlBlase"; //div erstellen 
    function wagenButton(_event) {
        einkaufZaehler++;
        console.log(einkaufZaehler);
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis);
        //Blase erstellen bei min. 1 Artikel
        if (einkaufZaehler >= 0) {
            document.getElementById("artikelBlase")?.appendChild(anzahlBlase);
        }
        //Zahl in Blase anzeigen
        zaehlerAnzeigen.innerHTML = "" + einkaufZaehler;
        document.getElementById("anzahlBlase")?.appendChild(zaehlerAnzeigen);
    }
    function handleCategoryClick(_click) {
        switch (this.getAttribute("id")) {
            case "schokoladeAnzeige":
                schokolade();
                break;
            case "fruchtgummiAnzeige":
                fruchtgummi();
                break;
        }
        function schokolade() {
            document.getElementById("schokolade").style.display = "block";
            document.getElementById("fruchtgummi").style.display = "none";
        }
        function fruchtgummi() {
            document.getElementById("fruchtgummi").style.display = "block";
            document.getElementById("schokolade").style.display = "none";
        }
    }
    //Neue Variable erstellen, Verlinkung zum Button 
    let schokoladeButton = document.querySelector("#schokoladeAnzeige");
    schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));
    let fruchtgummiButton = document.querySelector("#fruchtgummiAnzeige");
    fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));
})(aufgabe06 || (aufgabe06 = {}));
//# sourceMappingURL=script.js.map