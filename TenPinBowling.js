// https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

/**
 * @param {String} game 
 */
const bowlingScore = (game) => {

	const rolls = [...game.replace(/ /g, '')].map(roll => roll === 'X' ? 10: roll);
	let firstInFrame = 0;
	let score = 0;

	for (let frame = 0; frame < 10; frame++) {
		
		if (isSpare(rolls, firstInFrame)) {
			score += 10 + getNextRoll(rolls, firstInFrame);
			firstInFrame += 2;
		}
		else if (isStrike(rolls, firstInFrame)) {
			score += 10 + getNextTwoRolls(rolls, firstInFrame);
			firstInFrame ++;
		}
		else {
			score += getTwoRollsInFrame(rolls, firstInFrame);
			firstInFrame += 2;
		}
	}
	return score;
};

const isSpare = (rolls, firstInFrame) => rolls[firstInFrame + 1] === '/';

const isStrike = (rolls, firstInFrame) => rolls[firstInFrame] === 10;

const getTwoRollsInFrame = (rolls, firstInFrame) => Number(rolls[firstInFrame]) + Number(rolls[firstInFrame + 1]);

const getNextRoll = (rolls, firstInFrame) => Number(rolls[firstInFrame + 2]);

const getNextTwoRolls = (rolls, firstInFrame) => Number(rolls[firstInFrame + 1]) + Number(rolls[firstInFrame + 2]);

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

((desc) => {

	const expected = 14;
	const actual = bowlingScore('X 11 00 00 00 00 00 00 00 00');

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Strike and two 1\'s should score 14');

((desc) => {

	const expected = 300;
	const actual = bowlingScore('X X X X X X X X X XXX');

	console.log(`${expected === actual}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Perfect game should score 300');