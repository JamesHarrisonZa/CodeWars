// https://www.codewars.com/kata/deep-comparison-of-objects

/**
 * @param {Object} obj1 
 * @param {Object} obj2 
 */
function deepCompare(obj1, obj2) {

	if (typeof obj1 !== 'object' || (obj1 === null || obj1 === undefined)) return obj1 === obj2;
	if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

	return Object.keys(obj1)
		.every(key => {
			if (typeof obj1[key] === 'object') return deepCompare(obj1[key], obj2[key]);
			return (obj1[key] === obj2[key]) && (typeof obj1[key] === typeof obj2[key])
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

((desc) => {
	const expected = false;
	const actual = deepCompare(1, '1');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('string vs int');

((desc) => {
	const expected = true;
	const actual = deepCompare(1, 1);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('same int vs int');

((desc) => {
	const expected = false;
	const actual = deepCompare(1, 2);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Different int vs int');

((desc) => {
	const expected = false;
	const actual = deepCompare(null, undefined);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('null vs undefined');

((desc) => {
	const expected = false;
	const actual = deepCompare(null, undefined);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('undefined vs null');

((desc) => {
	const expected = false;
	const actual = deepCompare(null, undefined);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('int vs null');

((desc) => {
	const expected = false;
	const actual = deepCompare(null, undefined);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('null vs int');


((desc) => {
	const expected = true;
	const actual = deepCompare({ name: 'Joe', surname: 'Smith' }, { name: 'Joe', surname: 'Smith' });

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Same obj vs obj');

((desc) => {
	const expected = false;
	const actual = deepCompare({ name: 'Joe' }, { name: 'Joe', surname: 'Smith' });

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Missing property');