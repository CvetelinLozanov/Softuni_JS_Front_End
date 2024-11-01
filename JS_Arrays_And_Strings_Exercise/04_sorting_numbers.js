function solve(numbers) {
    const resultArr = [];
    let i = 0;
    numbers.sort(function(a, b) {
        return a - b;
      })

    while ( numbers.length > 0 ) {
        if ( i % 2 === 0 ) {
            resultArr.push(numbers.shift());
        } else {
            resultArr.push(numbers.pop());
        }
        i++;
    }

    return resultArr;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))