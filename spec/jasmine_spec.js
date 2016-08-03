var Escodegen = require('escodegen');
var NaturalLanguage = require('../src/natural_parser');

describe("for loop", function () {

	var pseudoCode, javascriptExpected, javascriptGenerated; 

    it("should return 'for ...' ", function () {

        pseudoCode = NaturalLanguage.parse("por cada(e en elementos){}");
        javascriptExpected = "for (e in elementos) {}".replace(/\s+/g, '');;
        javascriptGenerated = Escodegen.generate(pseudoCode);
        javascriptGenerated = javascriptGenerated.replace(/\s+/g, '');
        expect(javascriptGenerated).toBe(javascriptExpected);
    });

});