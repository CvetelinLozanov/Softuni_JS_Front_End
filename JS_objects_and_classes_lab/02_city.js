function solve(object) {
    const entries = Object.entries(object);

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}


solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})