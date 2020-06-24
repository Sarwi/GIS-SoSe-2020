namespace Aufgabe08 {
    let formData: FormData;
    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonhtml");
    buttonhtml.addEventListener("click", communiacateHTML);

    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonjson");
    buttonjson.addEventListener("click", communiacateJSON);

    async function communiacateHTML(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis20sw.herokuapp.com/";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement>document.getElementById("server");
        serverResponse.innerHTML = responseText;

    }

    async function communiacateJSON(): Promise<void> {

        formData = new FormData(document.forms[0]);
        let url: string = "https://gis20sw.herokuapp.com/";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(responseText);

    }
}

