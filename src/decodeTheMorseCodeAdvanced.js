// https://www.codewars.com/kata/54b72c16cd7f5154e9000457

'use strict';

const MORSE_CODE = {
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z'
};

const decodeMorse = (morseCode) => {

	const codedWords = morseCode.split('  ').filter(p => p.length > 0);
	const englishwords = codedWords.map(p => getEnglishWord(p));
	return englishwords.join(' ');
}

const getEnglishWord = (codedWord) => {

	const codedLeters = codedWord.split(' ').filter(p => p.length > 0);
	const englishLetters = codedLeters.map(p => MORSE_CODE[p]);
	return englishLetters.join('');
}

const decodeBits = (input) => {

	const truncatedInput = getTruncatedInput(input);
	const timeUnit = getSampleTimeUnitLength(truncatedInput);
	return getMorseCodeWords(truncatedInput, timeUnit);
}

const getTruncatedInput = (input) => {

	const truncatedInput = input.replace(/^0+|0+$/g, ''); //Removing leading and trailing zeros
	return truncatedInput;
}

const getSampleTimeUnitLength = (input) => {

	const lineDowns = input.split('0').filter(p => p.includes('1')).sort();
	const lineUps = input.split('1').filter(p => p.includes('0')).sort();
	const shortestLineDown = lineDowns[0] ? lineDowns[0].length : null;
	const shortestLineUp = lineUps[0] ? lineUps[0].length : null;

	if (shortestLineDown && !shortestLineUp) return shortestLineDown;
	else if (shortestLineUp && !shortestLineDown) return shortestLineUp;
	return Math.min(shortestLineDown, shortestLineUp);
}

const getMorseCodeWords = (input, timeUnit) => {

	const bitWordDelimiter = new String('0').repeat(timeUnit * 7);
	const bitWords = input.split(bitWordDelimiter).filter(p => p.length > 0);

	const morseCodeWords = bitWords.map(bitWord => {

		const bitLetterDelimiter = new String('0').repeat(timeUnit * 3);
		const bitLetters = bitWord.split(bitLetterDelimiter).filter(p => p.length > 0);
		return getMorseCodeLetters(bitLetters, timeUnit);
	});
	return morseCodeWords.join('   ');
}

const getMorseCodeLetters = (bitLetters, timeUnit) => {

	const morseCodeLetters = bitLetters.map(bitLetter => {

		const encodedCharDelimiter = new String('0').repeat(timeUnit);
		const encodedChars = bitLetter.split(encodedCharDelimiter).filter(p => p.length > 0);
		return getMorseCodeLetter(encodedChars, timeUnit);
	});
	return morseCodeLetters.join(' ');
}

const getMorseCodeLetter = (encodedChars, timeUnit) => {

	const morseCodeLetter = encodedChars.map(encodedChar => {
		if (encodedChar.length % (3 * timeUnit) === 0) return '-';
		return '.';
	});
	return morseCodeLetter.join('');
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

((desc) => {
	const expected = 'HEY JUDE';
	const actual = decodeMorse(decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'));

	console.log(`${actual === expected}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('should decode binary to alphabet');