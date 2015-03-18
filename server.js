var app = require('./app'); //Require our app

app.set('port', process.env.PORT || 8000);

app.get('/', function (req, res) {
    res.send('K1 Restful API </br>"api/usuarios"');
});

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
