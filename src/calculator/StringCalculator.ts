export class StringCalculator {
    add(numbers: string): number {
        if (numbers === '') return 0;
        
        const delimiter = this.getDelimiter(numbers);
        const cleanedNumbers = this.getCleanedNumbers(numbers);
        const numberArray = this.parseNumbers(cleanedNumbers, delimiter);
        
        this.validateNegativeNumbers(numberArray);
        
        return numberArray.reduce((sum, num) => sum + num, 0);
    }

    private getDelimiter(numbers: string): string {
        if (numbers.startsWith('//')) {
            return numbers.charAt(2);
        }
        return ',';
    }

    private getCleanedNumbers(numbers: string): string {
        if (numbers.startsWith('//')) {
            return numbers.split('\n')[1];
        }
        return numbers;
    }

    private parseNumbers(numbers: string, delimiter: string): number[] {
        return numbers
            .replace(/\n/g, delimiter)
            .split(delimiter)
            .map(num => parseInt(num))
            .filter(num => !isNaN(num));
    }

    private validateNegativeNumbers(numbers: number[]): void {
        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(
                `negative numbers not allowed: ${negativeNumbers.join(',')}`
            );
        }
    }
}
