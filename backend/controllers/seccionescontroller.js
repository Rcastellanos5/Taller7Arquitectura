const db= require("../database/conexion.js");

class seccionesController{
    constructor(){
    }
    consultar(req,res){
        try{
            db.query('SELECT  * FROM secciones',
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
            const {fecha, horadeinicio,horafinal} = req.body;
            db.query('UPDATE secciones SET fecha=?,horadeinicio=?,horafinal=?, WHERE numerodesecuenciaseccion=?;',
            [dni,nombre],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                if (rows.affectedRows == 1)
                    res.status(200).json({respuesta:"Registro actualizado correctamente"});
            });
        }catch (err){
            //console.log(err);
            res.status(500).send(err.message);
        }
    }
    ingresar(req,res){
        try{
            const {fecha, horadeinicio,horafinal } = req.body;
            db.query('INSERT INTO secciones (fecha, horadeinicio, horafina) VALUES (?, ? );',
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
        const {codigodelcurso} = req.params;
        try{

            db.query('SELECT  * FROM secciones WHERE numerodesecuenciaseccion=?',
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
        const {numerodesecuenciaseccion} = req.params;
        try{
            req.body;
            db.query('DELETE FROM asistencia.secciones WHERE numerodesecuenciaseccion=?;',
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

module.exports = new seccionesController();
