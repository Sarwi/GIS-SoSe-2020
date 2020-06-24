"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let buttonhtml = document.getElementById("buttonhtml");
    buttonhtml.addEventListener("click", communiacateHTML);
    let buttonjson = document.getElementById("buttonjson");
    buttonjson.addEventListener("click", communiacateJSON);
    async function communiacateHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis20sw.herokuapp.com/";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("server");
        serverResponse.innerHTML = responseText;
    }
    async function communiacateJSON() {
        formData = new FormData(document.forms[0]);
        let url = "https://gis20sw.herokuapp.com/";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=A09.js.map