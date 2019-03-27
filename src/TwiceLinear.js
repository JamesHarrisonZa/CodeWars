//https://www.codewars.com/kata/twice-linear/train/javascript

/**
 * @param {number} n 
 */
function dblLinear(n) {

	const u = [1];
	const buffer = 1.2; //Push this up to between 4 and 5 on CodeWars larger n's

	for (let i = 0; i < n * buffer; i++) {
		const x = u[i];
		const y = 2 * x + 1;
		const z = 3 * x + 1;
		u.push(y);
		u.push(z);
	}
	const sortedSequence = Array.from(new Set(u))
		.sort((a, b) => a - b);

	return sortedSequence[n];
}

module.exports = dblLinear;