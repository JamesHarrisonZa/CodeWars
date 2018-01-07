function longestSlideDown(pyramid) {
	for (let floor = pyramid.length - 1; floor > 0; floor--) //Moving bottom -> top
	{
		var parentFloorItems = pyramid[floor - 1];
		var currentFloorItems = pyramid[floor];

		for (let i = 0; i < pyramid[floor].length - 1; i++) //Moving left -> right
		{
			let itemOne = currentFloorItems[i];
			let itemTwo = currentFloorItems[i + 1];
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

	console.log(`${desc}: ${expected === actual}`);

})('should work for small pyramids');