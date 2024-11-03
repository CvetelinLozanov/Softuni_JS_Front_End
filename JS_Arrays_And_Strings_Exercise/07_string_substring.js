function solve(searchedWord, text) {
    // pattern = new RegExp(searchedWord, 'i')
    // matches = text.search(pattern) || []
    // if ( matches.length === 0 ) {
    //     console.log(searchedWord)
    // } else {
    //     console.log(`${searchedWord} not found!`)
    // }

    text = text.split(' ');
    isFound = false;
    for (let i=0; i < text.length; i++) {
        if ( text[i].toLowerCase() === searchedWord.toLowerCase()) {
            console.log(searchedWord)
            isFound = true;
        }
    }

    if (!isFound) console.log(`${searchedWord} not found!`)
}


solve('javascript', 'JavaScript is the best programming language')

solve('python', 'JavaScript is the best programming language')