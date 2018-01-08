/**
 * @param {Array<number>} numbers
 */
function createPhoneNumber(numbers) {
	
	return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

const expected = '(123) 456-7890';
const actual = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(expected === actual, `expected: ${expected} to equal: ${actual}`);