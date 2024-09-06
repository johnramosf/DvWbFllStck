Logger = require('logplease');
const logger = Logger.create('utils');

const saludo = (nombre, apellido, callback) => 
         {logger.info(`Hola ${nombre}  ${apellido} `)};

const mensaje =  () => {
    logger.info("... Luego de saludar se ejecuta el callback");
    }

exports.saludo = saludo;
exports.mensaje = mensaje;