
/**
 * @param  {Function} func
 */
function doTheThing(func, number) {

	return func 
		? func(number) 
		: number;
}

const zero = (func) => doTheThing(func, 0);
const one = (func) => doTheThing(func, 1);
const two = (func) => doTheThing(func, 2);
const three = (func) => doTheThing(func, 3);
const four = (func) => doTheThing(func, 4);
const five = (func) => doTheThing(func, 5);
const six = (func) => doTheThing(func, 6);
const seven = (func) => doTheThing(func, 7);
const eight = (func) => doTheThing(func, 8);
const nine = (func) => doTheThing(func, 9);

function plus(func) { 
	return (number) => number + func;
};

function minus(func) {
	return (number) => number - func;
};

function times(func) {
	return (number) => number * func;
};

function dividedBy(func) {
	return (number) => Math.floor(number / func);
};

module.exports = {
	zero,
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	plus,
	minus,
	times,
	dividedBy
};