const mysql = require('mysql2');
const config = require('../config');
//una prueba

/*const prueba={
    id:1,
    nombre:juan,
    edad: 43
}*/


// creamos nuestro primer archivo de configuracion 
const dbConfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port
};

//creamos variable conexion
let conexion;
//creamos una funcion de conexion
function conMysql() {
    conexion = mysql.createConnection(dbConfig);
    conexion.connect((err) => {
        if (err) {
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }
        else {
            console.log('Base de datos conectada!!!');
        }
    });
    conexion.on('error', err => {
        console.log('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conMysql();
        }
        else {
            throw err;
        }
    });
}
//llamar a la conexion
conMysql();
//creacion de funcion para treaer todos los datos de la tabla
function todos(tabla) {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
//creacion de funcion para treaer solo un dato de la tabla
function uno(tabla, id) {

    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

//creacion de funcion para eliminar
function insertar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET = ?`, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
function actualizar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET = ? WHERE id = ?`, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
function agregar(tabla, data) {
    if(data && data.id==0){
        return insertar(tabla, data);
    }
    else{
        return actualizar(tabla, data)
    }
}

function eliminar(tabla, data) {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ?? WHERE id = ?`, [tabla, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}
//creacion de funcion para actualizar y agregar

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    actualizar
}