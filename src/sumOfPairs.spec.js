const assert = require('assert');
const sumOfPairs = require('./sumOfPairs');

describe('sumOfPairs', () => {

	describe('given [1, 4, 8, 7, 3, 15]', () => {
	
		describe('and sum of 8', () => {
		
			it('should return [1, 7]', () => {
				const actual = sumOfPairs([1, 4, 8, 7, 3, 15], 8);
				const expected = [1, 7];
				assert.deepEqual(actual, expected);
			});
		});
	});
});