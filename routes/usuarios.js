// Crud para los usuarios
var Usuario = require('../models/usuario');
var express = require('express');
var router = express.Router();

var uuid = require('uuid'); // modulo para generar los token

// consultar usuarios
router.route('/usuarios').get(function (req, res) {
    Usuario.find(function (err, usuarios) {
        if (err) {
            return res.send(err);
        }
        
        res.json(usuarios);
    }).populate('_ubicacion');
});

// consultar usuarios por nombre
router.route('/usuarios/:nombre').get(function (req, res) {
    var regex = new RegExp(req.params.nombre, "i")
    , query = { nombre: regex };
    
    Usuario.find(query, function (err, usuarios) {
        if (err) {
            return res.send(err);
        }
        
        res.json(usuarios);
    });
});

// crear un nuevo usuario
router.route('/usuarios').post(function (req, res) {
    var usuario = new Usuario(req.body);
    
    // asigna un token al usuario
    usuario.token = uuid.v1();
    
    usuario.save(function (err) {
        if (err) {
            return res.send(err);
        }
        
        res.send({ message: 'OK, usuario adicionado' });
    });
});


module.exports = router;