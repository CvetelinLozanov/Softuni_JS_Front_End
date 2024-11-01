function solve(text, searchedWord) {
    console.log(text.replaceAll(searchedWord, '*'.repeat(searchedWord.length)))
}


solve('A small sentence with some words', 'small')