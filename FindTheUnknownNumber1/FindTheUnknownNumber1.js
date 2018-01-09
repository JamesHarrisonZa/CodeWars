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

(() => {
	const expected = 23;
	const actual = findUnknowNumber(2, 3, 2);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 52;
	const actual = findUnknowNumber(1, 2, 3) ;

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 103;
	const actual = findUnknowNumber(1, 3, 5);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 105;
	const actual = findUnknowNumber(0, 0, 0);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();


(() => {
	const expected = 1;
	const actual = findUnknowNumber(1, 1, 1);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();