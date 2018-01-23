// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

/**
 * @param {String} game 
 */
const bowlingScore = (game) => {

	const rolls = [...game.replace(/ /g, '')];

	return rolls.reduce((prev, curr) => {
		if (!prev) prev = 0;
		return Number(prev) + Number(curr);
	});
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = 0;
	const actual = bowlingScore('00 00 00 00 00 00 00 00 00 00')

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All misses should score zero');

((desc) => {

	const expected = 20;
	const actual = bowlingScore('11 11 11 11 11 11 11 11 11 11')

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All ones should score 20');