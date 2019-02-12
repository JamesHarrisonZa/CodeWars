//https://www.codewars.com/kata/fibonacci-tribonacci-and-friends/train/javascript

/**
 * 
 * @param {Array<number>} signature 
 * @param {number} n 
 */
function Xbonacci(signature, n){

	const signatureLength = signature.length;
	const sequence = signature.concat(new Array(n - signatureLength));

	for (let i = signatureLength; i < n; i++) {

		let next = 0;
		for (let j = signatureLength; j > 0; j--) {
			next += sequence[i - j];
		}
		sequence[i] = next;
	}
	return sequence;
}

module.exports = Xbonacci;