function pizzaRewards(customers, minOrders, minPrice) {

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

function areEqualArrays(arr1, arr2){

	if (arr1.length !== arr2.length) {
		return false;
	}

	for (let i=0; i < arr1.length; i++) {
		if(arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

const minOrders = 5
const minPrice = 20
const customers = {
	'John Doe': [22, 30, 11, 17, 15, 52, 27, 12], // Only has three orders above 20$, so no pizza
	'Jane Doe': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45] // Has six orders above 20$, which means FREE PIZZA!
}

const expected = ['Jane Doe'];
const actual = pizzaRewards(customers, minOrders, minPrice);

console.log(areEqualArrays(expected, actual));