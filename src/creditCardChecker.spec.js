'use strict'

const assert = require('assert');
const getIssuer = require('./creditCardChecker');

describe('Given card number', () => {

	describe('that starts with 4', () => {

		it('should return VISA', () => {
			const cardNumber = 4111111111111111;
			const actual = getIssuer(cardNumber);
			const expected = 'VISA';
			assert.equal(actual, expected);
		});
	});
});