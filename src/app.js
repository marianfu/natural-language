var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var Parser = require('./parser');
var JavascriptParser = require('./javascriptParser');
var Interpreter = require('./interpreter');
var escodegen = require('escodegen');
var app = express();


// estools/escodegen to generate code from the syntax tree


//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});

app.listen(3000, function () {

    var interpreter = new Interpreter();
    console.log('Example app listening on port 3000!');

    var str = Parser.parse('variable a es 1.2');

    var str2 = JavascriptParser.parse('if(a == 2){}');

    var result = escodegen.generate(str2);

    console.log(result);
    //Interpreter.interpret(str);
});

