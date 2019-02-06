const assert = require('assert');
const deepCount = require('./arrayDeepCount');

describe.only('deepCount', () => {

	it('should return 42', () => {
		const actual = deepCount();
		const expected = 42;
		assert.equal(actual, expected);
	});
});