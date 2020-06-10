namespace aufgabe06 {
    window.addEventListener("load", init);
    interface Süßigkeit {
        kategorie: string;
        bild: string;
        name: string;
        preis: number;
        beschreibung: string;

    }
    let süßigkeit: Süßigkeit[] = [];

    function init(_event: Event): void {
        communicate("Produkte.json");
        buildNav();
       

    }

    async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        süßigkeit = <Süßigkeit[]>await response.json();
        buildArticles(süßigkeit);
        console.log("Response", response);
    }
    

    

   

    function buildArticles(_süßigkeit: Süßigkeit[]): void {
        for (let index: number = 0; index < _süßigkeit.length; index++) {
            //div erstellen und anlegen um drauf zugreifen zu können 
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "produkt" + index;
            document.getElementById("schokolade")?.appendChild(newDiv);


            //Bild anlegen um es zu erkennen 
            let imgSüßigkeit: HTMLImageElement = document.createElement("img");
            imgSüßigkeit.src = _süßigkeit[index].bild;
            document.getElementById("produkt" + index)?.appendChild(imgSüßigkeit);

            //Name anlegen 
            let nameSüßigkeit: HTMLParagraphElement = document.createElement("p");
            nameSüßigkeit.innerHTML = _süßigkeit[index].name;
            document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);

            let preisSüßigkeit: HTMLParagraphElement = document.createElement("p");
            preisSüßigkeit.innerHTML = _süßigkeit[index].preis + "€";
            document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);

            //Beschreibung anlegen 
            let beschreibungSüßigkeit: HTMLParagraphElement = document.createElement("p");
            beschreibungSüßigkeit.innerHTML = _süßigkeit[index].beschreibung;
            document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);

            //in den Einkaufswagen button anlegen 
            let indenEinkaufwagen: HTMLButtonElement = document.createElement("button");
            indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
            document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
            indenEinkaufwagen.addEventListener("click", wagenButton);
            indenEinkaufwagen.setAttribute("preis", _süßigkeit[index].preis.toString());


            switch (_süßigkeit[index].kategorie) {
                case "schokolade":
                    let getContainerSchokolade: HTMLElement = document.getElementById("schokolade")!;
                    console.log(getContainerSchokolade);
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
    }

    let einkaufZaehler: number = 0;
    let preis: number = 0;
    let zaehlerAnzeigen: HTMLParagraphElement = document.createElement("p"); //Zahl Anzeigen 
    let anzahlBlase: HTMLDivElement = document.createElement("div");
    anzahlBlase.id = "anzahlBlase"; //div erstellen 

    function wagenButton(_event: Event): void {
        einkaufZaehler++;
        console.log(einkaufZaehler);

        preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(preis);

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

        function schokolade(): void {
            (<HTMLElement>document.getElementById("schokolade")).style.display = "block";
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "none";

        }

        function fruchtgummi(): void {
            (<HTMLElement>document.getElementById("fruchtgummi")).style.display = "block";
            (<HTMLElement>document.getElementById("schokolade")).style.display = "none";
        }
    }
    function buildNav(): void {
        //Variable erstellen, verlinken zum Button zur Html seite id in html anlegen  
        let schokoladeButton: HTMLElement = <HTMLElement>document.querySelector("#schokoladeAnzeige");
        console.log(schokoladeButton);
        schokoladeButton.addEventListener("click", handleCategoryClick.bind(schokoladeButton));

        let fruchtgummiButton: HTMLElement = <HTMLElement>document.querySelector("#fruchtgummiAnzeige");
        fruchtgummiButton.addEventListener("click", handleCategoryClick.bind(fruchtgummiButton));

    }
}
