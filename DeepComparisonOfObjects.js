// https://www.codewars.com/kata/deep-comparison-of-objects

/**
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
function deepCompare(obj1, obj2) {
	return Object.keys(obj1).every(key => obj1[key] === obj2[key]);
};

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = true;
	const actual = deepCompare({name: 'Joe'}, {name: 'Joe'});

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Same name');