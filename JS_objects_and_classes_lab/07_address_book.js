function solve(input) {
    const addressBook = {}

    input.forEach(entry => {
        const [ name, place ] = entry.split(':');
        addressBook[name] = place;
    });

    const addBookSortable = Object.entries(addressBook);

    addBookSortable.sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    })

    for (const [key, value] of addBookSortable) {
        console.log(`${key} -> ${value}`);
    }
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])