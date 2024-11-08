function solve(password) {
    const patternFullPass = new RegExp(/^(?=.*\d.*\d)[a-zA-Z\d]{6,10}$/);

    const patternLettersAndDigits = new RegExp(/^[a-zA-Z0-9]+$/);
    const atLeastTwoDigits = new RegExp(/(.*\d){2}/);

    const checkLength = password.length < 6 || password.length > 10;
    const checkContents = ! patternLettersAndDigits.test(password);
    const checkNumCount = ! atLeastTwoDigits.test(password);

    if ( patternFullPass.test(password) ) {
        console.log("Password is valid");
    } else {
        if ( checkLength ) console.log("Password must be between 6 and 10 characters");
        if ( checkContents ) console.log("Password must consist only of letters and digits");
        if ( checkNumCount ) console.log("Password must have at least 2 digits");
    }
}

solve('logIn');
solve('MyPass123');
solve('Pa$s$s');