// https://www.codewars.com/kata/human-readable-duration-format

function formatDuration(seconds) {
	// Complete this function
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = '1 second';
	const actual = formatDuration(1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('1 second');

// ((desc) => {

// 	const expected = '1 minute and 2 seconds';
// 	const actual = formatDuration(62);

// 	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('1 minute and 2 seconds');

// ((desc) => {

// 	const expected = '2 minutes';
// 	const actual = formatDuration(120);

// 	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('2 minutes');

// ((desc) => {

// 	const expected = '1 hour';
// 	const actual = formatDuration(3600);

// 	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('1 hour');

// ((desc) => {

// 	const expected = '1 hour, 1 minute and 2 seconds';
// 	const actual = formatDuration(3662);

// 	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('1 hour, 1 minute and 2 seconds');