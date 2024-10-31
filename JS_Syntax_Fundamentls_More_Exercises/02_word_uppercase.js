function solve(sentence) {
    const myRe = /\w+/g;
    let matches = sentence.match(myRe);
    let uppercaseArray = [];

    if ( matches ) {
        matches.forEach(element => {
            uppercaseArray.push(element.toUpperCase())
        });
    }

    console.log(uppercaseArray.join(', '))
}

solve('Hi, how are you?')
solve('Hello')