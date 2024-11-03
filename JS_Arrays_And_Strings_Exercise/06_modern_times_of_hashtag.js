function solve(text) {
    pattern = /#[a-zA-Z]+/g
    matches = text.match(pattern)
    matches.forEach(element => {
        console.log(element.slice(1))
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia') 