function maps(x) {
	return x.map((item) => { return item + item; });
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

function areEqualArrays(arr1, arr2) {

	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

((desc) => {
	const expected =  [2, 4, 6];
	const actual = maps([1, 2, 3]);

	console.log(`${desc}: ${areEqualArrays(expected, actual)}`);
})('Test 1');

((desc) => {
	const expected = [8, 2, 2, 2, 8]
	const actual = maps([4, 1, 1, 1, 4]);

	console.log(`${desc}: ${areEqualArrays(expected, actual)}`);
})('Test 2');

((desc) => {
	const expected = [4, 4, 4, 4, 4, 4];
	const actual = maps([2, 2, 2, 2, 2, 2]);

	console.log(`${desc}: ${areEqualArrays(expected, actual)}`);
})('Test 3');