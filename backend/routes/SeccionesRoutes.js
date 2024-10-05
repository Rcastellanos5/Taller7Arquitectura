const express=require("express");
const cors=require("cors");
const seccionesscontroller =require("../controllers/seccionescontroller.js");
const router=express.Router();
router.get("/",seccionescontroller.consultar);
router.post ("/",seccionescontroller.ingresar);
router.route("/:id")

.get(seccionescontroller.consultar)
.put(seccionescontroller.actualizar)
.delete(seccionescontroller.borrar);

module.exports=router;      
