const mysql = require ('mysql');

const conexion = mysql.createConnection ({

    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database : 'stock',
    insecureAuth : true
});

conexion.connect((err) => {
    
    if(err){
        console.log('ERROR DE CONEXION: '+ ' -- ' + err )

    }else {
        console.log('BASE DE DATOS SE A CONECTADO !!')
    }

});

module.exports = conexion;