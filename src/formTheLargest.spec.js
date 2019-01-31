'use strict'

const assert = require('assert');
const formTheLargest = require('./formTheLargest');

describe.only('formTheLargest', () => {

	describe('Given 213', () => {
		it('should return 321', () => {
			const expected = 321;
			const actual = formTheLargest(213);
			assert.equal(actual, expected);
		});
	});
	describe('Given 7389', () => {
		it('should return 9873', () => {
			const expected = 9873;
			const actual = formTheLargest(7389);
			assert.equal(actual, expected);
		});
	});
	describe('Given 63792', () => {
		it('should return 97632', () => {
			const expected = 97632;
			const actual = formTheLargest(63792);
			assert.equal(actual, expected);
		});
	});
	describe('Given 566797', () => {
		it('should return 977665', () => {
			const expected = 977665;
			const actual = formTheLargest(566797);
			assert.equal(actual, expected);
		});
	});
	describe('Given 1000000', () => {
		it('should return 1000000', () => {
			const expected = 1000000;
			const actual = formTheLargest(1000000);
			assert.equal(actual, expected);
		});
	});
});
