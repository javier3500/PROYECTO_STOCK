require ('./configuracion/conexion');

const express = require ('express');

const port = (process.env.port || 3000);

// express 
const app = express();

// admitir 
app.use(express.json());

// configuracion 
app.set ('port', port);

// rutas
try{
    app.use('/api',require('./rutas'));
}catch(e){
    console.log('ERROR EN LA COSULTA')
}

app.use('/carrito',require('./rutas_carrito'));
app.use('/carrito_2',require('./rutas_carrito_2'));
app.use('/usuarios',require('./router'));
app.use('/carrito',require('./rutas_carrito'));
app.use('/registros_ventas_1_sql',require('./registros_ventas_1'));
app.use('/registros_ventas_2_sql',require('./registros_ventas_2'));
//app.use('/carrito',require('./rutas_carrito'));

// declaras que funciona la ruta
app.listen(app.get('port'), (error) => {
    if(error){
        console.log('ERROR AL INICIAR SERVIDOR: '+error );

    }else {
        console.log('SERVIDIOR INICIADO CORRECTA MENTE: ' + port);
    }
})