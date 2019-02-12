const assert = require('assert');
const tribonacci = require('./tribonacciSequence');

describe('tribonacci', () => {

	describe('given n === 0', () => {
	
		it('should return []', () => {
			const actual = tribonacci([], 0);
			const expected = [];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [1, 1, 1] and n === 10', () => {
	
		it('should return [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', () => {
			const actual = tribonacci([1, 1, 1], 10);
			const expected = [1, 1, 1, 3, 5, 9, 17, 31, 57, 105];
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [0, 0, 1] and n === 10', () => {
	
		it('should return', () => {
			const actual = [0, 0, 1, 1, 2, 4, 7, 13, 24, 44];
			const expected = tribonacci([0, 0, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [0, 1, 1] and n === 10', () => {

		it('should return', () => {
			const actual = [0, 1, 1, 2, 4, 7, 13, 24, 44, 81];
			const expected = tribonacci([0, 1, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [1, 0, 0] and n === 10', () => {

		it('should return', () => {
			const actual = [1, 0, 0, 1, 1, 2, 4, 7, 13, 24];
			const expected = tribonacci([1, 0, 0], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [0, 0, 0] and n === 10', () => {

		it('should return', () => {
			const actual = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			const expected = tribonacci([0, 0, 0], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [1, 2, 3] and n === 10', () => {

		it('should return', () => {
			const actual = [1, 2, 3, 6, 11, 20, 37, 68, 125, 230];
			const expected = tribonacci([1, 2, 3], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [3, 2, 1] and n === 10', () => {

		it('should return', () => {
			const actual = [3, 2, 1, 6, 9, 16, 31, 56, 103, 190];
			const expected = tribonacci([3, 2, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [1, 1, 1] and n === 1', () => {

		it('should return', () => {
			const actual = [1];
			const expected = tribonacci([1, 1, 1], 1);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [300, 200, 100] and n === 0', () => {

		it('should return', () => {
			const actual = [];
			const expected = tribonacci([300, 200, 100], 0);
			assert.deepEqual(actual, expected);
		});
	});

	describe('given signature [0.5, 0.5, 0.5] and n === 30', () => {

		it('should return', () => {
			const actual = [0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5, 2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5, 900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5];
			const expected = tribonacci([0.5, 0.5, 0.5], 30);
			assert.deepEqual(actual, expected);
		});
	});

});
