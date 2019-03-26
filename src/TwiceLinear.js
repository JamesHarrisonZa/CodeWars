//https://www.codewars.com/kata/twice-linear/train/javascript

/**
 * @param {number} n 
 */
function dblLinear(n) {

	const u = [1];

	for (let i = 0; i < n - 2; i++) {
		const x = u[i];
		const y = 2 * x + 1;
		const z = 3 * x + 1;
		u.push(y);
		u.push(z);
		//console.log(`x: ${x}, y: ${y}, z: ${z}`);
	}
	const sortedSequence = u
		.sort((a, b) => a - b)
		.filter((a, i) => u.indexOf(a) === i);

	console.log(`sortedSequence: ${sortedSequence}`);

	return sortedSequence[n];
}

module.exports = dblLinear;