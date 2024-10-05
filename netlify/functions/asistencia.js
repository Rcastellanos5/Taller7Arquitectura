var express =require('express');
var cors=require('cors');
var serverles =require ('serverless-http');
var port=process.env.PORT || 5000;
var app=express();
var asistenciaroutes= require("../../backend/routes/AsistenciaRoutes.js");
app.use(express.json());
app.use(cors());

 var router=express.Router();
router.use("/asistencia", asistenciaroutes);

var handler =app.use('/.netlify/functions',router);
exports.handler=serverles(app);