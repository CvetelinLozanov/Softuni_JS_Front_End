function solve(firstNum, secondNum, operation) {
    const operations = {
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b
    }

    console.log(operations[operation](firstNum, secondNum))
}


solve(5, 5 ,'multiply')
solve(40, 8, 'divide')
solve(12, 19, 'add')
solve(50, 13, 'subtract')