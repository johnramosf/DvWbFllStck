const http = require('http');
const puerto = 3306;

const servidor = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bienvenidos a Node.js Server Side\n'); 
});

servidor.listen(puerto, (err)=>{
    if (er){
        console.error(`Servidor No se pudo levantar en el puerto ${puerto}`);
        throw er;
    }  // Error en la escucha del puerto
    console.log(`Servidor escuchando en el puerto ${puerto}`);
});