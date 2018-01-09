function findUnknowNumber(a, b, c, x, y, z) {

	let n = Math.max(x, y, z) > 0 ? Math.max(x, y, z) : 1;
	let loopCount = 1;

	while (!(n % c === z && n % b === y && n % a === x)) {

		if (n % c === z && z > 0) {
			n += z;
		}
		else if (n % b === y && y > 0) {
			n += y;
		}
		else if (n % a === x && x > 0) {
			n += x;
		}
		else {
			n++;
		}
	}
	return n;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

(() => {
	const expected = 23;
	const actual = findUnknowNumber(3, 5, 7, 2, 3, 2);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 52;
	const actual = findUnknowNumber(3, 5, 7, 1, 2, 3);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 29;
	const actual = findUnknowNumber(3, 7, 11, 2, 1, 7);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();

(() => {
	const expected = 1;
	const actual = findUnknowNumber(2, 3, 5, 1, 1, 1);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})();