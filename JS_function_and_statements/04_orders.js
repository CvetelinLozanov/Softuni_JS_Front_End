function solve(product, quantity) {
    const products = {
        'coffee': 1.50,
        'water': 1,
        'coke': 1.40,
        'snacks': 2
    }

    console.log((products[product] * quantity).toFixed(2));
}

solve("coffee", 2)