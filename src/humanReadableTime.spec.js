const assert = require('assert');
const humanReadable  = require('./humanReadableTime');

describe.only('humanReadable', () => {

	describe('given 0', () => {
	
		it('should return 00:00:00', () => {
			const actual = humanReadable(0);
			const expected = '00:00:00';
			assert.equal(actual, expected);
		});
	});
});