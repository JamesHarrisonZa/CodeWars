https://www.codewars.com/kata/form-the-largest/train/javascript

'use strict'

function formTheLargest(number){
	
	const numberArray = [...new String(number)]
		.map(x => new Number(x));
	const sortedArray = numberArray.sort((a, b) => b-a);
	return new Number(sortedArray.join(''));
};

module.exports = formTheLargest;