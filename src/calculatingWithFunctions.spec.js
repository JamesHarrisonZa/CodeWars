const assert = require('assert');
const { zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, times, dividedBy } = require('./calculatingWithFunctions');

describe('Calculating with functions', () => {

	describe('one(plus(one()))', () => {
	
		it('should return 2', () => {
			const actual = one(plus(one()));
			const expected = 2;
			assert.equal(actual, expected);
		});
	});

	describe('seven(times(five()))', () => {
	
		it('should return 35', () => {
			const actual = seven(times(five()));
			const expected = 35;
			assert.equal(actual, expected);
		});
	});

	describe('four(plus(nine()))', () => {

		it('should return 13', () => {
			const actual = four(plus(nine()));
			const expected = 13;
			assert.equal(actual, expected);
		});
	});

	describe('eight(minus(three()))', () => {

		it('should return 5', () => {
			const actual = eight(minus(three()));
			const expected = 5;
			assert.equal(actual, expected);
		});
	});

	describe('six(dividedBy(two()))', () => {

		it('should return 3', () => {
			const actual = six(dividedBy(two()));
			const expected = 3;
			assert.equal(actual, expected);
		});
	});

	describe('eight(dividedBy(seven()))', () => {

		it('should return 1', () => {
			const actual = eight(dividedBy(seven()));
			const expected = 1;
			assert.equal(actual, expected);
		});
	});
});