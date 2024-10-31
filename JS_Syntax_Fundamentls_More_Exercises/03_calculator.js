function solve(firstNum, operator, secondNum) {
   switch (operator) {
    case "+":
        result = firstNum + secondNum;
        console.log(result.toFixed(2));
        break;
    case "-":
        result = firstNum - secondNum;
        console.log(result.toFixed(2));
        break;
   case "/":
        result = firstNum / secondNum;
        console.log(result.toFixed(2));
        break;
    case "*":
        result = firstNum * secondNum;
        console.log(result.toFixed(2));
        break;
    } 
}


solve(5, '+', 10)
solve(25.5, '-', 3)