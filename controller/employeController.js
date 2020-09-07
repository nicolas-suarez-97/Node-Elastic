const { validationResult } = require('express-validator');
const db = require('../config/db');

exports.getAllEmployes = async (req, res) => {
    let dbResponse = await db.get('employe');
    return res.status(200).json(dbResponse.hits.hits);
}

exports.getEmployeById = async (req, res )=>{
    let dbResponse = await db.getById('employe',req.params.id);
    try {
        return res.status(200).json(dbResponse);
    } catch (error) {
        return res.status(404).json({'msg':'Usuario no encontrado'});
    }
}

exports.createEmploye = async (req, res )=>{
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errores:errors.array()});
    }

    try {
        let dbResponse = await db.post('employe',req.body);
        return res.status(201).json(dbResponse);
    } catch (error) {
        // console.log(error);
        return res.status(404).json({'msg':'No se pudo crear el usuario'});
    }
}

exports.updateEmploye = async (req, res )=>{
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json({errores:errors.array()});
    }
    try {
        let dbResponse = await db.put('employe',req.body, req.params.id);
        return res.status(202).json(dbResponse);
    } catch (error) {
        return res.status(404).json({'msg':'No se pudo actualizar el usuario'});
    }
}

exports.deleteEmploye = async (req, res )=>{
    try {
        let dbResponse = await db.delete('employe',req.params.id);
        console.log(dbResponse.data);
        return res.status(200).json(dbResponse);
    } catch (error) {
        return res.status(404).json({'msg':'Usuario no encontrado'});
    }
    
}