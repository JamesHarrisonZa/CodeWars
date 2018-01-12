'use strict';

function john(n) {
	// your code
}
function ann(n) {
	// your code
}

function sumJohn(n) {
	// your code
}

function sumAnn(n) {
	// your code
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

function areEqualArrays(arr1, arr2) {

	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

((desc) => {
	const expected = [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6];
	const actual = john(11);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('john');

((desc) => {
	const expected = [1, 1, 2, 2, 3, 3];
	const actual = ann(6)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('ann');

((desc) => {
	const expected = 1720;
	const actual = sumJohn(75)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('sumJohn');

((desc) => {
	const expected = 4070;
	const actual = sumAnn(115)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('sumAnn');