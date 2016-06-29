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

    var interpreter = new Interpreter();
    console.log('Example app listening on port 3000!');

    var str = Parser.parse('var a = 1');
    var str2 = Parser.parse('var b = 2');
    var str3 = Parser.parse('var c = a + b');
    console.log(str);

    var variables = [];
    variables.push(interpreter.interpret(str));
    variables.push(interpreter.interpret(str2));
    variables.push(interpreter.interpret(str3));
    variables.push({name: 'c', value: eval(''+variables[0].value+''+variables[2].operator+''+variables[1].value)});

    eval('var v = '+variables[0].value+''+variables[2].operator+''+variables[1].value);
    variables.forEach(function (element) {
        console.log(element);
    });

    console.log(v);
});

