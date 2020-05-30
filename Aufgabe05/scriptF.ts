//Fruchgummi
namespace fruchtgummi {
    interface FruchtgummiProdukt {
        bild: string;
        name: string;
        beschreibung: string;
    }

    let cola: FruchtgummiProdukt = {
    bild: "Cola.jpg",
    name: "Cola Fläschchen 1,20€",
    beschreibung: "Schmeckt wie eine kalte Cola an heißen Sommer Tagen"
};
    let schnecken: FruchtgummiProdukt = {
    bild: "Fruchschnecken.jpg",
    name: "Fruchtschnecke 1,10€",
    beschreibung: "so schön flutschig, wie Schneckenschleim"
};
    let weingummi: FruchtgummiProdukt = {
    bild: "Fruchtige_Weingummi.jpg",
    name: "Weingummi 1,33€",
    beschreibung: "sorgen für ein beschwipstes Gefühl"
};
    let lachgummis: FruchtgummiProdukt = {
    bild: "Lachgummis.jpg",
    name: "Lachgummis 1,20€",
    beschreibung: "Sorgen für gute Laune"
};
    let lakritze: FruchtgummiProdukt = {
    bild: "Lakritze.jpg",
    name: "Lakritze 0,90€",
    beschreibung: "Einfach nur lecker!"
};
    let obstsalat: FruchtgummiProdukt = {
    bild: "Obstsalat.jpg",
    name: "Obstsalat 1,20€",
    beschreibung: "Für etwas Fruchtiges zwischendurch unser fruchtiger Obstsalat"

};
    let rainbow: FruchtgummiProdukt = {
    bild: "Rainbow.jpg",
    name: "Rainbow gummi 1,00€",
    beschreibung: "Sorgt für mehr Farbe in deinem Leben"
};
    let schlangen: FruchtgummiProdukt = {
    bild: "Schlangen.jpg",
    name: "Gummischlangen 1,20€",
    beschreibung: "Nichts für Angsthasen"
};
    let schlümpfe: FruchtgummiProdukt = {
    bild: "Schlumpfe1.jpg",
    name: "Schlümpfe 1,00€",
    beschreibung: "sorgt für schöne Kindheitserinnerungen"
};
    let superhirn: FruchtgummiProdukt = {
    bild: "Superhirn.jpg",
    name: "Gummihirn 1,50€",
    beschreibung: "erhöht IQ"
};
    let wassermelone: FruchtgummiProdukt = {
    bild: "Wassermelone.jpg",
    name: "Wassermelone 1,05€",
    beschreibung: "Sorgt für Sommergefühle"
};
    let schnuller: FruchtgummiProdukt = {
    bild: "Schnuller.jpg",
    name: "Schnuller 1,25€",
    beschreibung: "Schweigen ist Gold"
};

    let fruchgummi: FruchtgummiProdukt[] = [cola, schnecken, weingummi, lachgummis, lakritze, obstsalat, rainbow, schlangen, schlümpfe, superhirn, wassermelone, schnuller];

    for (let index: number = 0; index < fruchgummi.length; index++) {
    //Fruchtgummi
        //div erstellen 
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "Produkt2" + index;
        document.getElementById("Fruchtgummi")?.appendChild(newDiv);
        
        
        //Bild 
        let imgFruchtgummi: HTMLImageElement = document.createElement("img");
        imgFruchtgummi.src = fruchgummi[index].bild;
        document.getElementById("Produkt2" + index)?.appendChild(imgFruchtgummi);
    
        //Name
        let nameFruchtgummi: HTMLParagraphElement = document.createElement("p");
        nameFruchtgummi.innerHTML = fruchgummi[index].name;
        document.getElementById("Produkt2" + index)?.appendChild(nameFruchtgummi);
    
        //Beschreibung
        let beschreibungFruchtgummi: HTMLParagraphElement = document.createElement("p");
        beschreibungFruchtgummi.innerHTML = fruchgummi[index].beschreibung;
        document.getElementById("Produkt2" + index)?.appendChild(beschreibungFruchtgummi);
    
        //in den Einkaufswagen button 
        let indenEinkaufwagen: HTMLButtonElement = document.createElement("button");
        indenEinkaufwagen.innerHTML = "in den Einkausfwagen";
        document.getElementById("Produkt2" + index)?.appendChild(indenEinkaufwagen);
    }
}


