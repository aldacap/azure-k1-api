var express = require('express'); // modulo express: rutas
var bodyParser = require('body-parser'); // modulo de obtener los parametros de los request
var mongoose = require('mongoose'); // mapeo de base de datos a objetos
var usuarios = require('./routes/usuarios'); // rutas de usuarios
var ubicaciones = require('./routes/ubicaciones'); // rutas de ubicaciones
var oauth = require('./oauth.js');

var app = express(); // Crea una app express

//var passport = require('passport'); // autenticacion
//var BearerStrategy = require('passport-http-bearer').Strategy; // autenticacion token

// datos
// este valor se debería obtener de un archivo de configuración
var dbName = 'k1DB';
var connectionString = 'mongodb://localhost:27017/' + dbName; // abre una conexión a la base de datos
//connectionString = 'mongodb://k1_user:k1_pass@ds043329.mongolab.com:43329/k1db';
mongoose.connect(connectionString);

// inicializa la autenticación
app.use(oauth.initialize());

//configuración de body-parser
app.use(bodyParser.json()); // acepta parámetros en json
app.use(bodyParser.urlencoded()); // acepta parametros por url encoded

app.use('/api', usuarios); // middleware para los usuarios
app.use('/api', ubicaciones); //middleware para las ubicaciones

module.exports = app;