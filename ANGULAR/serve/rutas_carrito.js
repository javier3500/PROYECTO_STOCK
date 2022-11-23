const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');

//asignaciones de todas las rutas
/*
rutas.get('/',function(req,res){
    res.send('rutas de servicio')
});
*/

// AGREGAR  `stock`


rutas.post('/',(req, res) => {
    const{id_articulo,producto,id_presentacion} = req.body
    let sql = `insert into almacen (id_articulo,producto,id_presentacion) value ('${id_articulo}','${producto}','${id_presentacion}')`
    conexion.query(sql,(err,rows,fields)=> {
        if(err) throw err
        else{
            res.json({status: 'INSERCION EXITOSA'})
        }
        
    })
})

/*

$sql1="SELECT * FROM almacen
           LEFT JOIN
           presentacion
           ON
           almacen.id_articulo = presentacion.id_presentacion;
*/


// MOSTRAR 

rutas.get('/',(req, res) => {
    let sql = `select * from presentacion`
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
        
    })
})
/*
rutas.get('/',(req, res) => {
    let sql = `select * from presentacion`
    conexion.query(sql,(err,rows,fields)=>{
        if (err) throw err;
        else{
            res.json(rows)
        }
        
    })
})
*/
module.exports = rutas;

