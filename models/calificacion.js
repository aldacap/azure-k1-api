// calificaciones de ocupaciones o actividades
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// valida los campos únicos
var uniqueValidator = require('mongoose-unique-validator');

var calificacionSchema = new Schema({
    economia: { type: Number, required: true, min: 0, max: 5, default: 0 },
    calidad: { type: Number, required: true, min: 0, max: 5, default: 0 },
    respeto: { type: Number, required: true, min: 0, max: 5, default: 0 },
    puntualidad: { type: Number, required: true, min: 0, max: 5, default: 0 },
    agilidad: { type: Number, required: true, min: 0, max: 5, default: 0 },
    descripcion: String
});

// adiciona las validaciones de campos únicos
calificacionSchema.plugin(uniqueValidator, { message: 'Error, el valor de {PATH} debe ser único.' });

// virtuales
calificacionSchema.virtual('total').get(function () {
    var sum = 0;
    var tot = 0;
    if (this.economia !== 0) {
        sum = this.economia;
        tot = tot + 1;
    }
    
    if (this.calidad !== 0) {
        sum = (sum + this.calidad);
        tot = tot + 1;
    }
    
    if (this.respeto !== 0) {
        sum = (sum + this.respeto);
        tot = tot + 1;
    }
    
    if (this.puntualidad !== 0) {
        sum = (sum + this.puntualidad);
        tot = tot + 1;
    }
    
    if (this.agilidad !== 0) {
        sum = (sum + this.agilidad);
        tot = tot + 1;
    }
    
    return Math.ceil(sum / tot);
});


module.exports = mongoose.model('Calificacion', calificacionSchema);