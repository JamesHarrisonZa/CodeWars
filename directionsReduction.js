// https://www.codewars.com/kata/directions-reduction

function dirReduc(arr) {
	
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------


function areEqualArrays(arr1, arr2) {

	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

((desc) => {
	const expected = ["WEST"];
	const actual = dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = ["NORTH", "WEST", "SOUTH", "EAST"];
	const actual = dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 2');

((desc) => {
	const expected = [];
	const actual = dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 3');