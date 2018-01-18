// https://www.codewars.com/kata/next-bigger-number-with-the-same-digits

/**
 * @param {number} n 
 */
const nextBigger = (n) => {

	const charArray = String(n).split('');
	const pivotIndex = getPivotIndex(charArray);
	const substituteIndexForPivot = getSubstituteIndexForPivot(charArray, pivotIndex);
	swapPivotWithSubstitute(charArray, pivotIndex, substituteIndexForPivot);
	const rightSortedArray = charArray.slice(0, pivotIndex + 1).concat(charArray.slice(pivotIndex + 1).sort());
	const nextBigger = Number(rightSortedArray.join(''));
	
	return nextBigger > n ? nextBigger: -1;
}

const getPivotIndex = (array) => {
	for (let i = array.length - 1; i >= 0; i--) {

		const currentDigit = array[i];
		const leftDigit = array[i - 1];
		if (leftDigit < currentDigit) return i - 1;
	}
};

const getSubstituteIndexForPivot = (array, pivotIndex) => {

	return array.slice(pivotIndex).reduce((currentSubstituteIndex, number, index) => {
		if (number > array[pivotIndex]) return pivotIndex + index;
		else return currentSubstituteIndex;
	});
}

const swapPivotWithSubstitute = (array, pivotIndex, substituteIndexForPivot) => {
	const temp = array[pivotIndex];
	array[pivotIndex] = array[substituteIndexForPivot];
	array[substituteIndexForPivot] = temp;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 21;
	const actual = nextBigger(12);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(12) === 21');

((desc) => {
	const expected = 531;
	const actual = nextBigger(513);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(513) === 531');

((desc) => {
	const expected = 2071;
	const actual = nextBigger(2017);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(2017) === 2071');

((desc) => {
	const expected = 441;
	const actual = nextBigger(414);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(414) === 441');

((desc) => {
	const expected = 414;
	const actual = nextBigger(144);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(144) === 414');

((desc) => {
	const expected = -1;
	const actual = nextBigger(9999999999);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(9999999999) === -1');

((desc) => {
	const expected = -1;
	const actual = nextBigger(9876543210);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(9876543210) === -1');

((desc) => {
	const expected = 1234567908;
	const actual = nextBigger(1234567890);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(1234567890) === 1234567908');

((desc) => {
	const expected = 21581961257;
	const actual = nextBigger(21581957621);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(21581957621) === 21581961257');