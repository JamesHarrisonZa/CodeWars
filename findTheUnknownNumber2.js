// https://www.codewars.com/kata/algorithm-fun-find-the-unknown-number-part-ii
// NOTE: This question highlights the performance difference between loop iterations and comparisons. Comparisons are way more expensive

'use strict';

const findUnknowNumber = (a, b, c, x, y, z) => {

	let n = 1;
	while (!(n % a === x && n % b === y && n % c === z)) {
		n++;
	}
	return n;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 23;
	const actual = findUnknowNumber(3, 5, 7, 2, 3, 2);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = 52;
	const actual = findUnknowNumber(3, 5, 7, 1, 2, 3);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 2');

((desc) => {
	const expected = 29;
	const actual = findUnknowNumber(3, 7, 11, 2, 1, 7);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 3');

((desc) => {
	const expected = 1;
	const actual = findUnknowNumber(2, 3, 5, 1, 1, 1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 4');