//https://www.codewars.com/kata/sum-of-pairs/train/javascript

//ToDo, optimize. Test with 10000 items is timing out.

/**
 * 
 * @param {Array<number>} numbers 
 * @param {number} sum 
 */
var sum_pairs = function (numbers, sum) {

	let currentPair;
	let currentPairEnd;

	for (let i = 0; i < numbers.length; i++) {
		
		if (currentPairEnd !== undefined && i > currentPairEnd){
			return currentPair;
		}

		let first = numbers[i];
		for (let j = i + 1; j < numbers.length; j++) {
			let second = numbers[j];
			
			if (first + second === sum) {

				if (currentPairEnd === undefined || j < currentPairEnd) {
					currentPair = [first, second];
					currentPairEnd = j;
				}
			}
		}
	}
	return currentPair;
}

module.exports = sum_pairs;