// Información geografica
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var ubicacionSchema = new Schema({
    pais: { type: String, required: true },
    departamento: { type: String, required: true },
    municipio: { type: String, required: true },
    codigo: { type: String, required: true, unique: true }
});

// adiciona las validaciones de campos únicos
ubicacionSchema.plugin(uniqueValidator, { message: 'Error, el valor del código debe ser único.' });

module.exports = mongoose.model('Ubicacion', ubicacionSchema);