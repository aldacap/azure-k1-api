
var passport = require('passport'); // modulo de autenticación
var BearerStrategy = require('passport-http-bearer').Strategy; // estrategia autenticacion http-bearer
var Usuario = require('./models/usuario'); // modelo de un usuario

passport.use(new BearerStrategy(
    function (token, done) {
        Usuario.findOne({ token: token }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));

module.exports = passport;