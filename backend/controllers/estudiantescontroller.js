const db= require("../database/conexion.js");

class estudiantesController{
    constructor(){
    }
    consultar(req,res){
        try{
            db.query('SELECT  * FROM estudiantes',
            [],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows);
            });
        }catch (err){
            res.status(500).send(err.message);
        }
    }
    
    actualizar(req,res){
        const {id} = req.params;
        try{
            const {nombre,documentodelestudiante} = req.body;
            db.query('UPDATE estudiantes SET nombre=? WHERE documentodelestudiante=?;',
            [nombre,id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro actualizado correctamente"});
            });
        }catch (err){
            //console.log(err);s
            res.status(500).send(err.message);
        }
    }
    ingresar(req,res){
        try{
            const {documentodelestudiante, nombre} = req.body;
            db.query('INSERT INTO estudiantes (documentodelestudiante, nombre ) VALUES (?, ? );',
            [documentodelestudiante,nombre],(err,rows) => {
                if(err) {
                    console.error("wdwde",err)
                    res.status (400).send(err.message);
                }else{
                    res.status(201).json({
                        message:"Ingresado",
                        id: rows.insertId});
                    
                }
            });
        }catch (err){
            res.status(500).send(err.message);
        }
    }
    consultarDetalle(req,res){
        const {id} = req.params;
        try{

            db.query('SELECT  * FROM estudiantes WHERE documentodelestudiante=?',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows[0]);
            });
        }catch (err){
            res.status(500).send(err.message);
        }

    }
    borrar(req,res){
        const {id} = req.params;
        try{
            req.body;
            db.query('DELETE FROM estudiantes WHERE documentodelestudiante=?;',
            [id],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro borrado correctamente"});
            });
        }catch (err){
            res.status(500).send(err.message);
        }
   }


}

module.exports = new estudiantesController();
