const app = require('./app');
const mysql = require('./bd/mysql');
const controlador = require('./modulos/controlador');
 

if(app.get('port') == undefined || app.get('port')== null){
    app.listen(app.get('port'),()=>{
       console.log('inicializando servidor express sin nodemon en index escuchando en el puerto: '+app.get('port'));
    })
} else console.log('servidor express previamente inicializado en index escuchando en el puerto: '+app.get('port'));
const usuarios = mysql.conectarDb();




