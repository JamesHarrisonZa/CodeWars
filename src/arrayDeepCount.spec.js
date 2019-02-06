const assert = require('assert');
const deepCount = require('./arrayDeepCount');

describe.only('deepCount', () => {

	describe('given []', () => {

		it('should return 0', () => {
			const actual = deepCount([]);
			const expected = 0;
			assert.equal(actual, expected);
		});
	});

	describe('given [1, 2, 3]', () => {
	
		it('should return 0', () => {
			const actual = deepCount([1, 2, 3]);
			const expected = 3;
			assert.equal(actual, expected);
		});
	});

	describe('given ["x", "y", ["z"]]', () => {
	
		it('should return 4', () => {
			const actual = deepCount(["x", "y", ["z"]]);
			const expected = 4;
			assert.equal(actual, expected);
		});
	});

	describe('given [1, 2, [3, 4, [5]]]', () => {
	
		it('should return 7', () => {
			const actual = deepCount([1, 2, [3, 4, [5]]]);
			const expected = 7;
			assert.equal(actual, expected);
		});
	});

	describe('given [[[[[[[[[]]]]]]]]]', () => {
	
		it('should return 8', () => {
			const actual = deepCount([[[[[[[[[]]]]]]]]]);
			const expected = 8;
			assert.equal(actual, expected);
		});
	});


});