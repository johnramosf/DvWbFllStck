const db = require('../bd/mysql');
const tabla = 'usuarios';
const conn = db.conectarDb
const sql = "select * from usuarios";

function getAll(){
    console.log("Consulta:  " +sql );
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Consulta usuarios:  " + result);
      });
} 

exports.getAll = getAll;