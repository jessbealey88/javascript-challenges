const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns Fizz when passed 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });
    it('returns Buzz when passed 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });
    it('returns num when passed 8', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
    it('returns FizzBuzz when passed 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
    });