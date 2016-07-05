var Utils = require('./utils');

var Interpreter = function () {

};

Interpreter.prototype.interpretf = function (str) {


    //var bodies = str.body;
    //
    //if(bodies[0].declarations[0].init.type == 'BinaryExpression') {
    //
    //    return {name: 'c', left: 'a', right: 'b', operator: '+'};
    //}
    //
    //for(var i = 0; i < bodies.length; i++) {
    //    console.log(bodies[i].type);
    //    return {name: bodies[i].declarations[0].id.name, value: bodies[i].declarations[0].init.value};
    //}
};

Interpreter.interpret = function (str) {

    var body = str.cuerpo;
    var definicion = body[0].definicion;

    Interpreter.typeTable[definicion[0].tipo].call(this, body[0].definicion);

};

Interpreter.typeTable = {

    "DeclaradorVariable": function (str) {


       console.log(Utils.typeVariable(str[0].init.valor));
    }

};

module.exports = Interpreter;