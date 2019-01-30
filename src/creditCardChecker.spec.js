'use strict'

const assert = require('assert');
const getIssuer = require('./creditCardChecker');

describe.only('Given card number', () => {

	describe('that starts with', () => {

		describe('34 ', () => {

			describe('and length of 15', () => {
			
				it('should return AMEX', () => {
					const cardNumber = 340000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'AMEX';
					assert.equal(actual, expected);
				});
			});
			describe('and length not of 15', () => {
			
				it('should return Unknown', () => {
					const cardNumber = 340;
					const actual = getIssuer(cardNumber);
					const expected = 'Unknown';
					assert.equal(actual, expected);
				});
			});
		});

		describe('37', () => {

			describe('and length of 15', () => {

				it('should return AMEX', () => {
					const cardNumber = 370000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'AMEX';
					assert.equal(actual, expected);
				});
			});
			describe('and length not of 15', () => {

				it('should return Unknown', () => {
					const cardNumber = 370;
					const actual = getIssuer(cardNumber);
					const expected = 'Unknown';
					assert.equal(actual, expected);
				});
			});
		});

		describe('6011', () => {

			describe('and length of 16', () => {

				it('should return Discover', () => {
					const cardNumber = 6011000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'Discover';
					assert.equal(actual, expected);
				});
			 });

			describe('and length not of 16', () => {

				it('should return Unknown', () => {
					const cardNumber = 60110;
					const actual = getIssuer(cardNumber);
					const expected = 'Unknown';
					assert.equal(actual, expected);
				});
			});
		});

		describe('51', () => {

			describe('and length of 16', () => {

				it('should return Mastercard', () => {
					const cardNumber = 5100000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'Mastercard';
					assert.equal(actual, expected);
				});
			});

			describe('and length not of 16', () => {

				it('should return Unknown', () => {
					const cardNumber = 510;
					const actual = getIssuer(cardNumber);
					const expected = 'Unknown';
					assert.equal(actual, expected);
				});
			});
		});

		describe('52', () => {

			it('should return Mastercard', () => {
				const cardNumber = 5200000000000000;
				const actual = getIssuer(cardNumber);
				const expected = 'Mastercard';
				assert.equal(actual, expected);
			});
		});

		describe('53', () => {

			it('should return Mastercard', () => {
				const cardNumber = 5300000000000000;
				const actual = getIssuer(cardNumber);
				const expected = 'Mastercard';
				assert.equal(actual, expected);
			});
		});

		describe('54', () => {

			it('should return Mastercard', () => {
				const cardNumber = 5400000000000000;
				const actual = getIssuer(cardNumber);
				const expected = 'Mastercard';
				assert.equal(actual, expected);
			});
		});

		describe('55', () => {

			it('should return Mastercard', () => {
				const cardNumber = 5500000000000000;
				const actual = getIssuer(cardNumber);
				const expected = 'Mastercard';
				assert.equal(actual, expected);
			});
		});

		describe('4', () => {

			describe('and length of 13', () => {

				it('should return VISA', () => {
					const cardNumber = 4000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'VISA';
					assert.equal(actual, expected);
				});
			});

			describe('and length of 16', () => {

				it('should return VISA', () => {
					const cardNumber = 4000000000000000;
					const actual = getIssuer(cardNumber);
					const expected = 'VISA';
					assert.equal(actual, expected);
				});
			});

			describe('and length not of 16', () => {

				it('should return Unknown', () => {
					const cardNumber = 40;
					const actual = getIssuer(cardNumber);
					const expected = 'Unknown';
					assert.equal(actual, expected);
				});
			});
		});
		describe('something else', () => {
			
			it('should return Unknown', () => {
				const cardNumber = 900000000000000;
				const actual = getIssuer(cardNumber);
				const expected = 'Unknown';
				assert.equal(actual, expected);
			});
		});
	});
});