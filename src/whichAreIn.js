//https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(searchTerms, wordsToCheck){
	return searchTerms
		.filter(searchTerm => wordsToCheck
			.filter(word => word.includes(searchTerm))
			.length > 0)
		.sort();
}

module.exports = inArray;