'use strict'

/**
* @param {Array<any>} array
*/
function deepCount(array) {

	let count = array.length;
	for (const item of array) {
		if (Array.isArray(item)) {
			count += deepCount(item);
		}
	}
	return count;
}

module.exports = deepCount;
