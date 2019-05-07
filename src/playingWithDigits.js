//https://www.codewars.com/kata/5552101f47fc5178b1000050

/**
 * @param {number} n 
 * @param {number} p 
 */
function digPow(n, p) {
	
	const digits = n
		.toString()
		.split('')
		.map(x => Number(x));

	const powerSum = digits
		.map(x => x ** p++)
		.reduce((prev, curr) => prev + curr, 0);

	let k = 1;
	while (n * k <= powerSum) {
		if (n * k === powerSum)
			return k;
		k++;
	}
	return -1;
}

module.exports = digPow;