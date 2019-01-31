'use strict'

const assert = require('assert');
const inArray = require('./whichAreIn');

describe.only('inArray', () => {

	describe('given wordsToCheck: ["lively", "alive", "harp", "sharp", "armstrong"]', () => {
	
		const wordsToCheck = ["lively", "alive", "harp", "sharp", "armstrong"];

		describe('and searchTerms: ["xyz", "live", "strong"]', () => {

			it('should return: ["live", "strong"]', () => {

				const searchTerms = ["xyz", "live", "strong"];
				const actual = inArray(searchTerms, wordsToCheck);
				const expected = ["live", "strong"];

				assert.deepEqual(actual, expected);
			});
		});

		describe('and searchTerms: ["live", "strong", "arp"]', () => {

			it('should return: ["arp", "live", "strong"]', () => {

				const searchTerms = ["live", "strong", "arp"];
				const actual = inArray(searchTerms, wordsToCheck);
				const expected = ["arp", "live", "strong"];

				assert.deepEqual(actual, expected);
			});
		});

		describe('and searchTerms: ["tarp", "mice", "bull"]', () => {

			it('should return: []', () => {

				const searchTerms = ["tarp", "mice", "bull"];
				const actual = inArray(searchTerms, wordsToCheck);
				const expected = [];

				assert.deepEqual(actual, expected);
			});
		});
	});
});