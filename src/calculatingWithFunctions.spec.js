const assert = require('assert');
const { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require('./calculatingWithFunctions');

describe.only('Calculating with functions', () => {

	describe('seven(times(five()))', () => {
	
		it('should return 35', () => {
			const actual = seven(times(five()));
			const expected = 35;
			assert.equal(actual, expected);
		});
	});

	describe.skip('four(plus(nine()))', () => {

		it('should return 13', () => {
			const actual = four(plus(nine()));
			const expected = 13;
			assert.equal(actual, expected);
		});
	});

	describe.skip('eight(minus(three()))', () => {

		it('should return 5', () => {
			const actual = eight(minus(three()));
			const expected = 5;
			assert.equal(actual, expected);
		});
	});

	describe.skip('six(dividedBy(two()))', () => {

		it('should return 3', () => {
			const actual = six(dividedBy(two()));
			const expected = 3;
			assert.equal(actual, expected);
		});
	});
});