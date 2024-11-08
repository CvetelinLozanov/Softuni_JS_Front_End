function solve(percentage) {
    const barLength = 10;
    const barsFilled = Math.round( percentage / barLength );
    const barsEmpty = barLength - barsFilled;

    const before = ( percentage < 100 ) ? `${percentage}% ` : '100% Complete!\n'
    const progressBar = `[${'%'.repeat(barsFilled)}${'.'.repeat(barsEmpty)}]\n`
    const after = ( percentage < 100 ) ? 'Still loading...' : '';

    console.log(before + progressBar + after);
}


solve(30)
solve(50)
solve(100)