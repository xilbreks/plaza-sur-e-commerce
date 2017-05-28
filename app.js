var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');

app.use('/', express.static(path.join(__dirname + '/src')));

server.listen(2500);
console.log('Se inicio el servidor en el puerto ' + 2500);