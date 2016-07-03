var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var Parser = require('./parser');
var Interpreter = require('./interpreter');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {

    var interpreter = new Interpreter();
    console.log('Example app listening on port 3000!');

    var str = Parser.parse('variable a es 1\n ' +
        'variable b es 2.2\n' +
        'variable c es "nombre"');
    console.log(str);
});

