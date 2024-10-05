var express =require('express');
var cors=require('cors');
var serverles =require ('serverless-http');
var port=process.env.PORT || 5000;
var app=express();
var estudiantesroutes= require("../../backend/routes/EstudiantesRoutes.js");
app.use(express.json());
app.use(cors());

 var router=express.Router();
router.use("/estudiantes", estudiantesroutes);

var handler =app.use('/.netlify/functions',router);
exports.handler=serverles(app);

