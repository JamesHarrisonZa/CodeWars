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

const sudoku = (puzzle) => {
  if (solveSudoku(puzzle)) {
    printGrid();
  } else {
    console.log('No Solution exists 🤔');
  }
};

const solveSudoku = (puzzle) => {
  const emptyCell = findEmptyCell(puzzle);

  console.log({ ...emptyCell });
};

/**
 * Finds an empty cell in a grid and returns its coordinates.
 * @param {Array<Array<number>>} grid - The grid to search for empty cells.
 * @returns {{ row: number, col: number }} - The coordinates of the empty cell.
 */
const findEmptyCell = (puzzle) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle[row][col] === 0) {
        return { row: row, col: col };
      }
    }
  }
};

sudoku(puzzle);

module.exports = sudoku;
