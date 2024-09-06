const express = require('express');
const cfg = require('./config');
const app = express();
const clientes = require('./modulos/clientes/rutas');

console.log('portlog: '+cfg.cfg.app.port);
app.set('port', cfg.cfg.app.port);

app.listen(app.get('port'),()=>{
    console.log('Inicializando  servidor express escuchando en el puerto: '+app.get('port'));
})

//rutas
app.use('/api/clientes',clientes);
    

module.exports = app;