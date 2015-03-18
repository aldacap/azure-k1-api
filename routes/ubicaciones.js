// Crud para los ubicaciones
var Ubicacion = require('../models/ubicacion');
var express = require('express');
var router = express.Router();
var oauth = require('../oauth.js');

// la ruta raiz sin parámetros acepta dos métods, put y get
router.route('/ubicaciones')

// crear una nueva ubicacion
    .post(function (req, res) {
    var ubicacion = new Ubicacion(req.body);
    
    ubicacion.save(function (err) {
        if (err) {
            return res.send(err);
        }
        
        res.send({ message: 'OK, ubicacion adicionado' });
    });
})

// retorna todas las ubicaciones
.get(
    // Authenticate using HTTP Bearer credentials, with session support disabled.
    oauth.authenticate('bearer', { session: false }), 
    function (req, res) {
        Ubicacion.find(function (err, ubicaciones) {
            if (err) {
                return res.send(err);
            }
            
            res.json(ubicaciones);
        });
    });


// ruta con parametro entero
router.route('/ubicaciones/:id')

// Actualiza una ubicación
.put(function (req, res) {
    Ubicacion.findOne({ _id: req.params.id }, function (err, ubicacion) {
        if (err) {
            return res.send(err);
        }
        
        for (prop in req.body) {
            ubicacion[prop] = req.body[prop];
        }
        
        // actualiza la ubicación
        ubicacion.save(function (err) {
            if (err) {
                return res.send(err);
            }
            
            res.json({ message: 'Ubicacion actualizada!' });
        });
    });
})

.delete(function (req, res) {
    Ubicacion.remove({
        _id: req.params.id
    }, function (err, movie) {
        if (err) {
            return res.send(err);
        }
        
        res.json({ message: 'Ubicación eliminada' });
    });
});



// rutas con parametro string
router.route('/ubicaciones/:nombre')
// consultar ubicaciones por nombre
.get(function (req, res) {
    var regex = new RegExp(req.params.nombre, "i")
    , query = { nombre: regex };
    
    Ubicacion.find(query, function (err, ubicaciones) {
        if (err) {
            return res.send(err);
        }
        
        res.json(ubicaciones);
    });
});


module.exports = router;