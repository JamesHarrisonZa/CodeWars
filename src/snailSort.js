//https://www.codewars.com/kata/snail/train/javascript

/**
 * @param {Array<number>} array 
 */
function snail (array) {
	
	const demension = array.length;
	const sortedArray = new Array();

	for (let circle = 0; circle < demension - 1; circle++) {

		//console.log(`circle: ${circle}`)

		//rightTraversal
		for (let leftIndex = circle; leftIndex < demension - circle; leftIndex++) {
			sortedArray.push(array[circle][leftIndex]);
		}
		//console.log(`After rightTraversal,  sortedArray: ${sortedArray}`);

		//downTraversal
		for (let downIndex = circle + 1; downIndex < demension - circle; downIndex++) {
			sortedArray.push(array[downIndex][demension - (1 + circle)]);
		}
		//console.log(`After downTraversal,   sortedArray: ${sortedArray}`);

		//leftTraversal
		for (let rightIndex = demension - 2 - circle; rightIndex >= circle; rightIndex--) {
			sortedArray.push(array[demension - (1 + circle)][rightIndex]);
		}
		//console.log(`After leftTraversal,   sortedArray: ${sortedArray}`);

		//upTraversal
		for (let upIndex = demension - (2 + circle); upIndex >= circle + 1; upIndex--) { // <-- Adding 7 instead of 12, first index
			sortedArray.push(array[upIndex][circle]);
		}
		//console.log(`After upTraversal,     sortedArray: ${sortedArray}`);
	}
	return sortedArray;
}

module.exports = snail;