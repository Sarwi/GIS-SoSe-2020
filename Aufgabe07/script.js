"use strict";
var aufgabe07;
(function (aufgabe07) {
    let einkaufZaehler = 0;
    let preisRechnen = 0;
    let zaehlerAnzeigen = document.createElement("p"); //Zahl Anzeigen 
    let anzahlBlase = document.createElement("div");
    anzahlBlase.id = "anzahlBlase"; //div erstellen 
    let süßigkeit = [];
    window.addEventListener("load", init);
    //Auf Jason zugreifen, jason daten werden vom Server gezogen 
    function init() {
        let url = "Produkte.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        süßigkeit = await response.json();
        console.log("End");
        buildArticles();
    }
    function sicherinlocalStorage(_inputSüßigkeit) {
        let itemString = JSON.stringify(_inputSüßigkeit);
        let key = "" + _inputSüßigkeit.name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    function buildArticles() {
        for (let index = 0; index < süßigkeit.length; index++) {
            //div erstellen und anlegen um drauf zugreifen zu können 
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "div");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("schokolade")?.appendChild(newDiv);
            //Bild anlegen um es zu erkennen 
            let bildSüßigkeit = document.createElement("img");
            bildSüßigkeit.setAttribute("src", süßigkeit[index].bild);
            bildSüßigkeit.setAttribute("alt", "produkt");
            bildSüßigkeit.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(bildSüßigkeit);
            //Name anlegen 
            let nameSüßigkeit = document.createElement("p");
            nameSüßigkeit.innerHTML = süßigkeit[index].name;
            document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);
            //Preis
            let preisSüßigkeit = document.createElement("p");
            preisSüßigkeit.innerHTML = süßigkeit[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);
            //Beschreibung anlegen 
            let beschreibungSüßigkeit = document.createElement("p");
            beschreibungSüßigkeit.innerHTML = süßigkeit[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);
            //in den Einkaufswagen button anlegen 
            let indenEinkaufwagen = document.createElement("button");
            indenEinkaufwagen.addEventListener("click", wagenButton.bind(süßigkeit[index]));
            indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
            document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
            indenEinkaufwagen.setAttribute("preis", süßigkeit[index].preis.toString());
            indenEinkaufwagen.setAttribute("name", süßigkeit[index].name);
            indenEinkaufwagen.setAttribute("img", süßigkeit[index].bild);
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
        function wagenButton(_event) {
            einkaufZaehler++;
            console.log(einkaufZaehler);
            sicherinlocalStorage(this);
            preisRechnen += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preisRechnen.toFixed(2));
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
        }
        function schokolade() {
            document.getElementById("schokolade").style.display = "block";
            document.getElementById("fruchtgummi").style.display = "none";
        }
        function fruchtgummi() {
            document.getElementById("fruchtgummi").style.display = "block";
            document.getElementById("schokolade").style.display = "none";
        }
        let schokoladeButton = document.querySelector("#schokoladeAnzeige");
        console.log(schokoladeButton);
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));
        let fruchtgummiButton = document.querySelector("#fruchtgummiAnzeige");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=script.js.map