function solve(words) {
    const searchedWords = words.shift().split(' ');
    const wordsMatched = searchedWords.reduce((matched, word) => ({...matched, [word]: 0}), {});

    words.forEach(word => {
        if ( wordsMatched.hasOwnProperty(word) ) wordsMatched[word] += 1;
    });

    Object.entries(wordsMatched)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, count]) => {
        console.log(`${word} - ${count}`)
    });
}

solve(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])