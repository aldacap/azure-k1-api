﻿// Todas las personas que tengan acceso al aplicativo
var mongoose = require('mongoose');
// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    correo : { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    apellidos: String,
    cedula: { type: Number, unique: true } ,
    genero: String,
    nacimiento: Date, 
    _ubicacion : { type: Schema.Types.ObjectId, ref: 'Ubicacion' },
    ocupaciones : [{ type: Schema.Types.ObjectId, ref: 'Ocupacion' }],
    direccion: { type: String, required: true } ,
    foto: Buffer,
    creado: Date,
    modificado: Date,
    activo: { type: Boolean, required: true },
    token: { type: String, required: true } // uuid para autenticación de los servicios
});


// adiciona las validaciones de campos únicos
usuarioSchema.plugin(uniqueValidator, { message: 'Error, el valor de {PATH} debe ser único.' });

module.exports = mongoose.model('Usuario', usuarioSchema);