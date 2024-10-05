const express = require('express');
const cors = require("cors");
const serverless = require ('serverless-http');

var port = process.env.PORT || 5000;


const app = express();
const estudiantesroutes = require("./backend/routes/EstudiantesRoutes.js");
const cursosroutes=require("./backend/routes/CursosRoutes.js");
const asistenciaroutes=require("./backend/routes/AsistenciaRoutes.js");
const seccionesroutes=require("./backend/routes/SeccionesRoutes.js")
app.use(express.json());
app.use(cors());


app.get ("/", (req,res) => {
    res.send ("Hola mundo");
})
app.use ("/estudiantes",estudiantesroutes);
app.use ("/cursos",cursosroutes);
app.use("/asistencia",asistenciaroutes);
app.use("/secciones",seccionesroutes);

app.listen (5000,() =>{
    console.log("servidor activo");
});
