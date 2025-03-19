import { describe, it, expect, jest } from '@jest/globals';
import { chooseWord } from '../js/wordle.js';

/**
 * Test för längd:
 * Kontrollera att funktion tar hänsyn till rätt längd och att ord med korrekt längd sorteras bort.
 * Testa för stora värden på ord.
 * Testa för små värden på ord.
 * Testa för uniqueLetters högre längd än tillgängliga ord. 
 * Testa när du angivit en ordlängd som är större än de ord som finns i listan 
 * Kontrollera att ord med unika bokstäver finns kvar och att ord där samma bokstav förekommer flera gånger sorteras bort.
 * Kontrollera att alla ord bevaras om de har rätt längd oavsett situation.
 * Test när ordlistan som skickas in är tom. DONE
 */

describe('tests for chooseWord', () => {

    const wordList = ['PYTHON', 'JAVASCRIPT', 'RUBY', 'JAVA', 'C++', 'PHP', 'FORTRAN'];

    it('should give a string of length 4 and test the last element from the array', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.99);

        const result = chooseWord(wordList, 4, false);
        expect(result.length).toBe(4);
        expect(result).toBe('JAVA');

        Math.random.mockRestore();
    });

    it('should give a string of length 4 and test the first element from the array', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0);

        const result = chooseWord(wordList, 4, false);
        expect(result.length).toBe(4);
        expect(result).toBe('RUBY');

        Math.random.mockRestore();
    });

    it('should test for bigger length of word. (testing for for words with 11 chars', () => {
        const wordList = [
            'PROGRAMMERS',  // Programmer
            'DEVELOPERS',   // Developer (10 bokstäver med ett extra R)
            'CHALLENGE',  // Challenges
            'EXPRESSIONS',  // Expression
            'DISCUSSION',  // Discussion
            'STRUCTURAL',  // Structural
            'TECHNICALS',  // Technicals
            'INNOVATION',  // Innovation
            'UNDERSTAND',  // Understand
            'KNOWLEDGING'  // Knowledging
        ];

        jest.spyOn(Math, 'random').mockReturnValue(0.99);


        const result = chooseWord(wordList, 11, false);
        expect(result).toBe('KNOWLEDGING');

        Math.random.mockRestore();

    });

    it('should test for bigger length of word. (testing for for forws with 10 chars', () => {
        const wordList = [
            'PROGRAMMERS',
            'DEVELOPERS',
            'CHALLENGE',
            'EXPRESSIONS',
            'DISCUSSION',
            'STRUCTURAL',
            'TECHNICALS',
            'INNOVATION',
            'UNDERSTAND',
            'KNOWLEDGING'
        ];

        jest.spyOn(Math, 'random').mockReturnValue(0);


        const result = chooseWord(wordList, 11, false);
        expect(result).toBe('PROGRAMMERS');

        Math.random.mockRestore();

    });

    it('should return null if no words match the length', () => {

        const result = chooseWord([], 0, false);

        expect(result).toBe(null);
    });
});