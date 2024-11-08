function factorial(num1, num2) {
    const calculateFactoriel = (num) => {
            if (num <= 1) {
            return 1;
        }
        return num * calculateFactoriel(num - 1)
    }

    const fact1 = calculateFactoriel(num1);
    const fact2 = calculateFactoriel(num2);

    const result = fact1 / fact2;

    console.log( result.toFixed(2));
}


factorial(5, 2)