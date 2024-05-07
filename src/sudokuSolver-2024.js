//https://www.codewars.com/kata/5296bc77afba8baa690002d7

'use strict';

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

const sudoku = (grid) => {
  //if (solveSudoku(grid)) {
  printGrid(grid);
  //} else {
  //console.log('No Solution exists 🤔');
  //}
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

  for (let num = 0; num < 9; num++) {
    if (isValidMove(row, col, num)) {
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
const findEmptyCell = (puzzle) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const isEmptyCell = puzzle[row][col] === 0;

      if (isEmptyCell) {
        return { row: row, col: col };
      }
    }
  }
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

sudoku(puzzle);

module.exports = sudoku;
