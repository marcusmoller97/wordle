/**
 * @author Marcus Möller
 * 
 * Algoritm:
 * 
 * 1. Skapa en array (`feedback`) för att lagra resultaten.
 * 2. Skapa ett objekt (`letterCount`) för att hålla reda på förekomsten av varje tecken i målordet.
 * 3. Räkna antalet förekomster av varje tecken i målordet och lagra dem i `letterCount`.
 * 4. Loopa genom varje tecken i gissningen:
 *    - Om det matchar motsvarande tecken i målordet:
 *      a. Markera det som "correct" i `feedback`.
 *      b. Minska dess antal i `letterCount`.
 *    - Annars, markera det som "incorrect" i `feedback`.
 * 5. Loopa genom `feedback` igen för att hitta felplacerade tecken:
 *    - Om ett tecken markerades som "incorrect" men fortfarande finns kvar i `letterCount`:
 *      a. Ändra dess resultat till "misplaced".
 *      b. Minska dess antal i `letterCount`.
 */

export default function getFeedback (guess, word) {

    if (guess.length !== word.length) {
        console.log('Du har skrivit för lång gissning');
        return [];
    }

    // array to get response from
    const feedback = [];
    const letterCount = {};


    // count occurence of words and store them in a object.
    for (let ele of word) {
        ele = ele.toUpperCase();
        letterCount[ele] = (letterCount[ele.toUpperCase] || 0) + 1;
    }

    // find correct chars or incorrect chars
    for (const val in guess) {
        if (guess[val].toUpperCase() === word[val].toUpperCase()) {
            feedback.push({ 'letter': guess[val].toUpperCase(), 'result': 'correct' });
            letterCount[guess[val].toUpperCase()]--; //remove from char counter if value is correct.
        } else {
            feedback.push({ 'letter': guess[val].toUpperCase(), 'result': 'incorrect' });
        }
    }

    // find misplaced chars
    for (const i in guess) {
        if (feedback[i].letter === word[i].toUpperCase()) {
            continue;
        } else if (letterCount[guess[i].toUpperCase()] > 0) {
            feedback[i].result = 'misplaced';
            letterCount[guess[i]]--;
        }
    }

    return feedback;
}
