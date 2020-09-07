const { validationResult } = require('express-validator');
const db = require('../config/db');

exports.getAllEmployes = async (req, res) => {
    let dbResponse = await db.get('employe');
    let response = [];
    dbResponse.hits.hits.map(r =>{
        response.push({
            id: r._id,
            name: r._source.name,
            email: r._source.email
        });
    });
    return res.status(200).json(response);
}

exports.getEmployeById = async (req, res )=>{
    let dbResponse = await db.getById('employe',req.params.id);
    try {
        let response = {
            id: dbResponse._id,
            name: dbResponse._source.name,
            email: dbResponse._source.email
        }
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
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