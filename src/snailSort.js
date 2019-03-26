//https://www.codewars.com/kata/snail/train/javascript

/**
 * @param {Array<number>} array 
 */
function snail (array) {
	
	const demension = array.length;

	if (demension === 1) {
		return array[0];
	}

	const sortedArray = new Array();

	for (let circle = 0; circle < demension - 1; circle++) {

		if (sortedArray.length === demension * demension) {
			break;
		}

		//rightTraversal
		for (let leftIndex = circle; leftIndex < demension - circle; leftIndex++) {
			sortedArray.push(array[circle][leftIndex]);
		}

		//downTraversal
		for (let downIndex = circle + 1; downIndex < demension - circle; downIndex++) {
			sortedArray.push(array[downIndex][demension - (1 + circle)]);
		}

		//leftTraversal
		for (let rightIndex = demension - 2 - circle; rightIndex >= circle; rightIndex--) {
			sortedArray.push(array[demension - (1 + circle)][rightIndex]);
		}

		//upTraversal
		for (let upIndex = demension - (2 + circle); upIndex >= circle + 1; upIndex--) {
			sortedArray.push(array[upIndex][circle]);
		}
	}
	return sortedArray;
}

module.exports = snail;