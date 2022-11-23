//API REST
const router = require('express').Router()
const conexion = require('./config/conexion');

//Ruta para obtener la lista de producto
router.get('/',function(req, res){
  let sql = `SELECT almacen.idarticulo,almacen.producto FROM almacen`;
  //let sql = "select * from usuarios";
  conexion.query (sql, (err, rows, fields)=>{
    err => console.log("valio madre");
    if(err) throw err;
    else{
      res.json(rows);
    }
  })
})

//Rutas para obtener la lista de producto
router.get('/:producto',function(req, res){
  const{producto} =req.params;
  let sql = `SELECT almacen.idarticulo,almacen.producto FROM almacen where producto = ?`;
  conexion.query (sql, [producto], (err, rows, fields)=>{
    err => console.log("valio madre");
    if(err) throw err;
    else{
      res.json(rows);
    }
  })
})

module.exports = router;



