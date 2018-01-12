function isMerge(s, part1, part2) {
	return false;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = true;
	const actual = isMerge('codewars', 'code', 'wars');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = true;
	const actual = isMerge('codewars', 'cdw', 'oears');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = false;
	const actual = isMerge('codewars', 'cod', 'wars');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');