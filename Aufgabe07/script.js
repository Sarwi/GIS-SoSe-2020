"use strict";
var aufgabe06;
(function (aufgabe06) {
    window.addEventListener("load", init);
    let süßigkeit = [];
    function init(_event) {
        communicate("Produkte.json");
        buildNav();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        süßigkeit = await response.json();
        buildArticles(süßigkeit);
        console.log("Response", response);
    }
    function buildArticles(_süßigkeit) {
        for (let index = 0; index < _süßigkeit.length; index++) {
            //div erstellen und anlegen um drauf zugreifen zu können 
            let newDiv = document.createElement("div");
            newDiv.id = "produkt" + index;
            document.getElementById("schokolade")?.appendChild(newDiv);
            //Bild anlegen um es zu erkennen 
            let imgSüßigkeit = document.createElement("img");
            imgSüßigkeit.src = _süßigkeit[index].bild;
            document.getElementById("produkt" + index)?.appendChild(imgSüßigkeit);
            //Name anlegen 
            let nameSüßigkeit = document.createElement("p");
            nameSüßigkeit.innerHTML = _süßigkeit[index].name;
            document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);
            let preisSüßigkeit = document.createElement("p");
            preisSüßigkeit.innerHTML = _süßigkeit[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);
            //Beschreibung anlegen 
            let beschreibungSüßigkeit = document.createElement("p");
            beschreibungSüßigkeit.innerHTML = _süßigkeit[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);
            //in den Einkaufswagen button anlegen 
            let indenEinkaufwagen = document.createElement("button");
            indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
            document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
            indenEinkaufwagen.addEventListener("click", wagenButton);
            indenEinkaufwagen.setAttribute("preis", _süßigkeit[index].preis.toString());
            switch (_süßigkeit[index].kategorie) {
                case "schokolade":
                    let getContainerSchokolade = document.getElementById("schokolade");
                    console.log(getContainerSchokolade);
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
    }
    let einkaufZaehler = 0;
    let preis = 0;
    let zaehlerAnzeigen = document.createElement("p"); //Zahl Anzeigen 
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
        //Zahl anzeigen 
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
    function buildNav() {
        //Variable erstellen, verlinken zum Button zur Html seite id in html anlegen  
        let schokoladeButton = document.querySelector("#schokoladeAnzeige");
        console.log(schokoladeButton);
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));
        let fruchtgummiButton = document.querySelector("#fruchtgummiAnzeige");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));
    }
})(aufgabe06 || (aufgabe06 = {}));
//# sourceMappingURL=script.js.map