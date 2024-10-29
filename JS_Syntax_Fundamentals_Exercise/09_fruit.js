function solve(fruit, weightInGrams, priceForKilo) {
    weightInKG = weightInGrams / 1000;
    neededMoney = weightInKG * priceForKilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}


solve('orange', 2500, 1.80)