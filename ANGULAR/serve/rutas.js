const rutas = require('express').Router();
const { Router } = require('express');
const conexion = require('./configuracion/conexion');



rutas.post('/',(req, res) => {
    const{idarticulo,producto,existencia,precioventa,preciocompra,id_presentacion} = req.body
    let sql = `insert into almacen (idarticulo,producto,existencia,precioventa,preciocompra,idpresentacion) 
    value 
    ('${idarticulo}','${producto}','${existencia}','${precioventa}','${preciocompra}','${id_presentacion}')`

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



// MOSTRAR 
rutas.get('/',(req, res) => {
    let sql = `SELECT * FROM almacen
    LEFT JOIN
    presentacion
    ON
    almacen.idpresentacion = presentacion.idpresentacion`
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


rutas.get('/:id',(req, res) => {
    const {id} = req.params
    let sql = `SELECT * FROM almacen
    LEFT JOIN
    presentacion
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


rutas.delete('/:id',(req,res) => {

    const {id} = req.params
    let sql = `delete from almacen where idarticulo = '${id}'`
    conexion.query(sql,(err,rows,fields)=> {
    try{
        if (err) throw err
        else{
            res.json(rows)
        }
    }catch(e){

        console.log("ERROR EN LA ELIMINACION DE LOS DATOS /// " + e )

    }
        
    })
    
})

rutas.put('/:id',(req,res) =>{
    const {id} = req.params
    const {producto,existencia,precioventa,preciocompra} = req.body
    
    let sql =   `update almacen set 
                 producto ='${producto}',
                 existencia= '${existencia}',
                 precioventa = '${precioventa}',
                 preciocompra = '${preciocompra}' 
                 where idarticulo = '${id}' `
                 conexion.query(sql,(err,rows,fields)=> {

                    try{
                        if (err) throw err
                    else{
                        res.json({status: 'equipo modificado'})
                    }
                    }catch(e){
                        console.log("ERROR EN LA ACTUALIZACION DE LOS DATOS /// " + e)
                    }
                    
                })
})

module.exports = rutas;

