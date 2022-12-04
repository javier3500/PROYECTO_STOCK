const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');

rutas.post('/',(req, res) => {
    const{idventa,vendido,fecha,hora} = req.body
    let sql = `insert into ventas (idventa,vendido,fecha,hora) 
    value 
    ('${idventa}','${vendido}','${fecha}','${hora}')`

    try{
        conexion.query(sql,(err,rows,fields)=> {
            try{
                if(err) throw err
                else{
                    res.json({status: 'INSERCION EXITOSA'})
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
    
    let sql = `SELECT count(idventa) as id_count FROM stock.ventas`
    //let sql = `SELECT * FROM stock.ventas`
    
    conexion.query(sql,(err,rows)=>{

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

