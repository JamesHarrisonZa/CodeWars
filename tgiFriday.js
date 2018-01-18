// https://www.codewars.com/kata/tgi-friday/train/javascript

'use strict';

/**
 * @param {number} initialYear
 * @param {number} endYear
 */
const lastDayIsFriday = (initialYear, endYear) => {

	let fridayCount = 0;
	
	if (!endYear) endYear = initialYear;

	const isLastDayFriday = (year, month) => {
		const lastDayOfMonth = new Date(year, month + 1, 0);
		return lastDayOfMonth.getDay() === 5; //Friday
	};

	for (let year = initialYear; year <= endYear; year++) {
		for (let month = 0; month < 12; month++) {
			if (isLastDayFriday(year, month)) fridayCount++;
		}
	}
	
	return fridayCount;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 2;
	const actual = lastDayIsFriday(2017)

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('returns 2 when 2017');

((desc) => {
	const expected = 1;
	const actual = lastDayIsFriday(1991)

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('returns 1 when 1991');

((desc) => {
	const expected = 171;
	const actual = lastDayIsFriday(1901, 2000)

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('returns 171 when between 1901 and 2000');

((desc) => {
	const expected = 200;
	const actual = lastDayIsFriday(1901, 2017)

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('returns 200 when between 1991 and 2017');