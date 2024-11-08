function solve(numbers) {
    const digits = Math.abs(numbers).toString().split('').map(Number);

    let oddSum = digits.filter(d => d % 2 !== 0).reduce((sum, d) => sum += d, 0);
    let evenSum = digits.filter(d => d % 2 === 0).reduce((sum, d) => sum += d, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435)
solve(3495892137259234)