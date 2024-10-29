function solve(number) {
    let isEqual = true;
    let sum = 0;

    numToString = number.toString();
    numToCheck = numToString[0];
    for (let i=1; i < numToString.length; i++) {
        if (numToCheck !== numToString[i]) {
            isEqual = false;
            break;
        }
    }
    
    console.log(isEqual)

    while (number) {
        sum += number % 10;        
        number = Math.floor(number/ 10)    
    }

    console.log(sum)
}


// solve(2222222)
solve(1234)