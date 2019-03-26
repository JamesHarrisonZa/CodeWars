const assert = require('assert');
const snail = require('./snailSort');

describe('snailSort', () => {

	describe('given 2x2 array', () => {

		const array = [
			[1, 2],
			[3, 4]
		];

		it('should return [1, 2, 4, 3]', () => {
			const actual = snail(array);
			const expected = [1, 2, 4, 3];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given 3x3 array', () => {
	
		const array = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		];

		it('should return [1, 2, 3, 6, 9, 8, 7, 4, 5]', () => {
			const actual = snail(array);
			const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given a 4x4 array', () => {

		const array = [
			[01, 02, 03, 04],
			[05, 06, 07, 08],
			[09, 10, 11, 12],
			[13, 14, 15, 16]
		];

		it('should return ', () => {
			const actual = snail(array);
			const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
			assert.deepEqual(actual, expected);
		});
	});
});