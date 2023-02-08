const assert = require('assert');
let FizzBuzz = require("./FizzBuzz").FizzBuzz ;

describe('FizzBuzz', function () {
    describe('Multiples', function () {

        it('should return "Buzz" for multiples of 5.', function () {
            assert.strictEqual(FizzBuzz(5), "Buzz");
            assert.strictEqual(FizzBuzz(10), "Buzz");
        });
        it ('should return Fizz for multiples of 3.', function () {
            assert.strictEqual(FizzBuzz(3), "Fizz");
            assert.strictEqual(FizzBuzz(6), "Fizz");
        });
        it ('should return FizzBuzz when the value modulo 5 is 0 and value modulo 3 is 0.', function () {
            assert.strictEqual(FizzBuzz(15), 'FizzBuzz');
            assert.strictEqual(FizzBuzz(30), 'FizzBuzz');
        });
    });

    describe('Other cases', function() {
        it ('should return the number for other numbers', function () {
            assert.strictEqual(FizzBuzz(1), 1);
            assert.strictEqual(FizzBuzz(2), 2);
        });
    })
});