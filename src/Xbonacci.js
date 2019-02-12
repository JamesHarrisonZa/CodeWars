//https://www.codewars.com/kata/fibonacci-tribonacci-and-friends/train/javascript

/**
 * 
 * @param {Array<number>} signature 
 * @param {number} n 
 */
function Xbonacci(signature, n){

	const signatureLength = signature.length;
	if (n < signatureLength) {
		return signature.slice(0, n);
	}
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

//Cool solution using reduce. It is still 2 loops. It is slicing the array multiple times though.
const Xbonacci2 = (sig, n) => {
	let len = sig.length;
	for (let i = len; i < n; i++)
		sig[i] = sig.slice(i - len).reduce((a, b) => a + b);
	return sig.slice(0, n);
}

module.exports = Xbonacci;