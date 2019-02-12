//https://www.codewars.com/kata/tribonacci-sequence

/**
 * @param {Array<number>} signature 
 * @param {number} n 
 */
function tribonacci(signature, n) {

	if (n < 3) {
		return signature.slice(0, n);
	}

	const sequence = signature.concat(new Array(n-3));

	for (let i = 3; i < n; i++) {
		sequence[i] = sequence[i - 3] + sequence[i - 2] + sequence[i - 1];
	}
	return sequence;
}

module.exports = tribonacci;