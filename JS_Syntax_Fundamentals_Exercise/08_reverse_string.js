function solve(...args) {

    result = []
    for (let i=args.length - 1; i >= 0; i--) {
        result.push(args[i])
    }

    console.log(result.join(" "))
}


solve('a', 'b', 'c')