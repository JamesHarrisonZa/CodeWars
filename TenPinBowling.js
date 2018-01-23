// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

/**
 * @param {String} game 
 */
const bowlingScore = (game) => {

	const rolls = [...game.replace(/ /g, '')];
	let firstInFrame = 0;
	let score = 0;

	for (let frame = 0; frame < 10; frame++) {
		
		if (isSpare(rolls, firstInFrame)) {
			score += 10 + getNextFramesFirstRoll(rolls, firstInFrame);
		}
		else {
			score += getTwoRollsInFrame(rolls, firstInFrame);
		}
		firstInFrame +=2;
	}
	return score;
};

const getTwoRollsInFrame = (rolls, firstInFrame) => Number(rolls[firstInFrame]) + Number(rolls[firstInFrame + 1]);

const isSpare = (rolls, firstInFrame) => rolls[firstInFrame + 1] === '/';

const getNextFramesFirstRoll = (rolls, firstInFrame) => Number(rolls[firstInFrame + 2]);

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = 0;
	const actual = bowlingScore('00 00 00 00 00 00 00 00 00 00');

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All misses should score zero');

((desc) => {

	const expected = 20;
	const actual = bowlingScore('11 11 11 11 11 11 11 11 11 11');

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('All ones should score 20');

((desc) => {

	const expected = 12;
	const actual = bowlingScore('5/ 10 00 00 00 00 00 00 00 00');

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Spare and 1 should score 12');