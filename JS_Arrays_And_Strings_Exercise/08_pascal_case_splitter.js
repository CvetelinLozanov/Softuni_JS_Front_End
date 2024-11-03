function solve(text) {
    const result = [];
    let startIndex = 0;
    let endIndex = 0;
    for (let i=1; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            result.push(text.slice(startIndex, i));
            startIndex = i;
        }
    }

    result.push(text.slice(startIndex, text.length))

    console.log(result.join(', '))
}


solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')