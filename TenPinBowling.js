// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

const bowlingScore = (frames) => {
	// Figure out the score!
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = 0;
	const actual = bowlingScore('00 00 00 00 00 00 00 00 00 00')

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All misses should score zero');

((desc) => {

	const expected = 20;
	const actual = bowlingScore('11 11 11 11 11 11 11 11 11 11')

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All ones should score 20');