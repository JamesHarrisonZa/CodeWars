function findUnknowNumber(x, y, z) {

	let n = Math.max(x, y, z) > 0 ? Math.max(x, y, z): 1;

	while (!(n % 7 === z && n % 5 === y && n % 3 === x)) {

		if (n % 7 === z && z > 0) {
			n += z;
		}
		else if (n % 5 === y && y > 0) {
			n += y;
		}
		else if (n % 3 === x && x > 0) {
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