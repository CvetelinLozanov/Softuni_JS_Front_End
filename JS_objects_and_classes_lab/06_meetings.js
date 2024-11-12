function solve(requests) {
    const calendar = {}

    requests.forEach(req => {
        const [ day, name ] = req.split(' ');

        if ( calendar.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for ( const key in calendar ) {
        console.log(`${key} -> ${calendar[key]}`);
    }
}

solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);