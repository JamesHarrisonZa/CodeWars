function createPhoneNumber(numbers) {
	return 0;
} 

const expected = '(123) 456-7890';
const actual = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.assert(expected === actual);