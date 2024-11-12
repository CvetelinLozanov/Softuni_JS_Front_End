function solve(name, lastName, hairColor) {
    const object = {name, lastName, hairColor}
    console.log(JSON.stringify(object))
}

solve('George', 'Jones', 'Brown')