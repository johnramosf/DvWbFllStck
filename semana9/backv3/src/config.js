require('dotenv').config();

module.exports ={
    app:{
        port: process.env.PORT || 4000,
    },
    //creacion del objeto mysql
    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'rosaly2',
        password: process.env.MYSQL_PASSWORD || "13245678",
        database: process.env.MYSQL_DB || 'roslay',
        port: process.env.MYSQL_DB_PORT || 3307
    }
}