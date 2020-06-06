
namespace aufgabe06 {
    interface Süßigkeit {
        kategorie: string;
        bild: string;
        name: string;
        preis: number;
        beschreibung: string;

    }

    let mandeln: Süßigkeit = {
        kategorie: "schokolade",
        bild: "gebrannteMandeln.jpg",
        name: "gebrannte Mandeln",
        preis: 1.22,
        beschreibung: "nussig,zimtig"

    };
    let erdbeere: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Erdbeere.png",
        name: "Erdbeerschokolade",
        preis: 1.33,
        beschreibung: "fruchtig, pricklend"
    };
    let karamel: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Caramel.jpg",
        name: "Karamelschokolade",
        preis: 1.05,
        beschreibung: "cremig, süß"
    };
    let allerlei: Süßigkeit = {
        kategorie: "schokolade",
        bild: "AllerleiSchokolade.jpg",
        name: "Allerlei",
        preis: 1.44,
        beschreibung: "Beeren, kokosflocken, Nüsse"
    };
    let beeren: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Beerenschokolade.jpg",
        name: "Beerenschokolade",
        preis: 1.33,
        beschreibung: "Heidelbeeren, Passionsfrucht"
    };
    let keks: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Butterkeksschokolade.jpg",
        name: "Keksschokolade",
        preis: 1.11,
        beschreibung: "knusprig"
    };
    let nougat: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Nougat.png",
        name: "Nougatschokolade",
        preis: 1.11,
        beschreibung: "nusiig, cremig"
    };
    let smarties: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Smarties.jpg",
        name: "Smartieesschokolade",
        preis: 1.22,
        beschreibung: "zart, reichlich gefüllt"
    };
    let vollmilch: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Vollmilch.jpg",
        name: "Vollmilchschokolade",
        preis: 1.04,
        beschreibung: "Der Klassiker unter der Schokolade"
    };
    let weisse: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Weisse.jpg",
        name: "Weißeschokolade",
        preis: 1.09,
        beschreibung: "cremig, vanillearoma"
    };
    let bitter: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Zartbitter.jpg",
        name: "Zartbitterschokolade",
        preis: 1.09,
        beschreibung: "zart, bitter, knackig"
    };
    let nuss: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Nussschokolade.jpg",
        name: "Nussschokolade",
        preis: 1.22,
        beschreibung: "nussig, cremig, knackig"
    };

    let cola: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Cola.jpg",
        name: "Cola Fläschchen",
        preis: 1.15,
        beschreibung: "Schmeckt wie eine kalte Cola an heißen Sommer Tagen"
    };
    let schnecken: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Fruchschnecken.jpg",
        name: "Fruchtschnecke",
        preis: 1.14,
        beschreibung: "so schön flutschig, wie Schneckenschleim"
    };
    let weingummi: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Fruchtige_Weingummi.jpg",
        name: "Weingummi ",
        preis: 1.33,
        beschreibung: "sorgen für ein beschwipstes Gefühl"
    };
    let lachgummis: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Lachgummis.jpg",
        name: "Lachgummis",
        preis: 1.22,
        beschreibung: "Sorgen für gute Laune"
    };
    let lakritze: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Lakritze.jpg",
        name: "Lakritze",
        preis: 0.99,
        beschreibung: "Einfach nur lecker!"
    };
    let obstsalat: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Obstsalat.jpg",
        name: "Obstsalat",
        preis: 1.26,
        beschreibung: "Für etwas Fruchtiges zwischendurch unser fruchtiger Obstsalat"

    };
    let rainbow: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Rainbow.jpg",
        name: "Rainbow gummi",
        preis: 1.09,
        beschreibung: "Sorgt für mehr Farbe in deinem Leben"
    };
    let schlangen: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Schlangen.jpg",
        name: "Gummischlangen",
        preis: 1.27,
        beschreibung: "Nichts für Angsthasen"
    };
    let schlümpfe: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Schlumpfe1.jpg",
        name: "Schlümpfe",
        preis: 1.09,
        beschreibung: "sorgt für schöne Kindheitserinnerungen"
    };
    let superhirn: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Superhirn.jpg",
        name: "Gummihirn",
        preis: 1.55,
        beschreibung: "erhöht IQ"
    };
    let wassermelone: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Wassermelone.jpg",
        name: "Wassermelone ",
        preis: 1.05,
        beschreibung: "Sorgt für Sommergefühle"
    };
    let schnuller: Süßigkeit = {
        kategorie: "fruchtgummi",
        bild: "Schnuller.jpg",
        name: "Schnuller",
        preis: 1.25,
        beschreibung: "Schweigen ist Gold"
    };

    let süßigkeit: Süßigkeit[] = [mandeln, erdbeere, karamel, allerlei, beeren, keks, nougat, smarties, vollmilch, weisse, bitter, nuss, cola, schnecken, weingummi, lachgummis, lakritze, obstsalat, rainbow, schlangen, schlümpfe, superhirn, wassermelone, schnuller];


    for (let index: number = 0; index < süßigkeit.length; index++) {
        //div erstellen 
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "produkt" + index;
        document.getElementById("schokolade")?.appendChild(newDiv);


        //Bild 
        let imgSüßigkeit: HTMLImageElement = document.createElement("img");
        imgSüßigkeit.src = süßigkeit[index].bild;
        document.getElementById("produkt" + index)?.appendChild(imgSüßigkeit);

        //Name
        let nameSüßigkeit: HTMLParagraphElement = document.createElement("p");
        nameSüßigkeit.innerHTML = süßigkeit[index].name;
        document.getElementById("produkt" + index)?.appendChild(nameSüßigkeit);

        let preisSüßigkeit: HTMLParagraphElement = document.createElement("p");
        preisSüßigkeit.innerHTML = süßigkeit[index].preis + "€";
        document.getElementById("produkt" + index)?.appendChild(preisSüßigkeit);

        //Beschreibung
        let beschreibungSüßigkeit: HTMLParagraphElement = document.createElement("p");
        beschreibungSüßigkeit.innerHTML = süßigkeit[index].beschreibung;
        document.getElementById("produkt" + index)?.appendChild(beschreibungSüßigkeit);

        //in den Einkaufswagen button 
        let indenEinkaufwagen: HTMLButtonElement = document.createElement("button");
        indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
        document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
        indenEinkaufwagen.addEventListener("click", wagenButton);
        indenEinkaufwagen.setAttribute("preis", süßigkeit[index].preis.toString());


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

    let einkaufZaehler: number = 0;
    let preis: number = 0;
    //Zahl in Bubble anzeigen 
    let zaehlerAnzeigen: HTMLParagraphElement = document.createElement("p");
    //Bubble DIV 
    let anzahlBlase: HTMLDivElement = document.createElement("div");
    anzahlBlase.id = "anzahlBlase";

    function wagenButton(_event: Event): void {
        einkaufZaehler++;
        console.log(einkaufZaehler);

        preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(preis);

        //Blase erstellen bei min. 1 Artikel
        if (einkaufZaehler >= 0) {
            document.getElementById("artikelBlase")?.appendChild(anzahlBlase);
        }

        //Zahl in Blase anzeigen
        zaehlerAnzeigen.innerHTML = "" + einkaufZaehler;
        document.getElementById("anzahlBlase")?.appendChild(zaehlerAnzeigen);





    }


}
