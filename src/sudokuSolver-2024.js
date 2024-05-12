//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict';

const sudoku = (grid) => {
  if (solveSudoku(grid)) {
    printGrid(grid);
  } else {
    console.log('No Solution exists 🤔');
  }
};

/**
 * Solves a Sudoku puzzle represented by a 9x9 grid.
 * @param {Array<Array<number>>} grid - The Sudoku grid to solve. Empty cells are represented by 0 values.
 * @returns {boolean} - True if the Sudoku puzzle is solved successfully, false otherwise.
 */
const solveSudoku = (grid) => {
  const emptyCell = findEmptyCell(grid);

  if (!emptyCell) {
    return true; // Puzzle Solved 🎉!
  }

  const row = emptyCell.row;
  const col = emptyCell.col;

  for (let num = 0; num <= 9; num++) {
    if (isValidMove(grid, row, col, num)) {
      grid[row][col] = num;

      if (solveSudoku(grid)) {
        return true; // Recurse
      }

      grid[row][col] = 0; // Backtrack
    }
  }
  return false; // No valid number for this cell
};

/**
 * Finds an empty cell in a grid and returns its coordinates.
 * @param {Array<Array<number>>} grid - The grid to search for empty cells.
 * @returns {{ row: number, col: number }} - The coordinates of the empty cell.
 */
const findEmptyCell = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const isEmptyCell = grid[row][col] === 0;

      if (isEmptyCell) {
        return { row: row, col: col };
      }
    }
  }
};

/**
 * Checks if placing a number in a specific cell of a Sudoku grid is a valid move.
 * @param {Array<Array<number>>} grid - The Sudoku grid to solve. Empty cells are represented by 0 values.
 * @param {number} row - The row index of the cell.
 * @param {number} col - The column index of the cell.
 * @param {number} num - The number to be placed in the cell.
 * @returns {boolean} - True if the move is valid, false otherwise.
 */
const isValidMove = (grid, row, col, num) => {
  const boxTopLeftRow = row - (row % 3);
  const boxTopLeftCol = col - (col % 3);

  return (
    !isUsedInRow(grid, row, num) &&
    !isUsedInCol(grid, col, num) &&
    !isUsedInBox(grid, boxTopLeftRow, boxTopLeftCol, num)
  );
};

/**
 * Checks if a number is already used in a specific row of a Sudoku grid.
 * @param {Array<Array<number>>} grid - The Sudoku grid to solve. Empty cells are represented by 0 values.
 * @param {number} row - The row index to check.
 * @param {number} num - The number to check for.
 * @returns {boolean} - True if the number is already used in the row, false otherwise.
 */
const isUsedInRow = (grid, row, num) => {
  for (let col = 0; col < 9; col++) {
    const usedInRow = grid[row][col] === num;

    if (usedInRow) {
      return true;
    }
  }
  return false;
};

/**
 * Checks if a number is already used in a specific column of a Sudoku grid.
 * @param {Array<Array<number>>} grid - The Sudoku grid to check.
 * @param {number} col - The column index to check.
 * @param {number} num - The number to check for.
 * @returns {boolean} - True if the number is already used in the column, false otherwise.
 */
const isUsedInCol = (grid, col, num) => {
  for (let row = 0; row < 9; row++) {
    const usedInCol = grid[row][col] === num;

    if (usedInCol) {
      return true;
    }
  }
  return false;
};

/**
 * Checks if a number is already used in the 3x3 box containing the specified cell of a Sudoku grid.
 * @param {Array<Array<number>>} grid - The Sudoku grid to check.
 * @param {number} startRow - The starting row index of the box.
 * @param {number} startCol - The starting column index of the box.
 * @param {number} num - The number to check for.
 * @returns {boolean} - True if the number is already used in the box, false otherwise.
 */
const isUsedInBox = (grid, startRow, startCol, num) => {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const usedInBox = grid[startRow + row][startCol + col] === num;

      if (usedInBox) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Prints the contents of a grid to the console.
 * @param {Array<Array<number>>} grid - The grid to print.
 * @returns {void}
 */
const printGrid = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      process.stdout.write(grid[row][col] + ' ');
    }
    process.stdout.write('\n');
  }
};

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

sudoku(puzzle);

module.exports = sudoku;
