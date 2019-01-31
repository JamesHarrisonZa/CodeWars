https://www.codewars.com/kata/form-the-largest/train/javascript

'use strict'

function formTheLargest(number){
	
	return [...new String(number)]
		.map(x => new Number(x))
		.sort((a, b) => b - a)
		.join('');
};

module.exports = formTheLargest;