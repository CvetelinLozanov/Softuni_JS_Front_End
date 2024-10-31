function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    for ( let i=1; i <= lostFights; i++) {
        if (i % 2 === 0 ) {
            helmetCounter++;
        } if ( i % 3 === 0 ) {
            swordCounter++;
        } if ( i % 2 === 0 && i % 3 === 0 ) {
            shieldCounter++;
        } if ( shieldCounter % 2 === 0 && i % 6 === 0) {
            armorCounter++;
        }
    }

    totalExpenses = (helmetCounter * helmetPrice) + (swordCounter * swordPrice) + (shieldCounter * shieldPrice) + (armorCounter * armorPrice)
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
}

// solve(7, 2, 3, 4, 5)
solve(23, 12.50, 21.50, 40, 200)