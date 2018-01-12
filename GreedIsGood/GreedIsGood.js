'use strict';

/**
 * @param {Array<int>} diceRolls
 */
function score(diceRolls) {

	let score = 0;
	const diceRollCounter = new Array(7).fill(0).map((diceRoll, index) =>
		diceRolls.filter((roll) => roll === index).length
	);

	for (let diceNumber = 1; diceNumber <= 6; diceNumber++) {
		let diceNumberRolls = diceRollCounter[diceNumber];

		if (diceNumberRolls >= 3) {
			score += diceNumber === 1 ? 1000 : diceNumber * 100;
			diceNumberRolls -= 3;
		}

		if (diceNumber === 1) {
			score += 100 * diceNumberRolls;
		}

		if (diceNumber === 5) {
			score += 50 * diceNumberRolls;
		}
	}

	return score;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

console.log(score([0, 0, 0, 0, 0]) === 0);

console.log(score([0, 0, 0, 0, 1]) === 100);
console.log(score([0, 0, 0, 1, 1]) === 200);
console.log(score([0, 0, 1, 1, 1]) === 1000);

console.log(score([0, 0, 0, 0, 5]) === 50);
console.log(score([0, 0, 0, 5, 5]) === 100);
console.log(score([0, 0, 5, 5, 5]) === 500);

console.log(score([0, 0, 2, 2, 2]) === 200);
console.log(score([0, 0, 3, 3, 3]) === 300);

console.log(score([0, 1, 1, 1, 1]) === 1100);
console.log(score([1, 1, 1, 1, 1]) === 1200);
console.log(score([0, 5, 5, 5, 5]) === 550);
console.log(score([5, 5, 5, 5, 5]) === 600);
console.log(score([1, 1, 1, 1, 5]) === 1150);

((desc) => {
	const expected = 0;
	const actual = score([2, 3, 4, 6, 2]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('given no tripples, ones or fives: should score zero');

((desc) => {
	const expected = 400;
	const actual = score([4, 4, 4, 3, 3]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('given tripple fours: should score 400');

((desc) => {
	const expected = 450;
	const actual = score([2, 4, 4, 5, 4]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('given tripple fours and a five: should score 450');

((desc) => {
	const expected = 300;
	const actual = score([3, 3, 3, 3, 3]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('given all threes should score 300');

((desc) => {
	const expected = 1150;
	const actual = score([1, 1, 1, 1, 5]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('given all ones should score 1150');