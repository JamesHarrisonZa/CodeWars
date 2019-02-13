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

	describe('given [1, -2, 3, 0, -6, 1]', () => {

		describe('and sum of -6', () => {

			it('should return [0, -6]', () => {
				const actual = sumOfPairs([1, -2, 3, 0, -6, 1], -6);
				const expected = [0, -6];
				assert.deepEqual(actual, expected);
			});
		});
	});

	describe('given [10,5,2,3,7,5]', () => {
	
		describe('and sum of 10', () => {
		
			it('should return [3, 7]', () => {
				const expected = sumOfPairs([10, 5, 2, 3, 7, 5], 10);
				const actual = [3, 7];
				assert.deepEqual(actual, expected);
			});
		});
	});
});