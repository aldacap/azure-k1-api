// información de la prestación de un servicio
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var servicioSchema = new Schema({
    _cliente : { type: Schema.Types.ObjectId, ref: 'Usuario' , required: true },
    _proveedor : { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    _calificacion : { type: Schema.Types.ObjectId, ref: 'Calificacion', required: true },
    inicio: { type: Date, default: Date.now, required: true }
});

// adiciona las validaciones de campos únicos
servicioSchema.plugin(uniqueValidator, { message: 'Error, el valor de {PATH} debe ser único.' });

module.exports = mongoose.model('Servicio', servicioSchema);