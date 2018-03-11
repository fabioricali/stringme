const stringme = require('./');
const be = require('bejs');

describe('stringme', function () {

    it('should be ok with undefined value', function () {
        let result = stringme();
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '"undefined"');
    });

    it('should be ok with undefined value, quotes false', function () {
        let result = stringme(undefined, {quotes: false});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, 'undefined');
    });

    it('should be ok with date value', function () {
        let result = stringme(new Date());
        console.log(result);
        be.err.string(result);
    });

    it('should be return a string without quotes', function () {
        let result = stringme(null, {quotes: false});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, 'null');
    });

    it('should be return a string, object', function () {
        let result = stringme({});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '{}');
    });

    it('should be return a string, object and quotes false', function () {
        let result = stringme({}, {quotes: false});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '{}');
    });

    it('should be return a string, array', function () {
        let result = stringme([]);
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '[]');
    });

    it('should be return a string, array and quotes false', function () {
        let result = stringme([], {quotes: false});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '[]');
    });

    it('should be return a string, a string', function () {
        let result = stringme('hello');
        console.log(result);
        be.err.string(result);
        be.err.equal(result, '"hello"');
    });

    it('should be return a string, a string and quotes false', function () {
        let result = stringme('hello', {quotes: false});
        console.log(result);
        be.err.string(result);
        be.err.equal(result, 'hello');
    });
});