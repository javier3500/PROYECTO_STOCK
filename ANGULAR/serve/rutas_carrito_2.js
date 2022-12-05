const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');

rutas.get('/:id',(req, res) => {
    const {id} = req.params
    let sql = `SELECT * FROM stock.almacen
    LEFT JOIN
    stock.presentacion
    ON
    almacen.idpresentacion = presentacion.idpresentacion 
    where idarticulo = ?` 
    conexion.query(sql,[id],(err,rows,fields)=>{

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

rutas.put('/:id',(req,res) =>{
    const {id} = req.params
    const {existencia} = req.body
    
    let sql =   `update almacen set 
                 
                 existencia= '${existencia}' 
                 where idarticulo = '${id}' `
                 conexion.query(sql,[id],(err,rows,fields)=> {

                    try{
                        if (err) throw err
                    else{
                        res.json({status: 'articulo modificado'})
                    }
                    }catch(e){
                        console.log("ERROR EN LA ACTUALIZACION DE LOS DATOS /// " + e)
                    }
                    
                })
})

module.exports = rutas;
