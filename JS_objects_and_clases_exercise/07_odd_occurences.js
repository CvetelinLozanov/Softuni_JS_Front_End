function solve(elements) {
    const words = elements.toLowerCase().split(' ');
    const matched = words.reduce((matched, word) => ({...matched, [word]: 0}), {});

    words.forEach(word => {
        if ( matched.hasOwnProperty(word) ) matched[word] += 1;
    });

    let result = '';

    Object.entries(matched).filter(el => el[1] % 2 != 0).forEach(([word, count]) => result += `${word} `)
    console.log(result.trim())
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');