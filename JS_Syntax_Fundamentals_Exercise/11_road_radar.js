function solve(speed, zone) {
    let limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };

    let status;

    if (speed <= limits[zone]) {
        console.log(`Driving ${speed} km/h in a ${limits[zone]} zone`)
    } else {
        speedDiff = speed - limits[zone];
        if ( speedDiff <= 20 ) {
            status = "speeding";
        } else if ( speedDiff > 20 && speedDiff <= 40 ) {
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${limits[zone]} - ${status}`)
    }
}


solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')
solve(200, 'motorway')