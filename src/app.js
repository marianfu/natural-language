var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var Parser = require('./grammar');
var Interpreter = require('./interpreter');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    //var str = Isla.Interpreter.interpret("write 'aaafaga'");
    //console.log(str.ret);
    var str = Parser.parse('var a = 1');
    console.log(Interpreter.interpret());
});

