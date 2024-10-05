const express=require("express");
const cors=require("cors");
const estudiantescontroller =require("../controllers/estudiantescontroller.js");
const router=express.Router();
router.get("/",estudiantescontroller.consultar);
router.post ("/",estudiantescontroller.ingresar);
router.route("/:id")

.get(estudiantescontroller.consultar)
.put(estudiantescontroller.actualizar)
.delete(estudiantescontroller.borrar);

module.exports=router;      
