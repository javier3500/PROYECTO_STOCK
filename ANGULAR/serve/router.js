//API REST
const router = require('express').Router()
const conexion = require('./configuracion/conexion');

//Rutas para obtener la lista de usuario
router.get('/',function(req, res){
  let sql = "select * from usurios";
  //let sql = "select * from usuarios";
  conexion.query (sql, (err, rows, fields)=>{
    err => console.log("valio madre");
    if(err) throw err;
    else{
      res.json(rows);
    }
  })
})

//Petición que agrega un usuario a la base de datos
router.post('/',(req, res)=>{
  const{nombreusuario,contrasena,estado,tipo} = req.body;
  let sql = `INSERT INTO usurios (nombreusuario, contrasena, estado, idtipo) VALUES ('${nombreusuario}','${contrasena}','desconectado','${tipo}')`;
  conexion.query (sql, (err, rows, fields)=>{
    if(err) {
         console.log('Registro no hecho');
    }else{
      res.json({status: 'usuario agregado'});
    }
  })
})

module.exports = router;
