'use strict';

/**
 * @param {number} initialYear
 * @param {number} endYear
 */
function lastDayIsFriday(initialYear, endYear) {

	
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 2;
	const actual = lastDayIsFriday(2017)

	console.log(`${desc}: ${expected === actual}`);
})('returns 2 when 2017');

((desc) => {
	const expected = 1;
	const actual = lastDayIsFriday(1991)

	console.log(`${desc}: ${expected === actual}`);
})('returns 1 when 1991');

((desc) => {
	const expected = 171;
	const actual = lastDayIsFriday(1901, 2000)

	console.log(`${desc}: ${expected === actual}`);
})('returns 171 when between 1901 and 2000');

((desc) => {
	const expected = 200;
	const actual = lastDayIsFriday(1901, 2017)

	console.log(`${desc}: ${expected === actual}`);
})('returns 200 when between 1991 and 2017');