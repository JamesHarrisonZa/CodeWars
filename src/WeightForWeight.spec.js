const assert = require('assert');
const orderWeight = require('./WeightForWeight');

describe('orderWeight', () => {

	describe('given: 120 101 100', () => {
		it('should return 100 101 120', () => {
			const actual = orderWeight('120 101 100');
			const expected = '100 101 120';
			assert.equal(actual, expected);
		});
	});

	describe('given: 20 101', () => {
		it('should return 101 20', () => {
			const actual = orderWeight('20 101');
			const expected = '101 20';
			assert.equal(actual, expected);
		});
	});

	describe('given: 103 123 4444 99 2000', () => {
	
		it('should return 2000 103 123 4444 99', () => {
			const actual = orderWeight('103 123 4444 99 2000');
			const expected = '2000 103 123 4444 99';
			assert.equal(actual, expected);
		});
	});

	describe('given: 2000 10003 1234000 44444444 9999 11 11 22 123', () => {

		it('should return 11 11 2000 10003 22 123 1234000 44444444 9999', () => {
			const actual = orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123');
			const expected = '11 11 2000 10003 22 123 1234000 44444444 9999';
			assert.equal(actual, expected);
		});
	});
});
