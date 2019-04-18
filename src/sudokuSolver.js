//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict'

const _idealRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {Array<Array<number>>} grid 
 */
function sudoku(grid) {

	const topLeftIndexMapping = {
		0: [0, 0],
		1: [0, 1],
		2: [0, 2],
		3: [1, 0],
		4: [1, 1],
		5: [1, 2],
		6: [2, 0],
		7: [2, 1],
		8: [2, 2]
	};
	const topLeftSquare = [
		grid[0][0], grid[0][1], grid[0][2],
		grid[1][0], grid[1][1], grid[1][2],
		grid[2][0], grid[2][1], grid[2][2]
	];

	const topMiddleMapping = {
		0: [0, 3],
		1: [0, 4],
		2: [0, 5],
		3: [1, 3],
		4: [1, 4],
		5: [1, 5],
		6: [2, 3],
		7: [2, 4],
		8: [2, 5]
	};
	const topMiddleSquare = [
		grid[0][3], grid[0][4], grid[0][5],
		grid[1][3], grid[1][4], grid[1][5],
		grid[2][3], grid[2][4], grid[2][5],
	];

	const topRightMapping = {
		0: [0, 6],
		1: [0, 7],
		2: [0, 8],
		3: [1, 6],
		4: [1, 7],
		5: [1, 8],
		6: [2, 6],
		7: [2, 7],
		8: [2, 8]
	};
	const topRightSquare = [
		grid[0][6], grid[0][7], grid[0][8],
		grid[1][6], grid[1][7], grid[1][8],
		grid[2][6], grid[2][7], grid[2][8],
	];

	const middleLeftMapping = {
		0: [3, 0],
		1: [3, 1],
		2: [3, 2],
		3: [4, 0],
		4: [4, 1],
		5: [4, 2],
		6: [5, 0],
		7: [5, 1],
		8: [5, 2]
	};
	const middleLeftSquare = [
		grid[3][0], grid[3][1], grid[3][2],
		grid[4][0], grid[4][1], grid[4][2],
		grid[5][0], grid[5][1], grid[5][2]
	];

	const middleMiddleMapping = {
		0: [3, 3],
		1: [3, 4],
		2: [3, 5],
		3: [4, 3],
		4: [4, 4],
		5: [4, 5],
		6: [5, 3],
		7: [5, 4],
		8: [5, 5]
	};
	const middleMiddleSquare = [
		grid[3][3], grid[3][4], grid[3][5],
		grid[4][3], grid[4][4], grid[4][5],
		grid[5][3], grid[5][4], grid[5][5],
	];

	const middleRightMapping = {
		0: [3, 6],
		1: [3, 7],
		2: [3, 8],
		3: [4, 6],
		4: [4, 7],
		5: [4, 8],
		6: [5, 6],
		7: [5, 7],
		8: [5, 8]
	};
	const middleRightSquare = [
		grid[3][6], grid[3][7], grid[3][8],
		grid[4][6], grid[4][7], grid[4][8],
		grid[5][6], grid[5][7], grid[5][8],
	];

	const bottomLeftMapping = {
		0: [6, 0],
		1: [6, 1],
		2: [6, 2],
		3: [7, 0],
		4: [7, 1],
		5: [7, 2],
		6: [8, 0],
		7: [8, 1],
		8: [8, 2]
	};
	const bottomLeftSquare = [
		grid[6][0], grid[6][1], grid[6][2],
		grid[7][0], grid[7][1], grid[7][2],
		grid[8][0], grid[8][1], grid[8][2]
	];

	const bottomMiddleMapping = {
		0: [6, 3],
		1: [6, 4],
		2: [6, 5],
		3: [7, 3],
		4: [7, 4],
		5: [7, 5],
		6: [8, 3],
		7: [8, 4],
		8: [8, 5]
	};
	const bottomMiddleSquare = [
		grid[6][3], grid[6][4], grid[6][5],
		grid[7][3], grid[7][4], grid[7][5],
		grid[8][3], grid[8][4], grid[8][5],
	];

	const bottomRightMapping = {
		0: [6, 6],
		1: [6, 7],
		2: [6, 8],
		3: [7, 6],
		4: [7, 7],
		5: [7, 8],
		6: [8, 6],
		7: [8, 7],
		8: [8, 8]
	};
	const bottomRightSquare = [
		grid[6][6], grid[6][7], grid[6][8],
		grid[7][6], grid[7][7], grid[7][8],
		grid[8][6], grid[8][7], grid[8][8],
	];

	const squares = [
		topLeftSquare, topMiddleSquare, topRightSquare,
		middleLeftSquare, middleMiddleSquare, middleRightSquare,
		bottomLeftSquare, bottomMiddleSquare, bottomRightSquare
	];

	const mappings = [
		topLeftIndexMapping, topMiddleMapping, topRightMapping,
		middleLeftMapping, middleMiddleMapping, middleRightMapping,
		bottomLeftMapping, bottomMiddleMapping, bottomRightMapping
	];

	while (gridContainsZero(grid)){
		console.log('looping');
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
		for (let i = 0; i < 9; i++) {
			console.log(`Checking Squares: ${i}`);
			const missingOne = GetMissingOne(squares[i]);
			if (missingOne) {
				//console.log(`topLeftIndexMapping: `, topLeftIndexMapping);
				const mapping = mappings[i];
				const gridIndex = mapping[missingOne.index];
				//console.log(`gridIndex: ${gridIndex}, missingValue: ${missingOne.value}`);
				grid[gridIndex[0]][gridIndex[1]] = missingOne.value;
			}
		}
	}
	return grid;
}

/**
 * @param {Array<Array<number>>} grid
 */
function gridContainsZero(grid) {

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 0) {
				return true;
			}
		}
	}
	return false;
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