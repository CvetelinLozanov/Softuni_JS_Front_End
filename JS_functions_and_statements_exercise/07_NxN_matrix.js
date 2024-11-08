function solve(n) {
    const result = ((n + ' ').repeat(n) + '\n').repeat(n)

    console.log(result);
}

solve(3)