"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let buttonhtml = document.getElementById("buttonhtml");
    buttonhtml.addEventListener("click", handleHTML);
    let buttonjson = document.getElementById("buttonjson");
    buttonjson.addEventListener("click", handleJSON);
    let serverResponse = document.getElementById("server");
    async function handleHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://lgis20sw.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        serverResponse.innerHTML = responseText;
    }
    async function handleJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis20sw.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let responseJson = JSON.parse(responseText);
        console.log(responseJson);
        serverResponse.innerHTML = responseText;
        console.log(serverResponse);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=A09.js.map