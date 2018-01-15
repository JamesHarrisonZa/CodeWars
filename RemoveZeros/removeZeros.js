/**
 * @param {Array<number>} array 
 */
function removeZeros(array) {

	for (let i = 0; i < array.length; i++) {
		if(array[i] !== 0){
			continue;
		}

		let j;
		for (j = i + 1; j < array.length; j++) {
			if(array[j] !== 0) {
				if (array[j] === undefined) return array;
				else {
					array[i] = array[j];
					array[j] = 0;
					break;
				}
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
})('');