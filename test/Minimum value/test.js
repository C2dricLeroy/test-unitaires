const assert = require('assert');
let minimum = require("./minimum").minimum;

describe('minimum', function() {
    describe('different numbers', function() {
        it('should return the lowest of the two values', function () {
            assert.strictEqual(minimum(5, 10), 5)
            assert.strictEqual(minimum(18, 10), 10)
            assert.strictEqual(minimum(512, 313), 313)
        })
    })
    describe('same numbers', function() {
        it('should return equals', function() {
            assert.strictEqual(minimum(5, 5), 'equals')
            assert.strictEqual(minimum(313, 313), 'equals   ')
        })
    })
})