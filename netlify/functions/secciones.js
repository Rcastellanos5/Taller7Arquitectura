var express =require('express');
var cors=require('cors');
var serverles =require ('serverless-http');
var port=process.env.PORT || 5000;
var app=express();
var seccionesroutes= require("../../backend/routes/SeccionesRoutes.js");
app.use(express.json());
app.use(cors());

 var router=express.Router();
router.use("/secciones", seccionesroutes);

var handler =app.use('/.netlify/functions',router);
exports.handler=serverles(app);