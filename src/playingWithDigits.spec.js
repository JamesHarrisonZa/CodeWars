const digPow = require('./playingWithDigits');
const assert = require('assert');

describe('digPow', () => {

	describe('89 --> 8¹ + 9² = 89 * 1', () => {
		it('should return 1', () => {
			const actual = digPow(89, 1);
			const expected = 1;
			assert.equal(actual, expected);
		});
	});

	describe('695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2', () => {
		it('should return 2', () => {
			const actual = digPow(695, 2);
			const expected = 2;
			assert.equal(actual, expected);
		});
	});
});