function solve(input) {
    const personalInfo = {};
    input.forEach(name => {
        personalInfo[name] = name.length;    
    });

    for (const key in personalInfo) {
        console.log(`Name: ${key} -- Personal Number: ${personalInfo[key]}`)
    }
}

solve(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])