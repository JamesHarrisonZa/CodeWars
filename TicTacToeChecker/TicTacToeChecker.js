// -1 In progress (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game(i.e.a draw).

function isSolved(board) {
	
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = -1;
	const actual = isSolved([
		[0, 0, 1],
		[0, 1, 2],
		[2, 1, 0]
	]);

	console.log(`${actual === expected}, expected: ${expected}, actual: ${actual}`);
})('when game is in progress');