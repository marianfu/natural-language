var pegjs = require('pegjs');
var escodegen = require('escodegen');
var Parser = require('../src/natural_parser');

describe("Variable declarations", function () {

    it('should return "var a = 1"', function () {
        var pseudoCode = Parser.parse("var a es 1");
        var javascriptCode = escodegen.generate(pseudoCode);

        expect(javascriptCode).toBe("var a = 1;");
    });
});