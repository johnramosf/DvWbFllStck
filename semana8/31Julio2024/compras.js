const fs = require('fs');
fs.readFile('compras.json','utf8',(err,data) =>{
    if(err){
        console.error('error al leer el archivo:',err);
        return;
    }
    //parsear el contenido del json
    const factura = JSON.parse(data);
    //trabajando con los datos
    console.log(`la compra en ${factura.tienda} se hizo el día: ${factura.fecha} `);
    console.log(`Cliente: ${factura.cliente.nombre}`);
});
