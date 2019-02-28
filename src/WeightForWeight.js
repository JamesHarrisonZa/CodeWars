//https://www.codewars.com/kata/weight-for-weight/train/javascript

/**
 * @param {string} numbers 
 */
function orderWeight(numbers) {
	return numbers
		.split(' ')
		.sort(sortByWeight)
		.join(' ');
}

/**
 * @param {string} a 
 * @param {string} b
 */
function sortByWeight(a, b) {
	const weightA = getWeight(a);
	const weightB = getWeight(b);

	if (weightA === weightB){
		return a.localeCompare(b);
	}
	return weightA - weightB;
}

function getWeight(number) {
	return number
		.split('')
		.map(x => parseInt(x))
		.reduce((prev, curr) => prev + curr, 0);
}

module.exports = orderWeight;