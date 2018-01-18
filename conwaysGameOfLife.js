// https://www.codewars.com/kata/525fbff0594da0665c0003a3

'use strict';

/**
 * @param {Array<Array<number>>} cells
 */
function nextGen(cells) {

	const getCell = (cells, row, col) => (cells[row] && cells[row][col]) ? 1 : 0;

	return cells.map((row, r) => {
		return row.map((isAlive, c) => {

			const neighbours =
				getCell(cells, r - 1, c - 1) + getCell(cells, r - 1, c) + getCell(cells, r - 1, c + 1) +
				getCell(cells, r, c - 1) 								+ getCell(cells, r, c + 1) +
				getCell(cells, r + 1, c - 1) + getCell(cells, r + 1, c) + getCell(cells, r + 1, c + 1);

			return (neighbours === 3 || (neighbours === 2 && isAlive)) ? 1 : 0;
		});
	});
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

function areEqualArrays(arr1, arr2){

	if (arr1.length !== arr2.length) return false;

	for (let i=0; i < arr1.length; i++) {
		for (let j=0; j < arr1[i].length; j++) {
			if (arr1[i][j] !== arr2[i][j]) return false;
		}
	}
	return true;
}

((desc) => {
	const startingCells =
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];
	const expected =
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with all dead cells the next generation should remain all dead');

((desc) => {
	const startingCells =
		[
			[0, 0, 0],
			[0, 1, 0],
			[0, 0, 0]
		];
	const expected =
		[
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with a single live cell the next generation should kill the lonely cell');

((desc) => {
	const startingCells =
		[
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 0]
		];
	const expected =
		[
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 0]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with two dead cells with three live neighbours the next generation should bring two cells to life');

((desc) => {
	const startingCells =
		[
			[1, 1, 1],
			[0, 0, 0],
			[0, 0, 0]
		];
	const expected =
		[
			[0, 1, 0],
			[0, 1, 0],
			[0, 0, 0]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with a live cell with two live neighbours the next generation should keep that cell alive');

((desc) => {
	const startingCells =
		[
			[1, 0, 1],
			[0, 1, 0],
			[1, 0, 1]
		];
	const expected =
		[
			[0, 1, 0],
			[1, 0, 1],
			[0, 1, 0]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with a live cell with more than three neighbours the next generation should kill that cell due to overcrowding');

((desc) => {
	const startingCells =
		[
			[1, 1, 1],
			[1, 1, 1],
			[1, 1, 1]
		];
	const expected =
		[
			[1, 0, 1],
			[0, 0, 0],
			[1, 0, 1]
		];
	const actual = nextGen(startingCells)

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given a 3x3 grid with all live cells the next generation should have a cross of dead cells');