var express = require('express');
var _ = require('underscore');
var pegjs = require('pegjs');
var NaturalLanguage = require('./natural_parser');
var Escodegen = require('escodegen');
var app = express();


// estools/escodegen to generate code from the syntax tree
app.listen(3000, function () {

    console.log('Example app listening on port 3000!');

    var str = NaturalLanguage.parse('var a es 1, b es 2, d es 4; var c es 3; c es 6; si (a igual 2 y c distinto 3) { } sino si(c == 6) { console.log(getEdad(1,2))} sino { console.log("afa"); } getEdad(a, b) { devolver a+b; }');
    var str2 = NaturalLanguage.parse('var array es [1,2,3]; por cada(a en array){ imprimir(array[a]); } imprimir(e) { console.log(e); }')

    var result = Escodegen.generate(str);
    var result2 = Escodegen.generate(str2);

    console.log(result2);

    //eval(result);
    eval(result2);
});

