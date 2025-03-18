import { describe, it } from '@jest/globals';
import getFeedback from './feedback';


/**
 * Test då alla tecken är korrekta
 * Test då alla tecken är felaktiga
 * Alla tecken finns med men är felplacerade
 * Blandning av felplacerade och inkorrekta tecken
 * Test där ett tecken förekommer fler gånger än i det korrekta ordet.
 * Case sensitivity för alla fyra ovanstående tester
 * Fler av ett tecken i gissningen än i det korrekta ordet
 * Tom gissning
 * 
 */
describe('Tests for feedback algorithm', () => {
    it('should test when all chars correct', () => {
        const result = getFeedback('CYKLA', 'CYKLA');

        expect(result).toEqual(
            [
                { letter: 'C', result: 'correct' },
                { letter: 'Y', result: 'correct' },
                { letter: 'K', result: 'correct' },
                { letter: 'L', result: 'correct' },
                { letter: 'A', result: 'correct' },
            ]
        );
        expect(result).toHaveLength(5);

    });

    it('should give test if guess is longer then word', () => {
        const result = getFeedback('AABBBB', 'AABBB');
        expect(result).toHaveLength(0);
        
    });

    it('should test that all chars is incorrect', () => {
        const result = getFeedback('VÄNDA', 'SKOGS');
        console.log(result);
        expect(result).toEqual(
            [
                { letter: 'V', result: 'incorrect' },
                { letter: 'Ä', result: 'incorrect' },
                { letter: 'N', result: 'incorrect' },
                { letter: 'D', result: 'incorrect' },
                { letter: 'A', result: 'incorrect' }
            ]
        );

        expect(result).toHaveLength(5);
    });

    it('should test that all chars is misplaced', () => {
        const result = getFeedback('RAKET', 'TREKA');
        expect(result).toEqual(
            [
                { letter: 'R', result: 'misplaced' },
                { letter: 'A', result: 'misplaced' },
                { letter: 'K', result: 'misplaced' },
                { letter: 'E', result: 'misplaced' },
                { letter: 'T', result: 'misplaced' }
            ]
        );
        expect(result).toHaveLength(5);
    });

    it('shold check for correct, misplaced and incorrect letters', () => {
        const result = getFeedback('BOLOM', 'MORAL');

        expect(result).toHaveLength(5);
        expect(result).toEqual(
            [
                { letter: 'B', result: 'incorrect' },
                { letter: 'O', result: 'correct' },
                { letter: 'L', result: 'misplaced' },
                { letter: 'O', result: 'incorrect' },
                { letter: 'M', result: 'misplaced' }
            ]
        );
    });

    it('should handle empty guess', () => {
        const result = getFeedback('', 'CYKLA');
        expect(result).toHaveLength(0);
    });
});

describe('Tests for caseSensitivity', () => {
    it('should test when all chars correct', () => {
        const result = getFeedback('cykla', 'CYKLA');

        expect(result).toEqual(
            [
                { letter: 'C', result: 'correct' },
                { letter: 'Y', result: 'correct' },
                { letter: 'K', result: 'correct' },
                { letter: 'L', result: 'correct' },
                { letter: 'A', result: 'correct' },
            ]
        );
        expect(result).toHaveLength(5);

    });

    it('should test that all chars is incorrect', () => {
        const result = getFeedback('vända', 'SKOGS');
        console.log(result);
        expect(result).toEqual(
            [
                { letter: 'V', result: 'incorrect' },
                { letter: 'Ä', result: 'incorrect' },
                { letter: 'N', result: 'incorrect' },
                { letter: 'D', result: 'incorrect' },
                { letter: 'A', result: 'incorrect' }
            ]
        );

        expect(result).toHaveLength(5);
    });

    it('should test that all chars is misplaced', () => {
        const result = getFeedback('raket', 'TREKA');
        expect(result).toEqual(
            [
                { letter: 'R', result: 'misplaced' },
                { letter: 'A', result: 'misplaced' },
                { letter: 'K', result: 'misplaced' },
                { letter: 'E', result: 'misplaced' },
                { letter: 'T', result: 'misplaced' }
            ]
        );
        expect(result).toHaveLength(5);
    });

    it('shold check for correct, misplaced and incorrect letters', () => {
        const result = getFeedback('bolom', 'MORAL');

        expect(result).toHaveLength(5);
        expect(result).toEqual(
            [
                { letter: 'B', result: 'incorrect' },
                { letter: 'O', result: 'correct' },
                { letter: 'L', result: 'misplaced' },
                { letter: 'O', result: 'incorrect' },
                { letter: 'M', result: 'misplaced' }
            ]
        );
    });
});
