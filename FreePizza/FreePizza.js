function pizzaRewards(customers, minOrders, minPrice) {

	return Object.keys(customers)
		.filter(key => {
			return customers[key]
				.filter(order => { return order >= minPrice })
				.length >= minOrders;
		});
}