// https://www.codewars.com/kata/551f23362ff852e2ab000037

'use strict';

/** 
* @param {Array<Array<int>>} pyramid
*/
const longestSlideDown = (pyramid) => {
	for (let floor = pyramid.length - 1; floor > 0; floor--) { //Moving bottom -> top
	
		const parentFloorItems = pyramid[floor - 1];
		const currentFloorItems = pyramid[floor];

		for (let i = 0; i < pyramid[floor].length - 1; i++) { //Moving left -> right
		
			const itemOne = currentFloorItems[i];
			const itemTwo = currentFloorItems[i + 1];
			parentFloorItems[i] += Math.max(itemOne, itemTwo);
		}
	}
	return pyramid[0][0];
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const actual = longestSlideDown([
		[3],
		[7, 4],
		[2, 4, 6],
		[8, 5, 9, 3]
	]);
	const expected = 23;

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);

})('should work for small pyramids');

((desc) => {

	const actual = longestSlideDown([
		[75],
		[95, 64],
		[17, 47, 82],
		[18, 35, 87, 10],
		[20, 4, 82, 47, 65],
		[19, 1, 23, 75, 3, 34],
		[88, 2, 77, 73, 7, 63, 67],
		[99, 65, 4, 28, 6, 16, 70, 92],
		[41, 41, 26, 56, 83, 40, 80, 70, 33],
		[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
		[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
		[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
		[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
		[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
		[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
	]);
	const expected = 1074;

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);

})('should work for medium pyramids');