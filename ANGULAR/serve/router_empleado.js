//API REST
const router = require('express').Router()
const conexion = require('./configuracion/conexion');

//Ruta para obtener la lista de producto
router.get('/',function(req, res){
  let sql = `select
  idempleado,
  cast(aes_decrypt(nombre, 'mapache') as char(20))nombre,
  cast(aes_decrypt(apellido1, 'mapache') as char(20))apellido1,
  cast(aes_decrypt(apellido2, 'mapache') as char(20))apellido2,
  cast(aes_decrypt(sexo, 'mapache') as char(20))sexo,
  cast(aes_decrypt(fechanacimiento, 'mapache') as char(20))fechanacimiento from empleado;`;
  conexion.query (sql, (err, rows)=>{
    err => console.log("valio madre");
    if(err) throw err;
    else{
      res.json(rows);
    }
  })
})


//Petición que agrega un usuario a la base de datos
router.post('/',(req, res)=>{
  const{nombre,apellido1,apellido2,sexo,fechanacimiento,idempleado} = req.body;
  //let sql2 = `INSERT INTO empleado (nombre, apellido1, apellido2, sexo, fechanacimiento,ine) VALUES ('${nombre}','${apellido1}','${apellido2}','${sexo}','${fechanacimiento}','${ine}')`;

  let sql = `INSERT INTO empleado (idempleado, nombre, apellido1, apellido2, sexo, fechanacimiento) VALUES
  ('${idempleado}',
  aes_encrypt('${nombre}' ,'mapache'),
  aes_encrypt('${apellido1}' ,'mapache'),
  aes_encrypt('${apellido2}' ,'mapache'),
  aes_encrypt('${sexo}' ,'mapache'),
  aes_encrypt('${fechanacimiento}' ,'mapache'));`;
  conexion.query (sql, (err)=>{
    if(err) {
      res.json(false);
    }else{
      res.json(true);
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

router.delete('/:idempleado',(req,res) => {
  const {idempleado} = req.params
  let sql = `delete from empleado where idempleado = '${idempleado}'`
  conexion.query(sql,(err,rows,fields)=> {
    if(err) {
      res.json(false);
    }else{
      res.json(true);
    }
  })
})

module.exports = router;



