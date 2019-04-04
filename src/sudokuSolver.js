//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict'

const _idealRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {Array<Array<number>>} grid 
 */
function sudoku(grid) {

	//Check horizontal rows
	for (let r = 0; r < grid.length; r++) {
		const missingOne = GetMissingOne(grid[r]); 
		if (missingOne) {
			grid[r][missingOne.index] = missingOne.value;
		}
	}

	//Check vertical columns
	for (let c = 0; c < grid[0].length; c++) {
		let column = [];

		for (let r = 0; r < grid.length; r++) {
			const columnValue = grid[r][c];
			column.push(columnValue);
		}
		const missingOne = GetMissingOne(column);
		if (missingOne) {
			grid[missingOne.index][c] = missingOne.value;
		}
	}

	//Check 3x3 squares
	//TopLeftSquare
	const topLeftIndexMapping = { 
		0: [0,0], 
		1: [0,1], 
		2: [0,2], 
		3: [1,0], 
		4: [1,1], 
		5: [1,2], 
		6: [2,0], 
		7: [2,1], 
		8: [2,2]
	};
	const topLeftSquare = [grid[0][0], grid[0][1], grid[0][2], grid[1][0], grid[1][1], grid[1][2], grid[2][0], grid[2][1], grid[2][2]];
	//console.log(`topLeftSquare: `, topLeftSquare);
	const missingOne = GetMissingOne(topLeftSquare);
	//console.log(`missingOne:`, missingOne);
	if (missingOne) {
		//console.log(`topLeftIndexMapping: `, topLeftIndexMapping);
		const gridIndex = topLeftIndexMapping[missingOne.index];
		//console.log(`gridIndex: ${gridIndex}`);
		grid[gridIndex[0]][gridIndex[1]] = missingOne.value;
	}

	return grid;
}

/**
 * @param {Array<number>} row 
 */
function GetMissingOne(row) {

	const missingNumbers = _idealRow.filter(x => !row.includes(x));

	if (missingNumbers.length === 1) {
		const indexToReplace = row.indexOf(0);
		return { 
			index: indexToReplace,
			value: missingNumbers[0]
		}
	}
}

module.exports = sudoku;