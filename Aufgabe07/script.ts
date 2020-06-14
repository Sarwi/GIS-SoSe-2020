namespace aufgabe07 {
    let einkaufZaehler: number = 0;
    let preisRechnen: number = 0;
    let zaehlerAnzeigen: HTMLParagraphElement = document.createElement("p"); //Zahl Anzeigen 
    let anzahlBlase: HTMLDivElement = document.createElement("div");
    anzahlBlase.id = "anzahlBlase"; //div erstellen 


    let süßigkeit: Süßigkeit[] = [];
    window.addEventListener("load", init);

    export interface Süßigkeit {
        kategorie: string;
        bild: string;
        name: string;
        preis: number;
        beschreibung: string;

    }

    //Auf Jason zugreifen, jason daten werden vom Server gezogen 
    function init(): void {
        let url: string = "Produkte.json";
        communicate(url);

    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        süßigkeit = await response.json();
        console.log("End");
        buildArticles();


    }
    function sicherinlocalStorage(_inputSüßigkeit: Süßigkeit): void {
        let itemString: string = JSON.stringify(_inputSüßigkeit);
        let key: string = "" + _inputSüßigkeit.name;

        localStorage.setItem(key, itemString);
        console.log(localStorage);

    }


    function buildArticles(): void {
        for (let index: number = 0; index < süßigkeit.length; index++) {
            //div erstellen und anlegen um drauf zugreifen zu können 
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.setAttribute("class", "div");
            newDiv.setAttribute("id", "produkt" + index);
            document.getElementById("schokolade")?.appendChild(newDiv);


            //Bild anlegen um es zu erkennen 
            let bildSüßigkeit: HTMLImageElement = document.createElement("img");
            bildSüßigkeit.setAttribute("src", süßigkeit[index].bild);
            bildSüßigkeit.setAttribute("alt", "produkt");
            bildSüßigkeit.setAttribute("class", "produktbild");
            document.getElementById("produkt" + index)?.appendChild(bildSüßigkeit);

            //Name anlegen 
            let nameSüßigkeit: HTMLParagraphElement = document.createElement("p");
            nameSüßigkeit.innerHTML = süßigkeit[index].name;
            document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);

            //Preis
            let preisSüßigkeit: HTMLParagraphElement = document.createElement("p");
            preisSüßigkeit.innerHTML = süßigkeit[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);

            //Beschreibung anlegen 
            let beschreibungSüßigkeit: HTMLParagraphElement = document.createElement("p");
            beschreibungSüßigkeit.innerHTML = süßigkeit[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);

            //in den Einkaufswagen button anlegen 
            let indenEinkaufwagen: HTMLButtonElement = document.createElement("button");
            indenEinkaufwagen.addEventListener("click", wagenButton.bind(süßigkeit[index]));
            indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
            document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
            indenEinkaufwagen.setAttribute("preis", süßigkeit[index].preis.toString());
            indenEinkaufwagen.setAttribute("name", süßigkeit[index].name);
            indenEinkaufwagen.setAttribute("img", süßigkeit[index].bild);




            switch (süßigkeit[index].kategorie) {
                case "schokolade":
                    let getContainerSchokolade: HTMLElement = document.getElementById("schokolade")!;
                    getContainerSchokolade.appendChild(newDiv);
                    break;

                case "fruchtgummi":
                    let getContainerFruchtgummi: HTMLElement = document.getElementById("fruchtgummi")!;
                    getContainerFruchtgummi.appendChild(newDiv);
                    break;
                default:
                    break;
            }
        }



        function wagenButton(this: Süßigkeit, _event: Event): void {
            einkaufZaehler++;
            console.log(einkaufZaehler);

            sicherinlocalStorage(this);

            preisRechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
            console.log(preisRechnen.toFixed(2));


            //Blase erstellen bei min. 1 Artikel
            if (einkaufZaehler >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlBlase);
            }

            //Zahl anzeigen 
            zaehlerAnzeigen.innerHTML = "" + einkaufZaehler;
            document.getElementById("anzahlBlase")?.appendChild(zaehlerAnzeigen);
        }

        function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
            switch (this.getAttribute("id")) {
                case "schokoladeAnzeige":
                    schokolade();
                    break;
                case "fruchtgummiAnzeige":
                    fruchtgummi();
                    break;

            }
        }

        function schokolade(): void {
            (<HTMLElement>document.getElementById("schokolade")).style.display = "block";
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "none";

        }

        function fruchtgummi(): void {
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "block";
            (<HTMLElement>document.getElementById("schokolade")).style.display = "none";
        }

        let schokoladeButton: HTMLElement = <HTMLElement>document.querySelector("#schokoladeAnzeige");
        console.log(schokoladeButton);
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));

        let fruchtgummiButton: HTMLElement = <HTMLElement>document.querySelector("#fruchtgummiAnzeige");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));

    }

}
