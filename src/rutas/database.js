

const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practica1trimestre'

});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Db esta coenctada');
    }

});

module.exports = mysqlConnection;