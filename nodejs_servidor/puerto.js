//creacion del modulo
var http = require("http");

//creo la funcion e indico el puerto donde voy a escuchar la respuesta 
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');
}).listen(8081);

// Imprimimos un mensaje en consola
console.log('Server running at http://127.0.0.1:8081/');
