//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict'

const _idealNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {Array<Array<number>>} grid 
 */
function sudoku(grid) {

	//Check horizontal rows
	for (let i = 0; i < grid.length; i++) {
		const missingOne = GetMissingOne(grid[i]); 
		if (missingOne) {
			grid[i][missingOne.index] = missingOne.value;
		}
	}

	return grid;
}

/**
 * @param {Array<number>} row 
 */
function GetMissingOne(row) {

	const missingNumbers = _idealNumbers.filter(x => !row.includes(x));

	if (missingNumbers.length === 1) {
		const indexToReplace = row.indexOf(0);
		return { 
			index: indexToReplace,
			value: missingNumbers[0]
		}
	}
}

module.exports = sudoku;