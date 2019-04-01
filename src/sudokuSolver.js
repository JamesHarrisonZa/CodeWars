//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict'

const _idealRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {Array<Array<number>>} grid 
 */
function sudoku(grid) {

	//Check horizontal rows
	for (let i = 0; i < grid.length; i++) {

		const updatedRow = GetUpdatedRow(grid[i]);
		grid[i] = updatedRow;
	}

	return grid;
}

/**
 * @param {Array<number>} row 
 */
function GetUpdatedRow(row) {

	const missingNumbers = _idealRow.filter(x => !row.includes(x));

	if (missingNumbers.length === 1) {
		const indexToReplace = row.indexOf(0);
		row[indexToReplace] = missingNumbers[0];
	}
	return row;
}

module.exports = sudoku;