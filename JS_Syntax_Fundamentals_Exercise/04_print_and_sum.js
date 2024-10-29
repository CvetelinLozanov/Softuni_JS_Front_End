function solve(startNum, endNum) {
    let result = 0;
    let numbers = [];

    for (let i=startNum; i <= endNum; i++) {
        numbers.push(i);
        result += i;
    }

    console.log(numbers.join(" "))
    console.log(`Sum: ${result}`)
}

solve(5, 10)