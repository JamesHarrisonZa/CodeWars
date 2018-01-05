function nextGen(cells) {

	var updatedCells = [...new Array(cells.length)].map(_ => [...new Array(cells[0].length)]);

	for (let y = 0; y < cells.length; y++) {
		for (let x = 0; x < cells[0].length; x++) {

			const currentCell = cells[y][x];
			const neighbours = GetCurrentCellNeighbours(cells, x, y);
			const activeNeighbourCount = neighbours.filter((x) => { return x === 1 }).length;

			//Any live cell with fewer than two live neighbours dies (underpopulation or exposure).
			if (currentCell === 1 && activeNeighbourCount < 2) {
				updatedCells[y][x] = 0;
			}

			//Any live cell with more than three live neighbours dies (overpopulation or overcrowding).
			else if (currentCell === 1 && activeNeighbourCount > 3) {
				updatedCells[y][x] = 0;
			}

			//Any dead cell with exactly three live neighbours will come to life.
			else if (currentCell === 0 && activeNeighbourCount == 3) {

				updatedCells[y][x] = 1;
			}

			//Any live cell with two or three live neighbours lives, unchanged, to the next generation.
			else {
				updatedCells[y][x] = currentCell;
			}

		}
	}
	return updatedCells;
}

function GetCurrentCellNeighbours(cells, x, y) {
	var cellNeighbours = new Array();
	var cellsHeight = cells.length;
	var cellsWidth = cells[0].length;

	if (y - 1 >= 0) {
		if (x - 1 >= 0) {
			//Top Left
			cellNeighbours.push(cells[y - 1][x - 1]);
		}

		//Top Centre
		cellNeighbours.push(cells[y - 1][x]);

		//Top Right
		if (x + 1 < cellsWidth) {
			cellNeighbours.push(cells[y - 1][x + 1]);
		}
	}

	if (x - 1 >= 0) {
		//Centre Left
		cellNeighbours.push(cells[y][x - 1]);
	}

	if (x + 1 < cellsWidth) {
		//Centre Right
		cellNeighbours.push(cells[y][x + 1]);
	}

	if (y + 1 < cellsHeight) {
		if (x - 1 >= 0) {
			//Bottom Left
			cellNeighbours.push(cells[y + 1][x - 1]);
		}

		//Bottom Centre
		cellNeighbours.push(cells[y + 1][x]);

		if (x + 1 < cellsWidth) {
			//Bottom Right
			cellNeighbours.push(cells[y + 1][x + 1]);
		}
	}

	return cellNeighbours;
}