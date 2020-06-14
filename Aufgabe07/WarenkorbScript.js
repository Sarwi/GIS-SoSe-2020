"use strict";
var aufgabe07;
(function (aufgabe07) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".prduktListe");
        pGesamtpreis = document.querySelector("#summe");
        pGesamtpreis.addEventListener("click", entferneAlles);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let articleJson = localStorage.getItem(key);
            let item = JSON.parse(articleJson);
            gesamtPreis += item.preis;
            buildArticles(item);
        }
        setGesamtPreis();
    }
    function buildArticles(_inputSüßigkeit) {
        //Div erstellen
        let newDiv = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputSüßigkeit.name;
        console.log(newDiv.id);
        //IMG IN DIV PACKEN
        let bSüßigkeiten = document.createElement("img");
        bSüßigkeiten.src = _inputSüßigkeit.bild;
        newDiv.appendChild(bSüßigkeiten);
        console.log(bSüßigkeiten);
        //NAME
        let nSüßigkeiten = document.createElement("h1");
        nSüßigkeiten.innerHTML = _inputSüßigkeit.name;
        newDiv.appendChild(nSüßigkeiten);
        console.log(nSüßigkeiten);
        //PREIS
        let pSüßigkeiten = document.createElement("p");
        pSüßigkeiten.innerHTML = "" + _inputSüßigkeit.preis;
        newDiv.setAttribute("preis", pSüßigkeiten.innerHTML);
        newDiv.appendChild(pSüßigkeiten);
        //BESCHREIBUNG
        let beSüßigkeiten = document.createElement("p");
        beSüßigkeiten.innerHTML = _inputSüßigkeit.beschreibung;
        newDiv.appendChild(beSüßigkeiten);
        //BUTTON
        let ausEinkaufswagen = document.createElement("button");
        ausEinkaufswagen.innerHTML = "Löschen";
        newDiv.appendChild(ausEinkaufswagen);
        ausEinkaufswagen.addEventListener("click", handleRemoveArticle.bind(_inputSüßigkeit));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtPreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2);
    }
    function entferneAlles(_event) {
        localStorage.clear();
        update();
    }
})(aufgabe07 || (aufgabe07 = {}));
//# sourceMappingURL=WarenkorbScript.js.map