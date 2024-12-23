import { StringCalculator } from './StringCalculator';

describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('empty string returns zero', () => {
        expect(calculator.add('')).toBe(0);
    });

    test('single number returns the number', () => {
        expect(calculator.add('1')).toBe(1);
    });

    test('two numbers returns their sum', () => {
        expect(calculator.add('1,5')).toBe(6);
    });

    test('handles new lines between numbers', () => {
        expect(calculator.add('1\n2,3')).toBe(6);
    });

    test('supports custom delimiter', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
    });

    test('throws on negative numbers', () => {
        expect(() => calculator.add('-1,2,-3'))
            .toThrow('negative numbers not allowed: -1,-3');
    });
});
