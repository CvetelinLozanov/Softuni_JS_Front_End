function solve(groupOfPeople, typeOfGroup, dayOfWeek) {
    let priceForNight;

    if ( dayOfWeek === "Friday") {
        if ( typeOfGroup === "Students" ) {
            priceForNight = 8.45;
        } else if ( typeOfGroup === "Business" ) {
            priceForNight = 10.90;
        } else if ( typeOfGroup === "Regular" ) {
            priceForNight = 15;
        }
    } else if ( dayOfWeek === "Saturday") {
        if ( typeOfGroup === "Students" ) {
            priceForNight = 9.80;
        } else if ( typeOfGroup === "Business" ) {
            priceForNight = 15.60;
        } else if ( typeOfGroup === "Regular" ) {
            priceForNight = 20;
        }
    } else if ( dayOfWeek === "Sunday") {
        if ( typeOfGroup === "Students" ) {
            priceForNight = 10.46;
        } else if ( typeOfGroup === "Business" ) {
            priceForNight = 16;
        } else if ( typeOfGroup === "Regular" ) {
            priceForNight = 22.50;
        }
    } 

    totalPrice = groupOfPeople * priceForNight

    if ( typeOfGroup === "Students" && groupOfPeople >= 30 ) {
        totalPrice *= 0.85
    } else if ( typeOfGroup === "Business" && groupOfPeople >= 100 ) {
        totalPrice -= 10 * priceForNight;
    } else if ( typeOfGroup === "Regular" && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}


solve(30, "Students", "Sunday");
solve(20, "Regular", "Saturday");