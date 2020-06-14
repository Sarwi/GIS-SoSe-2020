namespace  aufgabe07 {
    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".prduktListe");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#summe");
        pGesamtpreis.addEventListener("click", entferneAlles);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }
    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let articleJson: string = <string>localStorage.getItem(key);

            let item: Süßigkeit = <Süßigkeit>JSON.parse(articleJson);

            gesamtPreis += item.preis;
            buildArticles(item);

        }
        setGesamtPreis();

    }

    function buildArticles(_inputSüßigkeit: Süßigkeit): void {


        //Div erstellen
        let newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(newDiv);
        newDiv.id = _inputSüßigkeit.name;
        console.log(newDiv.id);

        //IMG IN DIV PACKEN
        let bSüßigkeiten: HTMLImageElement = document.createElement("img");
        bSüßigkeiten.src = _inputSüßigkeit.bild;
        newDiv.appendChild(bSüßigkeiten);
        console.log(bSüßigkeiten);

        //NAME
        let nSüßigkeiten: HTMLParagraphElement = document.createElement("h1");
        nSüßigkeiten.innerHTML = _inputSüßigkeit.name;
        newDiv.appendChild(nSüßigkeiten);
        console.log(nSüßigkeiten);

        //PREIS
        let pSüßigkeiten: HTMLParagraphElement = document.createElement("p");
        pSüßigkeiten.innerHTML = "" + _inputSüßigkeit.preis;
        newDiv.setAttribute("preis", pSüßigkeiten.innerHTML);
        newDiv.appendChild(pSüßigkeiten);

        //BESCHREIBUNG
        let beSüßigkeiten: HTMLParagraphElement = document.createElement("p");
        beSüßigkeiten.innerHTML = _inputSüßigkeit.beschreibung;
        newDiv.appendChild(beSüßigkeiten);

        //BUTTON
        let ausEinkaufswagen: HTMLButtonElement = document.createElement("button");
        ausEinkaufswagen.innerHTML = "Löschen";
        newDiv.appendChild(ausEinkaufswagen);
        ausEinkaufswagen.addEventListener("click", handleRemoveArticle.bind(_inputSüßigkeit));

    }
    function handleRemoveArticle(this: Süßigkeit, _event: Event): void {
        localStorage.removeItem(this.name);
        update();
    }
    function setGesamtPreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2);
    }

    function entferneAlles(_event: Event): void {
        localStorage.clear();
        update();


    }
}
