import {expect} from "chai";
import FizzBuzz from "../src/FizzBuzz/FizzBuzz.js";
import minimum from "../src/Minimum value/minimum.js";
import position from "../src/Position/position.js";


describe('FizzBuzz', function () {
    describe('Multiples', function () {

        it('should return "Buzz" for multiples of 5.', function () {
            expect(FizzBuzz(5)).to.equal('Buzz');
            expect(FizzBuzz(10)).to.equal('Buzz');
        });
        it ('should return Fizz for multiples of 3.', function () {
            expect(FizzBuzz(3)).to.equal('Fizz');
            expect(FizzBuzz(6)).to.equal('Fizz');
        });
        it ('should return FizzBuzz when the value modulo 5 is 0 and value modulo 3 is 0.', function () {
            expect(FizzBuzz(15)).to.equal('FizzBuzz');
            expect(FizzBuzz(30)).to.equal('FizzBuzz');
        });
    });

    describe('Other cases', function() {
        it ('should return the number for other numbers', function () {
            expect(FizzBuzz(1)).to.equal(1);
            expect(FizzBuzz(2)).to.equal(2);
        });
    })
});

describe('minimum', function() {
    describe('different numbers', function() {
        it('should return the lowest of the two values', function () {
            expect(minimum(5, 10)).to.equal(5)
            expect(minimum(18, 10)).to.equal(10)
            expect(minimum(313, 515)).to.equal(313)
        })
    })
    describe('same numbers', function() {
        it('should return equals', function() {
            expect(minimum(5, 5)).to.equal('equals')
            expect(minimum(313, 313)).to.equal('equals')
        })
    })
})

describe('PositionInAlphabet', function () {
    describe('case letter', function () {
        it('should return the position of the letter in the alphabet', function() {
            expect(position('a')).to.equal(1)
            expect(position('z')).to.equal(26)
        })
    })
    describe('other types', function() {
        it ('should return an error for other types', function() {
            expect(position(2)).to.equal('error')
            expect(position('test')).to.equal('error');
        })
    })
})