const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');


rutas.post('/',(req, res) => {
    const{idganancias,ganacia,idventa} = req.body
    let sql = `insert into stock.ganancias 
    (idganancias,ganacia,idventa) 
    values ('${idganancias}','${ganacia}','${idventa}')`

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
    let sql = `SELECT count(idganancias) as id_gan FROM stock.ganancias`
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
