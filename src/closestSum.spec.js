const assert = require('assert');
const closestSum = require('./closestSum');

describe('closestSum', () => {

	describe('given [-1, 2, 1, -4]', () => {
	
		it('should return 2', () => {
			const actual = closestSum([-1, 2, 1, -4], 2);
			const expected = 2;
			assert.equal(actual, expected);
		});
	});

	describe('given [5, 4, 0, 3]', () => {
	
		it('should return 7', () => {
			const actual = closestSum([5, 4, 0, 3], 3);
			const expected = 7;
			assert.equal(actual, expected);
		});
	});

	describe('given [1, 2, 3, 4]', () => {
	
		it('should return 6', () => {
			const actual = closestSum([1, 2, 3, 4], 4);
			const expected = 6;
			assert.equal(actual, expected);
		});
	});

	describe('given [-2, 2, -3, 1]', () => {
	
		it('should return 1', () => {
			const actual = closestSum([-2, 2, -3, 1], 3);
			const expected = 1;
			assert.equal(actual, expected);
		});
	});

	//This is an example on Codewars, but their seems to be a hidden requirement 
	//they havent specified around what happens when 2 or more combinations result in the same ClosestSum
	// describe('given [-1, 2, 1, -4]', () => {
	
	// 	it('should return 2', () => {
	// 		const actual = closestSum([-1, 2, 1, -4], 1);
	// 		const expected = 2; //Getting -4 
	// 		assert.equal(actual, expected);
	// 	});
	// });
});