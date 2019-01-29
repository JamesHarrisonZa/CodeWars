//https://www.codewars.com/kata/return-the-missing-element/train/javascript

function getMissingElement(superImportantArray) {

	// (O)2n Solution ? 

	// const numbersHashMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((hashMap, number) => {
	// 	hashMap[number] = number;
	// 	return hashMap;
	// }, {});
	const numbersHashMap = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

	superImportantArray.forEach(number => {
		delete numbersHashMap[number];
	});
	const filteredArray = Object.keys(numbersHashMap); // (O)2n + 1?
	return filteredArray[0]/1; //Weird I have to convert from string to number here?
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
