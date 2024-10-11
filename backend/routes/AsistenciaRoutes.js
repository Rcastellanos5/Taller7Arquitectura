const express=require("express");
const cors=require("cors");
const asistenciacontroller =require("../controllers/asistenciacontroller.js");
const router=express.Router();
router.get("/",asistenciacontroller.consultar);
router.post ("/",asistenciacontroller.ingresar);
router.route("/:id")

.get(asistenciacontroller.consultar)
.put(asistenciacontroller.actualizar)
.delete(asistenciacontroller.borrar);

module.exports=router;      
