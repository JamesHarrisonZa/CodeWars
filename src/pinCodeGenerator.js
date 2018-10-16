
class PinCodeGenerator {

	constructor(randomNumberProvider) {
		this._randomNumberProvider = randomNumberProvider;
	}

	getBatch() {

		const pinCodes = new Set();

		while (pinCodes.size < 1000) {

			const randomPinCode = getRandomPinCode(this._randomNumberProvider);

			if (isUnique(pinCodes, randomPinCode) &&
				hasNonConsecutiveDuplicateDigits(randomPinCode) &&
				hasNonIncrementalDigits(randomPinCode))
				pinCodes.add(randomPinCode);
		}
		return pinCodes;
	}
}

function getRandomPinCode(randomNumberProvider) {

	const randomNumber = randomNumberProvider.random()
	return new String(randomNumber).substr(2, 4);
}

function isUnique(pinCodes, randomPinCode) {

	return pinCodes[randomPinCode] === undefined;
}

function hasNonConsecutiveDuplicateDigits(pinCode) {
	return pinCode
		.split("")
		.every((digit, i, arr) => arr[i + 1] !== digit);
}

function hasNonIncrementalDigits(pinCode) {

	function areIncremental(firstDigit, secondDigit, thirdDigit) {
		return thirdDigit === secondDigit + 1 && secondDigit === firstDigit + 1;
	}

	const arr = pinCode.split("").map(p => Number(p))

	return !(areIncremental(arr[0], arr[1], arr[2]) && areIncremental(arr[1], arr[2], arr[3]));
}

module.exports = PinCodeGenerator;