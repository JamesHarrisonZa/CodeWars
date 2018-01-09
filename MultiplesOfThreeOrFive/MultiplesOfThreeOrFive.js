function solution(number) {

	let sum = 0;
	
	while (number > 0) {
		number--;
		if (number % 3 === 0 || number % 5 === 0) {
			sum += number;
		}
	}
	return sum;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

(() => {
	const expected = 23;
	const actual = solution(10);

	console.log(`${actual === expected} expected: ${expected}, actual: ${actual}`);
})();