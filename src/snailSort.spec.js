const assert = require('assert');
const snail = require('./snailSort');

describe('snailSort', () => {

	describe.only('given 2x2 array', () => {

		const array = [[1, 2],
					   [3, 4]]

		it('should toDo', () => {
			const actual = snail(array);
			const expected = [1, 2, 4, 3];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given 3x3 array', () => {
	
	const array = [[1, 2, 3],
				   [4, 5, 6],
				   [7, 8, 9]]

		it('should toDo', () => {
			const actual = snail(array);
			const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
			assert.equal(actual, expected);
		});
	});
});