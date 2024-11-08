function solve(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    let result = sum(firstNum, secondNum)
    result = subtract(result, thirdNum)

    console.log(result)
}

solve(23, 6, 10)