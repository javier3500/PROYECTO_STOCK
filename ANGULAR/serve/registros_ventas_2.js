const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');

rutas.post('/',(req, res) => {
    const{idregistroventa,nombrearticulo,registroexistencia,idventa,registropreciocompra} = req.body
    let sql = `insert into stock.registro_venta 
    (idregistroventa,nombrearticulo,registroexistencia,idventa,registropreciocompra) 
    values ('${idregistroventa}','${nombrearticulo}','${registroexistencia}','${idventa}','${registropreciocompra}')`

    try{
        conexion.query(sql,(err,rows,fields)=> {
            try{
                if(err) throw err
                else{
                    res.json({status: 'PRESENTACION INSERTADA'})
                }
            }catch(e){
                console.log('ERROR EN LA INSERSION /// ' + e)
            }
            
        })
    }catch(e){
        console.log('ERROR EN LA INSERSION')
    }
    
})


rutas.get('/',(req, res) => {
    let sql = `SELECT 
    ventas.idventa,ventas.vendido,ventas.fecha,ventas.hora,
    ventas.totalcompra,ganancias.idganancias,ganancias.ganacia FROM stock.ventas
    LEFT JOIN
    stock.ganancias
    ON
    stock.ventas.idventa = stock.ganancias.idventa`
    conexion.query(sql,(err,rows,fields)=>{

    try{

        if (err) throw err;
            else{
                res.json(rows)
            }
        }catch(e){
            console.log("ERROR EN LA BUSQUEDA DE INFORMACION /// " + e)
    }
       
        
    })
})


module.exports = rutas;