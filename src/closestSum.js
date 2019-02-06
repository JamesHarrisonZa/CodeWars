/**
 * 
 * @param {Array<number>} numbers 
 * @param {number} target 
 */
const closestSum = (numbers, target) => {
	
	let closest;
	let closestRemainder;
	const ascendingNumbers = numbers.sort((a, b) => a-b);
	
	for (let i = 0; i < ascendingNumbers.length; i++) {
		const firstNumber = ascendingNumbers[i];
		const secondNumber = ascendingNumbers[i+1];
		const thirdNumber = ascendingNumbers[i+2];

		if (secondNumber === undefined || thirdNumber === undefined) {
			break;
		}

		const sum = firstNumber + secondNumber + thirdNumber;
		const remainder = target % sum;

		if (closest === undefined || remainder < closestRemainder) {
			closest = sum;
			closestRemainder = remainder;
		}
	}
	return closest;
}

module.exports = closestSum;