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
});