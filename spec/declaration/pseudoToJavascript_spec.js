var Escodegen = require('escodegen');
var NaturalLanguage = require('../../src/natural_parser');

describe("Variable declarationfagagas", function () {

	var pseudoCode, javascriptExpected, javascriptGenerated; 

    it("should return 'var a = 1' ", function () {

        pseudoCode = NaturalLanguage.parse("var a es 1;");
        javascriptExpected = "var a = 1;"
        javascriptGenerated = Escodegen.generate(pseudoCode);

        expect(javascriptGenerated).toEqual(javascriptExpected);
    });

    it("should return 'var a=1, b=2, c=3;'", function() {

        pseudoCode = NaturalLanguage.parse("var a es 1, b es 2, c es 3;");
        javascriptExpected = "var a = 1, b = 2, c = 3;"
        javascriptGenerated = Escodegen.generate(pseudoCode);

    	expect(javascriptGenerated).toBe(javascriptExpected);
    })
});