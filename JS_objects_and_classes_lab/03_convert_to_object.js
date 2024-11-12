function solve(json) {
    const object = JSON.parse(json);
    const entries = Object.entries(object)


    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')