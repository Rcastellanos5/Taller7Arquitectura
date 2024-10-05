const express=require("express");
const cors=require("cors");
const cursoscontroller =require("../controllers/cursoscontroller.js");
const router=express.Router();
router.get("/",cursoscontroller.consultar);
router.post ("/",cursoscontroller.ingresar);
router.route("/:id")

.get(cursoscontroller.consultar)
.put(cursoscontroller.actualizar)
.delete(cursoscontroller.borrar);

module.exports=router;      
