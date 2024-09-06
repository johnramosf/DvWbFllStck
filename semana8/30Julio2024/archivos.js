const fs = require('fs');
const datos = "este es el contenido de mi nuevo archivo ;)";
const ruta = "./resultado.txt";
fs.writeFile(ruta,datos,(err)=>{
 if(err) throw err;
 else console.log("archivo creado correctamente");   
}) 