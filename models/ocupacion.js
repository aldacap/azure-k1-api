﻿// Información geografica
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var ocupacionSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    _sector : { type: Schema.Types.ObjectId, ref: 'Sector' },
});

// adiciona las validaciones de campos únicos
ocupacionSchema.plugin(uniqueValidator, { message: 'Error, el valor de {PATH} debe ser único.' });

module.exports = mongoose.model('Ocupacion', ocupacionSchema);