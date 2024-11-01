function solve(arr) {
    const lastNum = arr.pop();
    const firstNum = arr.shift();
    console.log(lastNum + firstNum)
}


solve([20, 30, 40])