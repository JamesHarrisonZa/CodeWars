/**
 * @param {Array<number>} array 
 */
function removeZeros(array) {

	const needsSwitching = (i) => (array[i] === 0 || array[i] === "0");

	for (let i = 0; i < array.length; i++) {
		if (!needsSwitching(i)) {
			continue;
		}

		let j;
		for (j = i + 1; j < array.length; j++) {
			if (!needsSwitching(j)) {
				if (array[j] === undefined) return array;
				else {
					const zeroNumberOrString = array[i];
					array[i] = array[j];
					array[j] = zeroNumberOrString;
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

// ((desc) => {

// 	const expected = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
// 	const actual = removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]);

// 	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('Given zeros');

((desc) => {

	const expected = [1, "0", "0", "0", 0];
	const actual = removeZeros(['0', '0', '0', 0, 1]); //1,null,"5","0","2",8,6,null,false,0

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given mixed types 2');

// ((desc) => {

// 	const expected = [1, , "5", "2", 8, 6, , false, "0", 0];
// 	const actual = removeZeros([1, null , 5, 0, 2, 0, 8, 6, null , false]); //1,null,"5","0","2",8,6,null,false,0

// 	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('Given mixed types with boolean');