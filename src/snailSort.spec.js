const assert = require('assert');
const snail = require('./snailSort');

describe('snailSort', () => {

	describe('given empty array', () => {

		const array = [[]];

		it('should return []', () => {
			const actual = snail(array);
			const expected = [];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given 1x1 array', () => {

		const array = [
			[1],
		];

		it('should return [1]', () => {
			const actual = snail(array);
			const expected = [1];
			assert.deepEqual(actual, expected);
		});
	});

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

		it('should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]', () => {
			const actual = snail(array);
			const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given a 5x5 array', () => {

		const array = [
			[01, 02, 03, 04, 05],
			[06, 07, 08, 09, 10],
			[11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20],
			[20, 21, 22, 23, 24]
		];

		it('should return [1, 2, 3, 4, 5, 10, 15, 20, 24, 23, 22, 21, 20, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]', () => {
			const actual = snail(array);
			const expected = [1, 2, 3, 4, 5, 10, 15, 20, 24, 23, 22, 21, 20, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
			assert.deepEqual(actual, expected);
		});
	});
});