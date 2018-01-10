'use strict';

/**
 * @param {Array<int>} dice 
 */
function score(diceRolls) {

	let score = 0;
	const diceRollCounter = new Array(7).fill(0);

	for (const roll of diceRolls) {
		diceRollCounter[roll] ++;
	}
	
	for (let diceNumber = 1; diceNumber <= diceRollCounter.length; diceNumber++) {

		if (diceRollCounter[diceNumber] === 0){
			continue;
		}

		if (diceRollCounter[diceNumber] % 3 === 0) {
			let diceScore = (diceRollCounter[diceNumber] / 3) * diceNumber * 100;
			if (diceNumber === 1){
				diceScore = diceScore*10;
			}
			score += diceScore;
		}
		else {
			if (diceNumber === 1) {
				score += (diceRollCounter[diceNumber] % 3) * 100;
			}
			if (diceNumber === 5) {
				score += (diceRollCounter[diceNumber] % 3) * 50;
			}
		}
	}
	return score;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

(() => {
	const expected = 0;
	const actual = score([2, 3, 4, 6, 2]);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 400;
	const actual = score([4, 4, 4, 3, 3]);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 450;
	const actual = score([2, 4, 4, 5, 4]);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

// [3, 3, 3, 3, 3] === 300

// [1, 1, 1, 1, 3] === 1100

// [1, 1, 1, 1, 5] === 1150