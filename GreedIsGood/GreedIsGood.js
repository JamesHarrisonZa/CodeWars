'use strict';

/**
 * @param {Array<int>} dice 
 */
function score(dice) {
	// Fill me in!
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
