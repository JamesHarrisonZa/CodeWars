'use strict';

const assert = require('assert');
const PinCodeGenerator = require('./pinCodeGenerator');

// The library should export a function that returns a batch of 1,000 PIN codes in random order
// Each PIN code in the batch should be unique
// Each PIN should be:
// 4 digits long
// Two consecutive digits should not be the same(e.g. 1156 is invalid)
// Three consecutive digits should not be incremental(e.g. 1236 is invalid)

describe('PinCodeGenerator', () => {

	describe('getBatch()', () => {

		it('should return 1000 PinCodes', () => {
			const sut = new PinCodeGenerator(Math).getBatch();
			const actual = sut.size;
			const expected = 1000;
			assert.equal(actual, expected);
		});

		it('should return PinCodes with 4 digits', () => {
			const sut = new PinCodeGenerator(Math).getBatch();
			for (const pinCode of sut) {
				const actual = pinCode.toString().length;
				const expected = 4;
				assert.equal(actual, expected);
			}
		});	

		describe('the PinCodes', () => {

			let _randomNumberProvider;

			beforeEach(() => {
				let seed = 1;
				_randomNumberProvider = function (condition, invalidNumber){
					return {
						random: function () {
							if (condition(seed)) {
								seed++
								return invalidNumber;
							}
							let x = Math.sin(seed++) * 10000;
							return x - Math.floor(x);
						}
					}
				};
			});

			it('should be unique', () => {
				const randomNumberProvider = _randomNumberProvider((seed) => seed === 1 || seed === 2, 0.0101);
				const sut = new PinCodeGenerator(randomNumberProvider).getBatch();
				const actual = Array.from(sut).filter(x => x === "0101").length;
				const expected = 1;
				assert.equal(actual, expected);
			});

			it('should not have consecutive duplicate digits', () => {
				const randomNumberProvider = _randomNumberProvider((seed) => seed === 1, 0.1123);
				const sut = new PinCodeGenerator(randomNumberProvider).getBatch();
				const actual = sut["1123"];
				const expected = null;
				assert.equal(actual, expected);
			});

			it('should not have three incremental digits', () => {
				const randomNumberProvider = _randomNumberProvider((seed) => seed === 1, 0.1230);
				const sut = new PinCodeGenerator(randomNumberProvider).getBatch();
				const actual = sut["1230"];
				const expected = null;
				assert.equal(actual, expected);
			});
		});
	});
});
