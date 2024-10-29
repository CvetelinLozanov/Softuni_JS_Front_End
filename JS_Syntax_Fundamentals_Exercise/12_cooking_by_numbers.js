function solve(...args) {
    let num = Number(args[0])

    for (let i=1; i < args.length; i++) {
        if ( args[i] === "chop" ) {
            num /= 2;
        } else if ( args[i] === "dice" ) {
            num = Math.sqrt(num);
        } else if ( args[i] === "spice" ) {
            num += 1;
        } else if ( args[i] === "bake" ) {
            num *= 3;
        } else if ( args[i] === "fillet") {
            num *= 0.8;
        }
        console.log(num);
    }
}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')