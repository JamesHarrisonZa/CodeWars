/**
 * @param {string} sentence
 */
function pigIt(sentence) {

	return sentence
		.split(' ')
		.map(word => `${word.substring(1)}${word[0]}ay`)
		.join(' ');
}

module.exports = pigIt;