/**
 * @param {string} wordToMerge 
 * @param {string} word1
 * @param {string} word2
 */
function isMerge(wordToMerge, word1, word2) {
	
	if (wordToMerge.length !== word1.length + word2.length) {
		return false;
	}
	else if (wordToMerge.length === 0) {
		return true;
	}
	return (word1[0] === wordToMerge[0] && isMerge(wordToMerge.slice(1), word1.slice(1), word2)) ||
		(word2[0] === wordToMerge[0] && isMerge(wordToMerge.slice(1), word1, word2.slice(1)));
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

((desc) => {
	const expected = true;
	const actual = isMerge('Bananas from Bahamas', 'Bahas', 'Bananas from am');

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Can handle bananas');