function solve(n, arr) {
    const newArr = arr.slice(0, n)
    console.log(newArr.reverse().join(" "))
}


solve(3, [10, 20, 30, 40, 50])