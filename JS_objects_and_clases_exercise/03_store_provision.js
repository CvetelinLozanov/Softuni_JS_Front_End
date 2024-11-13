function solve(products, orders) {
    const stocks = {}

    for (let i = 0; i < products.length; i += 2) {
        const product = products[i];
        const quantity = Number(products[i + 1]);

        stocks[product] = quantity;
    }

    for (let i = 0; i < orders.length; i += 2) {
        const product = orders[i];
        const quantity = Number(orders[i + 1]);
        if ( ! stocks.hasOwnProperty(product) ) stocks[product] = 0;
        stocks[product] += quantity;
    }

    for (const stock in stocks) {
        console.log(`${stock} -> ${stocks[stock]}`);
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);