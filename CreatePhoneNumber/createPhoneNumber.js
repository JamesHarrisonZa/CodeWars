'use strict';

/**
 * @param {Array<number>} numbers
 */
const createPhoneNumber = (numbers) => 
	`(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;

//Another nice solution
const createPhoneNumber2 = (numbers) => 
	numbers.reduce((p, c) => p.replace('x', c), "(xxx) xxx-xxxx");

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = '(123) 456-7890';
	const actual = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 1');

((desc) => {
	const expected = '(042) 007-0007';
	const actual = createPhoneNumber([0, 4, 2, 0, 0, 7, 0, 0, 0, 7]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Test 2');