const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require('./numeros');


const misNumeros = [2, 3, 101, 201, 202, 100];

misNumeros.forEach(element => {
    if(numeros.esPar(element)){
        logger.info(`El número ${element} es par`)
    }else{
        logger.error(`El número ${element} no es par`)
    }
});