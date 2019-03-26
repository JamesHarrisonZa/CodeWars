const assert = require('assert');
const dblLinear = require('./TwiceLinear');

describe('dblLinear', () => {

	describe('given 10', () => {
	
		it('should return 22', () => {
			const actual = dblLinear(10);
			const expected = 22;
			assert.equal(actual, expected);
		});
	});

	// describe.only('given 20', () => {

	// 	it('should return 57', () => {
	// 		const actual = dblLinear(20);
	// 		const expected = 57;
	// 		assert.equal(actual, expected);
	// 	});
	// });

	// describe('given 30', () => {

	// 	it('should return 91', () => {
	// 		const actual = dblLinear(30);
	// 		const expected = 91;
	// 		assert.equal(actual, expected);
	// 	});
	// });

	// describe('given 50', () => {

	// 	it('should return 175', () => {
	// 		const actual = dblLinear(50);
	// 		const expected = 175;
	// 		assert.equal(actual, expected);
	// 	});
	// });

	// describe('given 100', () => {

	// 	it('should return 447', () => {
	// 		const actual = dblLinear(100);
	// 		const expected = 447;
	// 		assert.equal(actual, expected);
	// 	});
	// });
});