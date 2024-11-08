function solve(names) {
    for (const [index, element] of names.sort((a, b) => a.localeCompare(b)).entries()) {
        console.log(`${index + 1}.${element}`)
      }
}

solve(['dsada']);