// https://www.codewars.com/kata/5659c6d896bc135c4c00021e

function nextSmaller(n) {
	return 0;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 12;
	const actual = nextSmaller(21);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(21) === 12');

((desc) => {
	const expected = 790;
	const actual = nextSmaller(907);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(907) === 790');

((desc) => {
	const expected = 513;
	const actual = nextSmaller(531);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(531) === 513');

((desc) => {
	const expected = -1;
	const actual = nextSmaller(135);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(135) === -1');

((desc) => {
	const expected = 2017;
	const actual = nextSmaller(2071);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(2071) === 2017');

((desc) => {
	const expected = -1;
	const actual = nextSmaller(1027);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(1027) === -1');

((desc) => {
	const expected = 144;
	const actual = nextSmaller(414);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(414) === 144');

((desc) => {
	const expected = 123456789;
	const actual = nextSmaller(123456798);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(123456798) === 123456789');

((desc) => {
	const expected = -1;
	const actual = nextSmaller(123456789);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(nextSmaller(123456789) === -1');

((desc) => {
	const expected = 1234567890;
	const actual = nextSmaller(1234567908);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('nextSmaller(1234567908) === 1234567890');
