namespace Artikel {


    let artikelrechner: number = 0;
    let preisBerechnen: number = 0;

    //Zähler für die Anzahl erstellen
    let anzahlZaehler: HTMLParagraphElement = document.createElement("p");

    //Blase erstellen beim Einkaufswagen
    let produktAnzeige: HTMLDivElement = document.createElement("div");
    produktAnzeige.id = "produktAnzeige";


    let articles: ArtikelSüßigkeiten[] = [];
    window.addEventListener("load", init);

    export interface ArtikelSüßigkeiten {
        kategorie: string;
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
    }

    //Json Daten werden vom Server gezogen
    function init(): void {
        let url: string = "Produkte.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        articles = await response.json();
        console.log("End");
        buildArticles();
    }


    function sichernImLocalStorage(_inputArticle: ArtikelSüßigkeiten): void {
        //Artikel bauen
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle.name; //in localstorage packen

        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    //Produktschleife
    function buildArticles(): void {
        for (let index: number = 0; index < articles.length; index++) {
            console.log(articles[index]);
            //Div erzeugen
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.setAttribute("class", "artikel");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("schokolade")?.appendChild(newDiv);

            //Produktbild hinzufügen
            let newBild: HTMLElement = document.createElement("img");
            newBild.setAttribute("src", articles[index].bild);
            newBild.setAttribute("alt", "produkt");
            newBild.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(newBild);

            //Name hinzufügen
            let newH3: HTMLHeadingElement = document.createElement("h3");
            newH3.innerHTML = articles[index].name;
            document.getElementById("produkt" + index)?.appendChild(newH3);

            //Produktbeschreibung hinzufügen
            let newP: HTMLParagraphElement = document.createElement("p");
            newP.innerHTML = articles[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(newP);

            //Preis hinzufügen
            let newPreis: HTMLParagraphElement = document.createElement("p");
            newPreis.innerHTML = articles[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(newPreis);

            //Button hinzufügen
            let newButton: HTMLButtonElement = document.createElement("button");
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
                    let getContainerInneneinrichtung: HTMLElement = document.getElementById("schokolade")!;
                    getContainerInneneinrichtung.appendChild(newDiv);
                    break;

                case "fruchtgummi":
                    let getContainerAußeneinrichtung: HTMLElement = document.getElementById("fruchtgummi")!;
                    getContainerAußeneinrichtung.appendChild(newDiv);
                    break;
            }
        }




        function einkaufenBtn(this: ArtikelSüßigkeiten, _event: Event): void {
            artikelrechner++;
            console.log(artikelrechner);

            sichernImLocalStorage(this);

            preisBerechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
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
        function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
            switch (this.getAttribute("id")) {
                case "schokoladebtn":
                    schokolade();
                    break;
                case "fruchtgummibtn":
                    fruchtgummi();
                    break;
            }
        }
        function schokolade(): void {
            (<HTMLElement>document.getElementById("schokolade")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "none";
        }
        function fruchtgummi(): void {
            (<HTMLElement>document.getElementById("schokolade")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "none";
        }


        //Erstellen einer Variable, Buttonverlinkung
        let schokoladeButton: HTMLElement = <HTMLElement>document.getElementById("schokoladebtn");
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));

        let fruchtgummiButton: HTMLElement = <HTMLElement>document.getElementById("fruchtgummibtn");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));

    }
}