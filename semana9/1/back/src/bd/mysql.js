const mysql = require('mysql');
const config = require('../config');
const sql = "select * from usuarios";
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}

function conectarDb(){
    console.log(dbConfig);
    const conexion = mysql.createConnection(dbConfig);
    conexion.connect((err)=>{
        if(err){
            throw err;
            console.log('db err', err);
            setTimeout(conMysql,200)
        }
        else {
            console.log('Base de datos conectada !!! ');
            conexion.query(sql, function (err, result) {
                if (err) throw err;

             const  json = JSON.stringify(result);                  
                console.log("Consulta usuarios:  " + json);
              });
            return conexion;
        }         
    });
}

exports.conectarDb = conectarDb;