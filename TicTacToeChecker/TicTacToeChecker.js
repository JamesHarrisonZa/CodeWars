/**
* @param {Array<Array>} board
*/
function isSolved(board) {

	//check rows
	for (let row of board) {
		const hasThreeAccross = row.every((c) => c === row[0]) && row[0] !== 0;
		if (hasThreeAccross) {
			return row[0];
		}
	}

	//check columns
	for (let c = 0; c < 3; c++) {
		const hasThreedown = (board[0][c] === board[1][c] && board[1][c] === board[2][c]) && board[0][c] !== 0;
		if (hasThreedown) {
			return board[0][c];
		}
	}

	//check diagonals
	const hasDiagonalTopLeft = (board[0][0] === board[1][1] && board[1][1] === board[2][2]) && board[0][0] !== 0;
	const hasDiagonalTopRight = (board[0][2] === board[1][1] && board[1][1] === board[2][0]) && board[0][2] !== 0;

	if (hasDiagonalTopLeft) {
		return board[0][0];
	}

	if (hasDiagonalTopRight) {
		return board[0][2];
	}

	const isDraw = board.every((row) => row.every(col => col !== 0));
	return isDraw ? 0 : -1;
}


// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {

	const expected = -1;
	const actual = isSolved([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when game is in progress');

((desc) => {

	const expected = 0;
	const actual = isSolved([
		[1, 2, 1],
		[2, 2, 1],
		[1, 1, 2]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when its a draw');

((desc) => {

	const expected = 1;
	const actual = isSolved([
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when X won by 3 accross');

((desc) => {

	const expected = 2;
	const actual = isSolved([
		[0, 0, 0],
		[2, 2, 2],
		[0, 0, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when O won by 3 accross');

((desc) => {

	const expected = 1;
	const actual = isSolved([
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when X won by 3 down');

((desc) => {

	const expected = 2;
	const actual = isSolved([
		[0, 2, 0],
		[0, 2, 0],
		[0, 2, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when O won by 3 down');

((desc) => {

	const expected = 1;
	const actual = isSolved([
		[1, 0, 0],
		[0, 1, 0],
		[0, 0, 1]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when X won by 3 diagonal top to bottom');

((desc) => {

	const expected = 1;
	const actual = isSolved([
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 0]
	]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('when X won by 3 diagonal bottom to top');