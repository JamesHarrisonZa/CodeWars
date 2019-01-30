//https://www.codewars.com/kata/credit-card-issuer-checking


var cardTypes = [
	{ 
		type: "AMEX", 
		prefix: ["34", "37"], 
		length: [15] 
	},
	{ 
		type: "Discover", 
		prefix: ["6011"], 
		length: [16] 
	},
	{ 
		type: "Mastercard", 
		prefix: ["51", "52", "53", "54", "55"], 
		length: [16] },
	{ 
		type: "VISA", 
		prefix: ["4"], 
		length: [13, 16] 
	},
];

function getIssuer(number){

	const cardNumber = new String(number);

	for (var i in cardTypes)
		if (cardTypes[i].prefix.some(p => { return cardNumber.startsWith(p) }) &&
			cardTypes[i].length.some(l => { return cardNumber.length == l }))
			return cardTypes[i].type
	return "Unknown"
}

module.exports = getIssuer;