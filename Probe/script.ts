
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
        name: "gebrannte Mandeln€",
        preis: 1.20,
        beschreibung: "nussig,zimtig"

    };
    let erdbeere: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Erdbeere.png",
        name: "Erdbeerschokolade",
        preis: 1.30,
        beschreibung: "fruchtig, pricklend"
    };
    let karamel: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Caramel.jpg",
        name: "Karamelschokolade",
        preis: 1.00,
        beschreibung: "cremig, süß"
    };
    let allerlei: Süßigkeit = {
        kategorie: "schokolade",
        bild: "AllerleiSchokolade.jpg",
        name: "Allerlei",
        preis: 1.40,
        beschreibung: "Beeren, kokosflocken, Nüsse"
    };
    let beeren: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Beerenschokolade.jpg",
        name: "Beerenschokolade",
        preis: 1.30,
        beschreibung: "Heidelbeeren, Passionsfrucht"
    };
    let keks: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Butterkeksschokolade.jpg",
        name: "Keksschokolade",
        preis: 1.10,
        beschreibung: "knusprig"
    };
    let nougat: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Nougat.png",
        name: "Nougatschokolade",
        preis: 1.20,
        beschreibung: "nusiig, cremig"
    };
    let smarties: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Smarties.jpg",
        name: "Smartieesschokolade",
        preis: 1.20,
        beschreibung: "zart, reichlich gefüllt"
    };
    let vollmilch: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Vollmilch.jpg",
        name: "Vollmilchschokolade",
        preis: 1.00,
        beschreibung: "Der Klassiker unter der Schokolade"
    };
    let weisse: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Weisse.jpg",
        name: "Weißeschokolade ",
        preis: 1.00,
        beschreibung: "cremig, vanillearoma"
    };
    let bitter: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Zartbitter.jpg",
        name: "Zartbitterschokolade",
        preis: 1.00,
        beschreibung: "zart, bitter, knackig"
    };
    let nuss: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Nussschokolade.jpg",
        name: "Nussschokolade",
        preis: 1.20,
        beschreibung: "nussig, cremig, knackig"
    };
    let cola: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Cola.jpg",
        name: "Cola Fläschchen",
        preis: 1.20,
        beschreibung: "Schmeckt wie eine kalte Cola an heißen Sommer Tagen"
    };
    let schnecken: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Fruchschnecken.jpg",
        name: "Fruchtschnecke",
        preis: 1.10,
        beschreibung: "so schön flutschig, wie Schneckenschleim"
    };
    let weingummi: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Fruchtige_Weingummi.jpg",
        name: "Weingummi",
        preis: 1.33,
        beschreibung: "sorgen für ein beschwipstes Gefühl"
    };
    let lachgummis: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Lachgummis.jpg",
        name: "Lachgummis",
        preis: 1.20,
        beschreibung: "Sorgen für gute Laune"
    };
    let lakritze: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Lakritze.jpg",
        name: "Lakritze",
        preis: 0.90,
        beschreibung: "Einfach nur lecker!"
    };
    let obstsalat: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Obstsalat.jpg",
        name: "Obstsalat",
        preis: 1.20,
        beschreibung: "Für etwas Fruchtiges zwischendurch unser fruchtiger Obstsalat"
    
    };
    let rainbow: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Rainbow.jpg",
        name: "Rainbow gummi",
        preis: 1.00,
        beschreibung: "Sorgt für mehr Farbe in deinem Leben"
    };
    let schlangen: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Schlangen.jpg",
        name: "Gummischlangen",
        preis: 1.20,
        beschreibung: "Nichts für Angsthasen"
    };
    let schlümpfe: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Schlumpfe1.jpg",
        name: "Schlümpfe",
        preis: 1.00,
        beschreibung: "sorgt für schöne Kindheitserinnerungen"
    };
    let superhirn: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Superhirn.jpg",
        name: "Gummihirn",
        preis: 1.50,
        beschreibung: "erhöht IQ"
    };
    let wassermelone: Süßigkeit = {
        kategorie: "schokolade",
        bild: "Wassermelone.jpg",
        name: "Wassermelone",
        preis: 1.05,
        beschreibung: "Sorgt für Sommergefühle"
    };
    let schnuller: Süßigkeit = {
        kategorie: "schokolade",
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
        document.getElementById("produkt")?.appendChild(newDiv);


        //Bild 
        let imgSchokolade: HTMLImageElement = document.createElement("img");
        imgSchokolade.src = süßigkeit[index].bild;
        document.getElementById("produkt" + index)?.appendChild(imgSchokolade);

        //Name
        let nameSchokolade: HTMLParagraphElement = document.createElement("p");
        nameSchokolade.innerHTML = süßigkeit[index].name;
        document.getElementById("produkt" + index)?.appendChild(nameSchokolade);

        //Beschreibung
        let beschreibungSchokolade: HTMLParagraphElement = document.createElement("p");
        beschreibungSchokolade.innerHTML = süßigkeit[index].beschreibung;
        document.getElementById("produkt" + index)?.appendChild(beschreibungSchokolade);

        //in den Einkaufswagen button 
        let indenEinkaufwagen: HTMLButtonElement = document.createElement("button");
        indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
        document.getElementById("produkt" + index)?.appendChild(indenEinkaufwagen);
        

        switch (süßigkeit[index].kategorie) {
            case schokolade:
                let getContainerschokolade: HTMLElement = document.getElementById("schokolade")!;
                getContainerschokolade.appendChild(newDiv);
                break;
                case fruchtgummi:
                    let getContainerfruchtgummi: HTMLElement = document.getElementById("fruchtgummi")!;
                    getContainerfruchtgummi.appendChild(newDiv);
                    break;
                    default:
                        break;
        }
    }
}



    




