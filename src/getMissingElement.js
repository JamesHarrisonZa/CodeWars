//https://www.codewars.com/kata/return-the-missing-element/train/javascript

function getMissingElement(superImportantArray){

	// (O)2n Solution ? 
	const numbersSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
	superImportantArray.forEach(number => {
		numbersSet.delete(number); //Confirm this is (O)1
	});
	numbersSet.keys().next().value
	var filteredArray = Array.from(numbersSet);
	return filteredArray[0];
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 8;
	const actual = getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})("getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]) === 8");

((desc) => {
	const expected = 3;
	const actual = getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]);

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})("getMissingElement( [9,2,4,5,7,0,8,6,1]) === 3");
