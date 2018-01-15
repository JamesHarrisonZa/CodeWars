/**
 * @param {number} n 
 */
function nextBigger(n) {
	const charArray = String(n).split('');

	for (let i = charArray.length - 1; i >= 0; i--) {

		const currentDigit = charArray[i];
		const nextDigit = charArray[i - 1]
		
		if (nextDigit !== currentDigit) {
			charArray[i] = nextDigit;
			charArray[i - 1] = currentDigit;
			return Number(charArray.join(''));
		}
	}
	return -1;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 21;
	const actual = nextBigger(12);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(12) === 21');

((desc) => {
	const expected = 531;
	const actual = nextBigger(513);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(513) === 531');

((desc) => {
	const expected = 2071;
	const actual = nextBigger(2017);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(2017) === 2071');

((desc) => {
	const expected = 441;
	const actual = nextBigger(414);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(414) === 441');


((desc) => {
	const expected = 414;
	const actual = nextBigger(144);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextBigger(144) === 414'); //got 441