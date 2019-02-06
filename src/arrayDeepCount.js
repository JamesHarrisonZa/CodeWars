'use strict'

/**
* @param {Array<any>} array
*/
function deepCount(array) {

	let count = array.length;

	count += countInnerArrays(array);

	return count;
}

function countInnerArrays(array) {
	let innerCount = 0;
	for (const item of array) {
		if (Array.isArray(item)) {
			innerCount += countInnerArrays(item);
			innerCount += item.length;
		}
	}
	return innerCount;
}

module.exports = deepCount;
