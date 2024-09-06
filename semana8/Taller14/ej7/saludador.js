Logger = require('logplease');
const logger = Logger.create('utils');

const saludo = (nombre, apellido, callback) => 
         {logger.info(`Hola ${nombre}  ${apellido} `)};

const delayedMessage = (setTimeout(() => {
    logger.info("... Luego de saludar se ejecuta el callback")}
                                          ,1000));

exports.saludo = saludo;
exports.delayedMessage = delayedMessage;