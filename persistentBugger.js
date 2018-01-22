// https://www.codewars.com/kata/persistent-bugger/train/javascript

/**
 * @param {number} num 
 */
const persistence = (num) => {
	
	let count = 0;
	let result = num;	

	while (String(result).length > 1) {
		result = multiplyDigits(result);
		count++;
	}
	return count;
};

/**
 * @param {number} num 
 */
const multiplyDigits = (num) => {
	const digits = String(num).split('')//.map(x => Number(x))
	return digits.reduce((prev, curr) => prev * curr);
};

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 0;
	const actual = persistence(4);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('persistence(4) === 0');

((desc) => {
	const expected = 2;
	const actual = persistence(25);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('persistence(25) === 2');

((desc) => {
	const expected = 3;
	const actual = persistence(39);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('persistence(39) === 3');

((desc) => {
	const expected = 4;
	const actual = persistence(999);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('persistence(999) === 4');