'use strict'

// Notes: Not using Array.push() or Array.shift() for performance reasons not knowing how big the input arrays might get.
// As a result im using 2 counters to move through the arrays rather than modify them which becomes an expensive opperation the bigger they get;

function mergeArrays(arr1, arr2) {

	if (!arePopulatedArrays(arr1, arr2))
		return getInvalidArraysResult(arr1, arr2);

	let arr1Index = 0;
	let arr2Index = 0;
	const totalItems = arr1.length + arr2.length;
	const mergedArray = new Array(totalItems);

	for (let i = 0; i < totalItems; i++) {

		if (hasItems(arr1, arr1Index)) {

			if (hasItems(arr2, arr2Index)) {

				if (HasSmallestItem(arr1, arr2, arr1Index, arr2Index)) {
					mergedArray[i] = arr1[arr1Index++];
				} else {
					mergedArray[i] = arr2[arr2Index++];
				}
			} else {
				mergedArray[i] = arr1[arr1Index++];
			}
		} else {
			mergedArray[i] = arr2[arr2Index++];
		}
	}
	return mergedArray;
}

function arePopulatedArrays(arr1, arr2) {

	if (!arr1 || arr1.length === 0)
		return false;

	if (!arr2 || arr2.length === 0)
		return false;

	return true;
}

function getInvalidArraysResult(arr1, arr2) {

	if (!arr1 && !arr2)
		return [];

	if ((!arr2 || arr2.length === 0) && (arr1 && arr1.length !== 0))
		return arr1;

	if ((!arr1 || arr1.length === 0) && (arr2 && arr2.length !== 0))
		return arr2;

	return [];
}

function hasItems(arr, index) {
	return index < arr.length;
}

function HasSmallestItem(arr1, arr2, arr1Index, arr2Index) {
	return arr1[arr1Index] <= arr2[arr2Index];
}

module.exports = mergeArrays;
