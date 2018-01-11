'use strict';

/**
 * @param {Array<int>} diceRolls
 */
function score(diceRolls) {

	let score = 0;
	const diceRollCounter = new Array(7).fill(0).map((diceRoll, index) => {
		return diceRolls.filter((roll) => roll === index).length;
	});

	for (let diceNumber = 1; diceNumber <= 6; diceNumber ++) {
		const diceNumberRolls = diceRollCounter[diceNumber];

		if (diceNumber === 1 && diceNumberRolls === 1){
			score += 100;
		}
	}

	return score;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

console.log(score([0, 0, 0, 0, 0]) === 0);

console.log(score([0, 0, 0, 0, 1]) === 100);

// (() => {
// 	const expected = 0;
// 	const actual = score([2, 3, 4, 6, 2]);

// 	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
// })();

// (() => {
// 	const expected = 400;
// 	const actual = score([4, 4, 4, 3, 3]);

// 	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
// })();

// (() => {
// 	const expected = 450;
// 	const actual = score([2, 4, 4, 5, 4]);

// 	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
// })();

// (() => {
// 	const expected = 300;
// 	const actual = score([3, 3, 3, 3, 3]);

// 	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
// })();

// [1, 1, 1, 1, 3] === 1100

// [1, 1, 1, 1, 5] === 1150