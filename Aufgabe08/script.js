"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    //wenn port nicht funktioniert, dann if (!port)
    if (!port)
        port = 8100; //wird auf 8100 gesetzt
    //Variable Server erstellen 
    let server = Http.createServer();
    server.addListener("request", handleRequest); //wartet auf Anfrage
    server.addListener("listening", handleListen);
    server.listen(port); //schaut 
    //Listener werden beschriben und Konsole gibt Listening aus 
    function handleListen() {
        console.log("Listening"); //Konsolen Ausgabe 
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolen Ausgabe i hear voices
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); //Ausgabe von url
        _response.end(); //response beenden 
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=script.js.map