const assert = require('assert');
const humanReadable  = require('./humanReadableTime');

describe.only('humanReadable', () => {

	describe('given 0 seconds', () => {
	
		it('should return 00:00:00', () => {
			const actual = humanReadable(0);
			const expected = '00:00:00';
			assert.equal(actual, expected);
		});
	});

	describe('given 5 seconds', () => {
	
		it('should return 00:00:05', () => {
			const actual = humanReadable(5);
			const expected = '00:00:05';
			assert.equal(actual, expected);
		});
	});

	describe('given 60 seconds', () => {

		it('should return 00:01:00', () => {
			const actual = humanReadable(60);
			const expected = '00:01:00';
			assert.equal(actual, expected);
		});
	});

	describe('given 86399 seconds', () => {

		it('should return 23:59:59', () => {
			const actual = humanReadable(86399);
			const expected = '23:59:59';
			assert.equal(actual, expected);
		});
	});

	describe('given 359999 seconds', () => {

		it('should return 99:59:59', () => {
			const actual = humanReadable(359999);
			const expected = '99:59:59';
			assert.equal(actual, expected);
		});
	});
});