//API REST
const router = require('express').Router()
const conexion = require('./configuracion/conexion');

//Ruta para verificar si el sistema esta habilitado o no
router.get('/',function(req, res){
  let sql = `SELECT sistema.disponible FROM sistema where idsistema = 'sistem'`;
  conexion.query (sql, (err, rows)=>{
    err => console.log("valio madre");
    if(err) throw err;
    else{
      res.json(rows);
    }
  })
})

/*ruta para habilitar o deshabilitar el sistema. *propiedad sólo puede ser habilitado que indica que el
sistema está disponible y deshabilitado para que el sistema no esté disponible.
*/
router.put('/:idsistema',(req, res) =>{
  const {idsistema} = req.params;
  const {disponible} =  req.body;
  let sql = `update sistema set disponible = '${disponible}' where idsistema = '${idsistema}';`;
  conexion.query (sql, (err, rows)=>{
    if(err) {
      res.json(false);
    }else{
      res.json(true);
    }
  })
})

module.exports = router;
