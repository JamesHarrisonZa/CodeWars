// https://www.codewars.com/kata/human-readable-duration-format

function formatDuration(seconds) {

	const numMinutes = Math.floor(seconds / 60);
	const numSeconds = seconds - (60 * numMinutes);
	
	const durations = [];
	durations.push(getMinuteText(numMinutes));
	durations.push(getSeconds(numSeconds));
		
	return durations.filter(x => x).join(' and ');
}

const getMinuteText = (numMinutes) => {
	if (numMinutes)	return numMinutes === 1 ? `1 minute` : `${numMinutes} minutes`;
}

const getSeconds = (numSeconds) => {
	if (numSeconds)	return numSeconds === 1 ? `1 second` : `${numSeconds} seconds`;
} 

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = '1 second';
	const actual = formatDuration(1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('1 second');

((desc) => {

	const expected = '42 seconds';
	const actual = formatDuration(42);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('42 seconds');

((desc) => {

	const expected = '1 minute and 2 seconds';
	const actual = formatDuration(62);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('1 minute and 2 seconds');

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