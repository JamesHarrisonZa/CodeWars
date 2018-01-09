'use strict';

/** @param {Array<number>} arr */
function findOdd(arr) {
	
	let oddInt;
	const groupedItems = new Map();

	for (const item of arr) {
		if (!groupedItems.has(item)){
			groupedItems.set(item, 0);
		}
		const prevValue = groupedItems.get(item);
		groupedItems.set(item, prevValue + 1);
	}

	groupedItems.forEach((value, key, map) => {
		if (value % 2 !== 0){
			oddInt = key;
		}
	});

	return oddInt;
}

/** @param {Array<number>} arr */
const findOdd2 = (arr) => arr.filter(x => arr.filter(v => x === v).length % 2 === 1).reduce(a => a);

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

console.log(findOdd([1, 1, 1]) === 1);
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]) === 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) === -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) === 5);
console.log(findOdd([10]) === 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]) === 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]) === 1);