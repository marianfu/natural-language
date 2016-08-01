var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var Parser = require('./natural_parser');
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

    var str = Parser.parse('var a es 1, b es 2, d es 4; var c es 3; c es 6; si (a igual 2 y c distinto 3) { } sino si(c == 6) { console.log(getEdad(1,2))} sino { console.log("afa"); } getEdad(a, b) { devolver a+b; }');

    var str2 = JavascriptParser.parse('if(a == 2){}');

    var result = escodegen.generate(str);

    console.log(result);

    eval(result);

    //Interpreter.interpret(str);
});

