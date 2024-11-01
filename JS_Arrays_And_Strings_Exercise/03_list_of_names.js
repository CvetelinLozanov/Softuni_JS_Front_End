function solve(names) {
    for (const [index, element] of names.sort().entries()) {
        console.log(`${index + 1}.${element}`)
      }
}

solve(['dsada']);