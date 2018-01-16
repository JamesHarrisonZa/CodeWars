// https://www.codewars.com/kata/human-readable-duration-format

function formatDuration(seconds) {

	if (seconds === 0) return 'now';

	const numYears = Math.floor(seconds / (86400*365));
	seconds = seconds - (numYears * 86400 * 365);

	const numDays = Math.floor(seconds / 86400);
	seconds = seconds - (numDays * 86400);

	const numHours = Math.floor(seconds / 3600);
	seconds = seconds - (numHours * 3600);

	const numMinutes = Math.floor(seconds / 60);
	seconds = seconds - (60 * numMinutes);
	
	const durations = [];
	durations.push(getText(numYears, 'year'));
	durations.push(getText(numDays, 'day'));
	durations.push(getText(numHours, 'hour'));
	durations.push(getText(numMinutes, 'minute'));
	durations.push(getText(seconds, 'second'));

	const nonZeroDurations = durations.filter(x => x);
	if (nonZeroDurations.length >= 3){
		return nonZeroDurations.slice(0, nonZeroDurations.length - 1).join(', ') + ' and ' + nonZeroDurations[nonZeroDurations.length -1];
	}
	return nonZeroDurations.join(' and ');
}

const getText = (num, text) => {
	if (num) return num === 1 ? `1 ${text}` : `${num} ${text}s`;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = 'now';
	const actual = formatDuration(0);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('now');

((desc) => {

	const expected = '1 second';
	const actual = formatDuration(1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('second');

((desc) => {

	const expected = '42 seconds';
	const actual = formatDuration(42);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('seconds');

((desc) => {

	const expected = '1 minute and 2 seconds';
	const actual = formatDuration(62);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('minute and seconds');

((desc) => {

	const expected = '2 minutes';
	const actual = formatDuration(120);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('minutes');

((desc) => {

	const expected = '1 hour';
	const actual = formatDuration(3600);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('hour');

((desc) => {

	const expected = '1 hour, 1 minute and 2 seconds';
	const actual = formatDuration(3662);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('hour, minute and seconds');

((desc) => {

	const expected = '182 days, 1 hour, 44 minutes and 40 seconds';
	const actual = formatDuration(15731080);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('days');

((desc) => {

	const expected = '8 years, 12 days, 13 hours, 41 minutes and 1 second';
	const actual = formatDuration(253374061);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('years');