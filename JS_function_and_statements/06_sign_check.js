function solve(numOne, numTwo, numThree) {
    let counter = 0;

    if ( numOne < 0 ) {
        counter++;
    } if (numTwo < 0) {
        counter++;
    } if ( numThree < 0 ) {
        counter++;
    }

    console.log(counter % 2 === 0 ? 'Positive' : 'Negative' )
}

solve(-5, -12, -15)