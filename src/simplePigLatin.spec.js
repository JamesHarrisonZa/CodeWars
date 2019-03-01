const assert = require('assert');
const pigIt = require('./simplePigLatin');

describe.only('pigIt', () => {

	describe('given word', () => {

		it('should return ordway', () => {
			const actual = pigIt('word');
			const expected = 'ordway';
			assert.equal(actual, expected);
		});
	});

	describe('given Pig latin is cool', () => {

		it('should return igPay atinlay siay oolcay', () => {
			const actual = pigIt('Pig latin is cool');
			const expected = 'igPay atinlay siay oolcay';
			assert.equal(actual, expected);
		});
	});
	
	describe('given This is my string', () => {

		it('should return hisTay siay ymay tringsay', () => {
			const actual = pigIt('This is my string');
			const expected = 'hisTay siay ymay tringsay';
			assert.equal(actual, expected);
		});
	});
});