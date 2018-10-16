'use strict';

const assert = require('assert');
const mergeArrays = require('./mergeSortedArrays');

// Write a function that will merge two arrays of sorted integers in a linear fashion.
// The output should be a sorted array containing all the elements from both input arrays, including any duplicates.

// For example, given these two arrays as arguments:
// [1, 1, 3, 5], [1, 2, 3, 4]
// Your function should return:
// [1, 1, 1, 2, 3, 3, 4, 5]


describe('mergeArrays', () => {

	describe('Given invalid inputs', () => {

		describe('of two nulls', () => {

			it('should return empty array', () => {
				const actual = mergeArrays(null, null);
				const expected = [];
				assert.deepEqual(actual, expected);
			});
		});

		describe('of one null', () => {

			describe('and an empty array', () => {

				it('should return empty array', () => {
					const actual = mergeArrays(null, []);
					const expected = [];
					assert.deepEqual(actual, expected);
				});

				it('should return empty array', () => {
					const actual = mergeArrays([], null);
					const expected = [];
					assert.deepEqual(actual, expected);
				});
			});

			describe('and a non empty array', () => {

				it('should return the non empty array', () => {
					const actual = mergeArrays([1], null);
					const expected = [1];
					assert.deepEqual(actual, expected);
				});

				it('should return the non empty array', () => {
					const actual = mergeArrays(null, [1]);
					const expected = [1];
					assert.deepEqual(actual, expected);
				});
			});

		});

		describe('of two empty arrays', () => {

			it('should return empty array', () => {
				const actual = mergeArrays([], []);
				const expected = [];
				assert.deepEqual(actual, expected);
			});
		});

		describe('of one empty array', () => {

			it('should return the non empty array', () => {
				const actual = mergeArrays([1], []);
				const expected = [1];
				assert.deepEqual(actual, expected);
			});

			it('should return the non empty array', () => {
				const actual = mergeArrays([], [1]);
				const expected = [1];
				assert.deepEqual(actual, expected);
			});
		});
	});

	describe('Given [1] and [1]', () => {

		it('should return [1,1]', () => {
			const arr1 = [1]
			const arr2 = [1];
			const actual = mergeArrays(arr1, arr2);
			const expected = [1, 1];
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given [2] and [1]', () => {

		it('should return [1,2]', () => {
			const arr1 = [2]
			const arr2 = [1];
			const actual = mergeArrays(arr1, arr2);
			const expected = [1, 2];
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given [1,1,2] and [2,3]', () => {

		it('should return [1,1,2,2,3]', () => {
			const arr1 = [1, 1, 2]
			const arr2 = [2, 3];
			const actual = mergeArrays(arr1, arr2);
			const expected = [1, 1, 2, 2, 3];
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given [1,9] and [2,3,4,5,6,7,8]', () => {

		it('should return [1,2,3,4,5,6,7,8,9]', () => {
			const arr1 = [1, 9]
			const arr2 = [2, 3, 4, 5, 6, 7, 8];
			const actual = mergeArrays(arr1, arr2);
			const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
			assert.deepEqual(actual, expected);
		});
	});

	describe('Given [1, 1, 3, 5] and [1, 2, 3, 4]', () => {

		it('should return [1, 1, 1, 2, 3, 3, 4, 5]', () => {
			const arr1 = [1, 1, 3, 5];
			const arr2 = [1, 2, 3, 4];
			const actual = mergeArrays(arr1, arr2);
			const expected = [1, 1, 1, 2, 3, 3, 4, 5];
			assert.deepEqual(actual, expected);
		});
	});
});