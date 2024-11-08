function solve(char1, char2) {
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0)) + 1;
    let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    const chars = Array.from({length: end - start}, (_, i) => String.fromCharCode(start + i));

    console.log(chars.join(' '));
}

solve('a', 'd')
solve('#', ':')
solve('C', '#')
