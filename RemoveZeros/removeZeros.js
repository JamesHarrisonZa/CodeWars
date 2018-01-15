/**
 * @param {Array<number>} array 
 */
function removeZeros(array) {

	const needsSwitching = (i) => (array[i] === 0 || array[i] === '0');

	for (var i = array.length - 1; i >= 0; i--) {
		if (needsSwitching(i)) {
			j = i;
			while ((j + 1 < array.length) && !needsSwitching(j + 1)) {
				const zeroNumberOrString = array[j];
				array[j] = array[j + 1];
				array[j + 1] = zeroNumberOrString;
				j++;
			}
		}
	}
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
})('Given zeros');

((desc) => {

	const expected = [1, '0', '0', '0', 0];
	const actual = removeZeros(['0', '0', '0', 0, 1]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given mixed types');