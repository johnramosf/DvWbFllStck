var http = require("http");
var url = require("url");

function iniciar(route) {
   function onRequest(request, response) {
      //console.log("Peticion Recibida.");
      var pathname = url.parse(request.url).pathname;
      console.log("Petición para " + pathname + " recibida.");

      route(pathname);

      response.StatusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end("Hola Mundo");
   }
   http.createServer(onRequest).listen(8888);
   console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;