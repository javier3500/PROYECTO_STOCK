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
  let sql = `INSERT INTO usurios (nombreusuario, contrasena, estado, idtipo) VALUES ('${nombreusuario}',aes_encrypt('${contrasena}','mapache'),'desconectado','${tipo}')`;
  conexion.query (sql, (err)=>{
    if(err) {
      res.json(false);
    }else{
      res.json(true);
    }
  })
})

router.delete('/:nombreusuario',(req,res) => {
  const {nombreusuario} = req.params
  let sql = `delete from usurios where nombreusuario= '${nombreusuario}'`;
  conexion.query(sql,(err,rows,fields)=> {
    if(err) {
      res.json(false);
    }else{
      res.json(true);
    }
  })
})

/*
router.get('/:nombreusuario',function(req, res){
  const{nombreusuario} =req.params;
  let sql = `SELECT usurios.nombreusuario FROM usurios where nombreusuario = ?`;
  conexion.query (sql, (err)=>{
    //err => console.log("valio madre");
    if(err) throw err;
    else{
      let sql2 = `select  cast(aes_decrypt(contrasena, 'mapache') as char) from usurios where nombreusuario = ?`;
      conexion.query (sql2, [contrasena], (err2, rows, fields)=>{
        //err => console.log("valio madre");
        if(err2) throw err2;
        else{
          res.json(rows);
        }
      })
    }
  })
})
*/

router.get('/:nombreusuario',function(req, res){
  const{nombreusuario} =req.params;
      let sql2 = `select cast(aes_decrypt(contrasena, 'mapache') as char(20))contrasena, idtipo from usurios where usurios.nombreusuario = '${nombreusuario}'`;
      conexion.query (sql2,(err2, rows, fields)=>{
        //err => console.log("valio madre");
        if(err2) throw err2;
        else{
          res.json(rows);
        }
      })
})

module.exports = router;
