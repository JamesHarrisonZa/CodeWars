const _punctuation = ['!', '?', '.', ',' ];

/**
 * @param {string} sentence
 */
function pigIt(sentence) {

	return sentence
		.split(' ')
		.map(pigLatinify)
		.join(' ');
}

function pigLatinify(characters) {
	if (isPunctuation(characters)){
		return characters;
	}
	return `${characters.substring(1)}${characters[0]}ay`
}

function isPunctuation(word) {
	return _punctuation.includes(word);
}

module.exports = pigIt;
