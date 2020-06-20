"use strict";
var Artikel;
(function (Artikel) {
    let artikelrechner = 0;
    let preisBerechnen = 0;
    //Zähler für die Anzahl erstellen
    let anzahlZaehler = document.createElement("p");
    //Blase erstellen beim Einkaufswagen
    let produktAnzeige = document.createElement("div");
    produktAnzeige.id = "produktAnzeige";
    let articles = [];
    window.addEventListener("load", init);
    //Json Daten werden vom Server gezogen
    function init() {
        let url = "Produkte.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        articles = await response.json();
        console.log("End");
        buildArticles();
    }
    function sichernImLocalStorage(_inputArticle) {
        //Artikel bauen
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle.name; //in localstorage packen
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    //Produktschleife
    function buildArticles() {
        for (let index = 0; index < articles.length; index++) {
            console.log(articles[index]);
            //Div erzeugen
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("schokolade")?.appendChild(newDiv);
            //Produktbild hinzufügen
            let newBild = document.createElement("img");
            newBild.setAttribute("src", articles[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);
            //Name hinzufügen
            let newH3 = document.createElement("h3");
            newH3.innerHTML = articles[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);
            //Produktbeschreibung hinzufügen
            let newP = document.createElement("p");
            newP.innerHTML = articles[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(newP);
            //Preis hinzufügen
            let newPreis = document.createElement("p");
            newPreis.innerHTML = articles[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);
            //Button hinzufügen
            let newButton = document.createElement("button");
            newButton.innerHTML = "in den Einkaufswagen";
            newButton.addEventListener("click", einkaufenBtn.bind(articles[index]));
            newButton.setAttribute("name", articles[index].name);
            newButton.setAttribute("img", articles[index].bild);
            newButton.setAttribute("beschreibung", articles[index].beschreibung);
            newButton.setAttribute("preis", articles[index].preis.toString());
            newButton.setAttribute("kategorie", articles[index].kategorie);
            document.getElementById("produkt" + index)?.appendChild(newButton);
            document.getElementById("artikel" + index)?.appendChild(newButton);
            switch (articles[index].kategorie) {
                case "schokolade":
                    let getContainerInneneinrichtung = document.getElementById("schokolade");
                    getContainerInneneinrichtung.appendChild(newDiv);
                    break;
                case "fruchtgummi":
                    let getContainerAußeneinrichtung = document.getElementById("fruchtgummi");
                    getContainerAußeneinrichtung.appendChild(newDiv);
                    break;
            }
        }
        function einkaufenBtn(_event) {
            artikelrechner++;
            console.log(artikelrechner);
            sichernImLocalStorage(this);
            preisBerechnen += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preisBerechnen.toFixed(2));
            //Blase erstellen bei min. 1 Artikel
            if (artikelrechner >= 0) {
                document.getElementById("produktBlase")?.appendChild(produktAnzeige);
            }
            //Zahl in Blase anzeigen
            anzahlZaehler.innerHTML = "" + artikelrechner;
            document.getElementById("produktBlase")?.appendChild(anzahlZaehler);
        }
        //Kategorien einblenden/ausblenden
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "schokoladebtn":
                    schokolade();
                    break;
                case "fruchtgummibtn":
                    fruchtgummi();
                    break;
            }
        }
        function schokolade() {
            document.getElementById("schokolade").style.display = "inline-grid";
            document.getElementById("fruchtgummi").style.display = "none";
        }
        function fruchtgummi() {
            document.getElementById("schokolade").style.display = "inline-grid";
            document.getElementById("fruchtgummi").style.display = "none";
        }
        //Erstellen einer Variable, Buttonverlinkung
        let schokoladeButton = document.getElementById("schokoladebtn");
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));
        let fruchtgummiButton = document.getElementById("fruchtgummibtn");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));
    }
})(Artikel || (Artikel = {}));
//# sourceMappingURL=script.js.map