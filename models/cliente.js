// Información geografica
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var clienteSchema = new Schema({
    usuario: { type: String, required: true },
    token: { type: String, required: true }
});

// adiciona las validaciones de campos únicos
clienteSchema.plugin(uniqueValidator, { message: 'Error, el valor del código debe ser único.' });

module.exports = mongoose.model('Cliente', clienteSchema);