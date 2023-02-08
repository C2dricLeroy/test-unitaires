const assert = require('assert');
let positionInAlphabet = require("./position").position;

describe('PositionInAlphabet', function () {
    describe('case letter', function () {
        it('should return the position of the letter in the alphabet', function() {
            assert.strictEqual(positionInAlphabet('a'), 1)
            assert.strictEqual(positionInAlphabet('z'), 26)
        })
    })
    describe('other types', function() {
        it ('should return an error for other types', function() {
            assert.strictEqual(positionInAlphabet(2), 'error');
            assert.strictEqual(positionInAlphabet('test'), 'error');
        })
    })
})