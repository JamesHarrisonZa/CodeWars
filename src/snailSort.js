//https://www.codewars.com/kata/snail/train/javascript

/**
 * @param {Array<number>} array 
 */
function snail (array) {
	
	const demension = array.length;
	const sortedArray = new Array();
	//console.log('length: ' + sortedArray.length);

	//leftTraversal
	for (let leftIndex = 0; leftIndex < demension; leftIndex++) {
		sortedArray.push(array[0][leftIndex]);
	}
	console.log(`After leftTraversal, sortedArray: ${sortedArray}`);

	//downTraversal
	for (let downIndex = 1; downIndex < demension; downIndex++) {
		sortedArray.push(array[downIndex][demension-1]);
	}
	console.log(`After downTraversal, sortedArray: ${sortedArray}`);


	//rightTraversal
	for (let rightIndex = demension - 1 - 1; rightIndex >= 0; rightIndex--) {
		sortedArray.push(array[demension - 1][rightIndex]);
	}
	console.log(`After rightTraversal, sortedArray: ${sortedArray}`);

	//upTraversal
	for (let upIndex = demension- 1; upIndex < demension - 1; upIndex--) {
		console.log(`upIndex: ${upIndex}`);
		sortedArray.push(array[upIndex][0]);
	}
	console.log(`After upTraversal, sortedArray: ${sortedArray}`);
	return sortedArray;
}

module.exports = snail;