export { StringCalculator } from './StringCalculator';

// Example usage
import { StringCalculator } from './StringCalculator';

const calculator = new StringCalculator();

// Basic usage
console.log(calculator.add("1,2,3")); // Output: 6

// Custom delimiter usage
console.log(calculator.add("//;\n1;2;3")); // Output: 6

// Multiline usage
console.log(calculator.add("1\n2,3")); // Output: 6

// Error handling example
try {
    calculator.add("-1,2,-3");
} catch (error: any) {
    console.error(error.message); // Output: negative numbers not allowed: -1,-3
}
