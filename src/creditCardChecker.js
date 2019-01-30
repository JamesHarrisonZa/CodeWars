//https://www.codewars.com/kata/credit-card-issuer-checking


function getIssuer(number) {

	const cardNumber = new String(number);

	if (cardNumber.startsWith('34') || cardNumber.startsWith('37')){

		if (cardNumber.length === 15)
			return 'AMEX';
		return 'Unknown';
	}

	if (cardNumber.startsWith('6011')) {
		if (cardNumber.length === 16)
			return 'Discover';
		return 'Unknown';
	}

	if (cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')){
		if (cardNumber.length === 16)
			return 'Mastercard';
		return 'Unknown';
	}

	if (cardNumber.startsWith('4')) {
		if (cardNumber.length === 13 || cardNumber.length === 16)
			return 'VISA';
		return 'Unknown';
	}

	return 'Unknown';
};

module.exports = getIssuer;