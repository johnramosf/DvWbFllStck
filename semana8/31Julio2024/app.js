var http = require('http'); 

/* crear servidor básico*/ 

var server = http.createServer((req,res) => {
    res.StatusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Hola bienvenido a mi Server');
});
 
server.listen(3000,'localhost',()=>{
console.log('Servidor corriendo en el localhost puerto 3000');
});


