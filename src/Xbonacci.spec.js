const assert = require('assert');
const Xbonacci = require('./Xbonacci');

describe('Xbonacci', () => {

	describe('Given signature [0, 1] and n === 10', () => {
		
		it('should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]', () => {
			const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
			const actual = Xbonacci([0, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given signature [1, 1] and n === 10', () => {

		it('should return [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
			const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
			const actual = Xbonacci([1, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given signature [0, 0, 0, 0, 1] and n === 10', () => {

		it('should return [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]', () => {
			const expected = [0, 0, 0, 0, 1, 1, 2, 4, 8, 16];
			const actual = Xbonacci([0, 0, 0, 0, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given signature [1, 0, 0, 0, 0, 0, 1] and n === 10', () => {

		it('should return [1, 0, 0, 0, 0, 0, 1, 2, 3, 6]', () => {
			const expected = [1, 0, 0, 0, 0, 0, 1, 2, 3, 6];
			const actual = Xbonacci([1, 0, 0, 0, 0, 0, 1], 10);
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given signature [1, 0, 0, 0, 0, 0, 0, 0, 0, 0] and n === 20', () => {

		it('should return [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]', () => {
			const expected = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256];
			const actual = Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20);
			assert.deepEqual(actual, expected);
		});
	});
});