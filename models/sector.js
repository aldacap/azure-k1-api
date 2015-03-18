// Sectores de ocupaciones o actividades
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var sectorSchema = new Schema({
    nombre: { type: String, required: true }
});

// adiciona las validaciones de campos únicos
sectorSchema.plugin(uniqueValidator, { message: 'Error, el valor de {PATH} debe ser único.' });

module.exports = mongoose.model('Sector', sectorSchema);