// https://www.codewars.com/kata/deep-comparison-of-objects

/**
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
function deepCompare(obj1, obj2) {
	return Object.keys(obj1)
		.every(key => {
			if (typeof obj1[key] === "object") return deepCompare(obj1[key], obj2[key]);
			return obj1[key] === obj2[key]
		});
};

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = true;
	const actual = deepCompare({name: 'Joe'}, {name: 'Joe'});

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Same string property');

((desc) => {
	const expected = true;
	const actual = deepCompare({ name: 'Joe', x: { y: 'a', z: 'b' } }, { name: 'Joe', x: { y: 'a', z: 'b' }});

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Same nested object');

((desc) => {
	const expected = false;
	const actual = deepCompare({ name: 'Joe', x: { y: 'a', z: 'b' } }, { name: 'Joe', x: { y: 'a', z: 'c' } });

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Different nested object');

((desc) => {
	const expected = true;
	const actual = deepCompare({ name: 'Joe', initials: ['J', 'R', 'H'] }, { name: 'Joe', initials: ['J', 'R', 'H'] });

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Same array property');

((desc) => {
	const expected = false;
	const actual = deepCompare({ name: 'Joe', initials: ['J', 'R', 'H'] }, { name: 'Joe', initials: ['J', 'R', 'Z'] });

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Different array property');