const assert = require('assert');
const tribonacci = require('./tribonacciSequence');

describe.only('tribonacci', () => {

	describe('given n === 0', () => {
	
		it('should return []', () => {
			const actual = tribonacci([], 0);
			const expected = [];
			assert.deepEqual(actual, expected);
		});
	});
});