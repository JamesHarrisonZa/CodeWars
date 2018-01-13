/**
 * @param {string} wordToMerge 
 * @param {string} word1
 * @param {string} word2
 */
function isMerge(wordToMerge, word1, word2) {
	
	let word1Index = 0;
	let word2Index = 0;

	for (let i = 0; i < wordToMerge.length; i++) {
		if (word1[word1Index] === wordToMerge[i]) {
			word1Index++;
			continue;
		}
		else if (word2[word2Index] === wordToMerge[i]) {
			word2Index++;
			continue;
		}
		else {
			return false;
		}
	}

	if (word1Index === word1.length && word2Index === word2.length) {
		return true;
	}
	return false;
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = true;
	const actual = isMerge('codewars', 'code', 'wars');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given code + wars should merge to codewars');

((desc) => {
	const expected = true;
	const actual = isMerge('codewars', 'cdw', 'oears');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given cdw + oears should merge to codewars');

((desc) => {
	const expected = false;
	const actual = isMerge('codewars', 'cod', 'wars');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given missing letter should return false');

((desc) => {
	const expected = false;
	const actual = isMerge('', 'no', 'siree');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given blank wordToMerge should return false');

((desc) => {
	const expected = false;
	const actual = isMerge('codewars', 'code', 'warss');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Given extra characters should return false');

// ((desc) => {
// 	const expected = true;
// 	const actual = isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am');

// 	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
// })('Can handle bananas');