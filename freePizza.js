// https://www.codewars.com/kata/595910299197d929a10005ae

'use strict';

/**
 * @param {Array<String>} customers
 * @param {number} minOrders
 * @param {number} minPrice
 */
const pizzaRewards = (customers, minOrders, minPrice) => {

	return Object.keys(customers)
		.filter(key => {
			return customers[key]
				.filter(order => { return order >= minPrice })
				.length >= minOrders;
		});
}

// --------------------------------------------------------------------------------------------------------------
// TESTS
// --------------------------------------------------------------------------------------------------------------

function areEqualArrays(arr1, arr2) {

	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

((desc) => {
	const minOrders = 5
	const minPrice = 20
	const customers = {
		'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
		'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
	}

	const expected = ['Jane Doe'];
	const actual = pizzaRewards(customers, minOrders, minPrice);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Jane Doe should get FREE PIZZA!!');

((desc) => {
	const minOrders = 2
	const minPrice = 50
	const customers = {
		'Joey Bonzo': [22, 67, 53, 29], // Has two orders above 50$, which means FREE PIZZA!
		'Jennifer Bonzo': [51, 19] // Only has one order above 50$, so no pizza
	}

	const expected = ['Joey Bonzo'];
	const actual = pizzaRewards(customers, minOrders, minPrice);

	console.log(`${areEqualArrays(expected, actual)}. ${desc}. expected: ${expected}, actual: ${actual}`);
})('Joey Bonzo should get FREE PIZZA!!');