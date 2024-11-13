function solve(input) {
    // const data = {};
    // input.forEach(el => {
    //     const test  = JSON.parse(el);   
    //     console.log(Object.keys(test)[0])    
    // })


    const data = input.reduce((data, text) => {
        const parsed = JSON.parse(text);
        const key = Object.keys(parsed)[0];
        data[key] = parsed[key];
        return data;
    }, {})

    
    Object.entries(data)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([ prod, desc ]) => console.log(`Term: ${prod} => Definition: ${desc}`))

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])