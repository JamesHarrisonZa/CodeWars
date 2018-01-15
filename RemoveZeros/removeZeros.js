/**
 * @param {Array<number>} array 
 */
function removeZeros(array) {
	// Sort "array" so that all elements with the value of zero are moved to the
	// end of the array, while the other elements maintain order.
	// [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
	// Zero elements also maintain order in which they occurred.
	// [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]

	// Do not use any temporary arrays or objects. Additionally, you're not able
	// to use any Array or Object prototype methods such as .shift(), .push(), etc

	// the correctly sorted array should be returned.
	return array;
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

	const expected = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
	const actual = removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('');