// https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

'use strict';

const solution = (number) => {

	let sum = 0;
	while (number > 0) {
		number--;
		if (number % 3 === 0 || number % 5 === 0) sum += number;
	}
	return sum;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 23;
	const actual = solution(10);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('10 should return 23');