/**
 * 
 * 1. Create array for storage.
 * 2. Create object to store total numbers of specific char in string.
 * 3. Count occurence of each char, store in the object, with the key as the char.
 * 4. Loop through every char step by step from the correct word.
 *  * Compare it to the corresponding char in the guess-word.
 *  * If char match push to storage array as {'letter': char, 'result': 'correct'}
 *    * remove the object counter for the specific char by one
 *  * If char don't match push to storage array as {'letter': char, 'result': 'incorrect'}
 * 5. Find misplaced chars and change result in the storage array to 'misplaced' for the specific char
 * 
 */

export default function getFeedback (guess, word) {
    // array to get response from
    const feedback = [];
    // object to store total letters in.
    const letterCount = {};

    // count occurence of words and store them in a object.
    for (const ele of word) {
        ele.toUpperCase();
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

console.log(getFeedback('BOlOM', 'MORAL'))