function findUnknowNumber(x, y, z) {

	let n = 1;
	while (!(n % 3 === x && n % 5 === y && n % 7 === z)) {
		n++;
	}
	return n;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 23;
	const actual = findUnknowNumber(2, 3, 2);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = 52;
	const actual = findUnknowNumber(1, 2, 3) ;

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 2');

((desc) => {
	const expected = 103;
	const actual = findUnknowNumber(1, 3, 5);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 3');

((desc) => {
	const expected = 105;
	const actual = findUnknowNumber(0, 0, 0);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 4');


((desc) => {
	const expected = 1;
	const actual = findUnknowNumber(1, 1, 1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 5');