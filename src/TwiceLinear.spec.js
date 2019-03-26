const assert = require('assert');
const dblLinear = require('./TwiceLinear');

describe.only('dblLinear', () => {

	describe('given 10', () => {
	
		it('should return 22', () => {
			const actual = dblLinear(10);
			const expected = 22;
			assert.equal(actual, expected);
		});
	});
});