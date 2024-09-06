const express= require('express');
const myserver = express();
const puerto= 4000;

myserver.get('/',(req,res)=>{
    res.end('Bienvenidos a Node.js desde express');
});

myserver.listen(puerto, (err)=>{
    if(err){
        console.log(`No se pudo levantar el servidor Express en el puerto: ${puerto}`);
    } 
    console.log(`El servidor Express se ha levantado en el puerto: ${puerto}`);
});