// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

'use strict';

/**
 * @param {Array<int>} x 
 */
const maps = (x) => x.map((item) => item + item)

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
	const expected =  [2, 4, 6];
	const actual = maps([1, 2, 3]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = [8, 2, 2, 2, 8]
	const actual = maps([4, 1, 1, 1, 4]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 2');

((desc) => {
	const expected = [4, 4, 4, 4, 4, 4];
	const actual = maps([2, 2, 2, 2, 2, 2]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 3');