
var Interpreter = function () {

};

Interpreter.prototype.interpret = function (str) {


    var bodies = str.body;

    if(bodies[0].declarations[0].init.type == 'BinaryExpression') {

        return {name: 'c', left: 'a', right: 'b', operator: '+'};
    }

    for(var i = 0; i < bodies.length; i++) {
        console.log(bodies[i].type);
        return {name: bodies[i].declarations[0].id.name, value: bodies[i].declarations[0].init.value};
    }
};

Interpreter.prototype.buildVariableDeclarator = function () {

};

module.exports = Interpreter;