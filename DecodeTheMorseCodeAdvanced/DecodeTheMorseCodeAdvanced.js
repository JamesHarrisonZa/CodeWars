function decodeBits(input) {

	const truncatedInput = getTruncatedInput(input);
	const timeUnit = getSampleTimeUnitLength(truncatedInput);
	return getMorseCodeWords(truncatedInput, timeUnit);
}

function getTruncatedInput(input) {

	const truncatedInput = input.replace(/^0+|0+$/g, ""); //Removing leading and trailing zeros
	return truncatedInput;
}

function getSampleTimeUnitLength(input) {

	const lineDowns = input.split("0").filter(p => { return p.includes("1") }).sort();
	const lineUps = input.split("1").filter(p => { return p.includes("0") }).sort();
	const shortestLineDown = lineDowns[0] ? lineDowns[0].length : null;
	const shortestLineUp = lineUps[0] ? lineUps[0].length : null;

	if (shortestLineDown && !shortestLineUp) {
		return shortestLineDown;
	} else if (shortestLineUp && !shortestLineDown) {
		return shortestLineUp;
	}
	return Math.min(shortestLineDown, shortestLineUp);
}

function getMorseCodeWords(input, timeUnit) {

	const bitWordDelimiter = new String("0").repeat(timeUnit * 7);
	const bitWords = input.split(bitWordDelimiter).filter(p => { return p.length > 0; });

	const morseCodeWords = bitWords.map(bitWord => {

		const bitLetterDelimiter = new String("0").repeat(timeUnit * 3);
		const bitLetters = bitWord.split(bitLetterDelimiter).filter(p => { return p.length > 0 });
		return getMorseCodeLetters(bitLetters, timeUnit);
	});
	return morseCodeWords.join("   ");
}

function getMorseCodeLetters(bitLetters, timeUnit) {

	const morseCodeLetters = bitLetters.map(bitLetter => {

		const encodedCharDelimiter = new String("0").repeat(timeUnit);
		const encodedChars = bitLetter.split(encodedCharDelimiter).filter(p => { return p.length > 0; });
		return getMorseCodeLetter(encodedChars, timeUnit);
	});
	return morseCodeLetters.join(" ");
}

function getMorseCodeLetter(encodedChars, timeUnit) {

	const morseCodeLetter = encodedChars.map(encodedChar => {
		if (encodedChar.length % (3 * timeUnit) === 0) {
			return '-';
		}
		return '.';
	});
	return morseCodeLetter.join("");
}

function decodeMorse(morseCode) {

	const codedWords = morseCode.split("  ").filter(p => { return p.length > 0 });
	const englishwords = codedWords.map(p => getEnglishWord(p));
	return englishwords.join(" ");
}

function getEnglishWord(codedWord) {

	const codedLeters = codedWord.split(" ").filter(p => { return p.length > 0 });
	const englishLetters = codedLeters.map(p => { return MORSE_CODE[p] });
	return englishLetters.join("");
}