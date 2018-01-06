function checkDigit(number, index1, index2, digit){

	return Array.from(number.toString())
		.map(Number)
		.slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
		.includes(digit);
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

console.log(checkDigit(1234567, 1, 0, 1) === true);
console.log(checkDigit(1234567, 0, 1, 2) === true);
console.log(checkDigit(67845123654, 4, 2, 4) === true);
console.log(checkDigit(6668844536485, 0, 0, 6) === true);
console.log(checkDigit(9999999999, 2, 5, 1) === false);